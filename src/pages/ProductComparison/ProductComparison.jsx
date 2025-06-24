import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './ProductComparison.scss';

const fallbackSpecs = [
  { label: 'Digital Inputs', value: 'USB, Ethernet, Wi-Fi' },
  { label: 'Digital Outputs', value: 'AES/EBU, Coaxial, Toslink' },
  { label: 'Analog Outputs', value: 'None (Digital Only)' },
  { label: 'Supported Formats', value: 'PCM up to 32bit/384kHz, DSD512' },
  { label: 'Network', value: 'Gigabit Ethernet, Wi-Fi 802.11ac' },
  { label: 'Storage', value: '1TB Internal SSD (Optional)' },
  { label: 'Processing', value: 'Tesla G2 Platform' },
  { label: 'Memory', value: '2GB DDR3 RAM' },
  { label: 'Display', value: '4-inch Color LCD' },
  { label: 'Control', value: 'Lightning DS App, Web Interface' },
  { label: 'Power Consumption', value: '30W (Typical)' },
  { label: 'Standby Power', value: '<1W' },
  { label: 'Dimensions (W×H×D)', value: '340 × 80 × 320 mm' },
  { label: 'Weight', value: '6.5 kg' },
  { label: 'Operating Temperature', value: '0°C to 40°C' },
  { label: 'Storage Temperature', value: '-20°C to 60°C' },
  { label: 'Humidity', value: '10% to 90% (Non-condensing)' },
  { label: 'Finish Options', value: 'Black, Silver, Gold' },
  { label: 'Warranty', value: '2 Years Limited Warranty' },
  { label: 'Certifications', value: 'CE, FCC, IC' }
];

// Funktion til at mappe API data til specifikationer
const mapApiToSpecs = (product) => {
  const specs = [];
  
  // Brand og Model
  if (product.brand) {
    specs.push({ label: 'Brand', value: product.brand });
  }
  if (product.model) {
    specs.push({ label: 'Model', value: product.model });
  }
  
  // Dimensioner
  if (product.dimensions) {
    const { width, height, depth, unit } = product.dimensions;
    specs.push({ 
      label: 'Dimensions (W×H×D)', 
      value: `${width} × ${height} × ${depth} ${unit}` 
    });
  }
  
  // Vægt
  if (product.weight) {
    specs.push({ label: 'Weight', value: `${product.weight} kg` });
  }
  
  // Garanti
  if (product.warranty) {
    specs.push({ label: 'Warranty', value: product.warranty });
  }
  
  // Farve muligheder
  if (product.colorOptions && product.colorOptions.length > 0) {
    const colors = product.colorOptions
      .filter(color => color.available)
      .map(color => color.name)
      .join(', ');
    specs.push({ label: 'Finish Options', value: colors });
  }
  
  // Kategori
  if (product.category) {
    specs.push({ label: 'Category', value: product.category });
  }
  
  // Pris
  if (product.price && product.currency) {
    specs.push({ label: 'Price', value: `${product.currency}${product.price}` });
  }
  
  // Lager status
  if (product.stockStatus) {
    specs.push({ label: 'Stock Status', value: product.stockStatus });
  }
  
  return specs;
};

export default function ProductComparison() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Gem valgte produkter i sessionStorage når URL ændres
  useEffect(() => {
    const ids = searchParams.getAll('product');
    if (ids.length > 0) {
      sessionStorage.setItem('compareProducts', JSON.stringify(ids));
    }
  }, [searchParams]);

  // Hent produkter fra API eller sessionStorage
  useEffect(() => {
    let ids = searchParams.getAll('product');
    
    // Hvis ingen produkter i URL, tjek sessionStorage
    if (ids.length === 0) {
      const stored = sessionStorage.getItem('compareProducts');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setSearchParams({ product: parsed });
            return;
          }
        } catch (e) {
          console.error('Fejl ved parsing af sessionStorage:', e);
          sessionStorage.removeItem('compareProducts');
        }
      }
      setError('Vælg mellem 1 og 3 produkter at sammenligne.');
      setLoading(false);
      return;
    }

    // Begræns til maksimalt 3 produkter
    if (ids.length > 3) {
      ids = ids.slice(0, 3);
      setSearchParams({ product: ids });
      sessionStorage.setItem('compareProducts', JSON.stringify(ids));
      return;
    }

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const fetched = await Promise.all(
          ids.map(async id => {
            try {
              const response = await fetch(`https://hifi-api-o08m.onrender.com/products/${id}`);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return await response.json();
            } catch (error) {
              console.error(`Fejl ved hentning af produkt ${id}:`, error);
              return null;
            }
          })
        );

        const enriched = fetched.map((product, idx) => {
          if (!product) {
            return { 
              id: ids[idx], 
              name: 'Produkt ikke fundet', 
              image: '', 
              specifications: fallbackSpecs 
            };
          }

          // Map API data til specifikationer og kombiner med fallback
          const apiSpecs = mapApiToSpecs(product);
          const combinedSpecs = fallbackSpecs.map(fallbackSpec => {
            const apiSpec = apiSpecs.find(s => s.label === fallbackSpec.label);
            return apiSpec || fallbackSpec;
          });

          // Tilføj ekstra specifikationer fra API der ikke er i fallback
          apiSpecs.forEach(apiSpec => {
            if (!fallbackSpecs.find(f => f.label === apiSpec.label)) {
              combinedSpecs.push(apiSpec);
            }
          });

          // Brug det første tilgængelige billede fra colorOptions eller placeholder
          let image = '';
          if (product.colorOptions && product.colorOptions.length > 0) {
            const availableColor = product.colorOptions.find(color => color.available && color.img);
            if (availableColor) {
              image = availableColor.img;
            }
          }

          return {
            ...product,
            image: image,
            specifications: combinedSpecs
          };
        });

        setProducts(enriched);
      } catch (err) {
        console.error('Fejl ved hentning af produkter:', err);
        setError('Kunne ikke hente produktdata. Tjek din internetforbindelse.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams, setSearchParams]);

  const getSpecValue = (product, label) => {
    const spec = product.specifications?.find(s => s.label === label);
    return spec?.value || 'N/A';
  };

  const removeProduct = (idToRemove) => {
    const current = searchParams.getAll('product');
    const updated = current.filter(id => id !== idToRemove);
    
    if (updated.length === 0) {
      // Hvis ingen produkter tilbage, ryd sessionStorage og naviger tilbage
      sessionStorage.removeItem('compareProducts');
      navigate(-1);
    } else {
      setSearchParams({ product: updated });
      sessionStorage.setItem('compareProducts', JSON.stringify(updated));
    }
  };

  if (loading) {
    return (
      <div className="product-comparison">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Indlæser produkter...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-comparison">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => navigate(-1)} className="retry-button">
            Tilbage til produkter
          </button>
        </div>
      </div>
    );
  }

  // Få alle specifikations labels fra alle produkter
  const allSpecLabels = [...new Set(
    products.flatMap(product => 
      product.specifications?.map(spec => spec.label) || []
    )
  )];

  return (
    <div className="product-comparison">
      <div className="comparison-container">
        <h1 className="comparison-title">Produktsammenligning</h1>
        <div className="comparison-table">
          <div className="table-header">
            <div className="spec-column">
              <div className="spec-label-header">Specifikationer</div>
            </div>
            {products.map((product) => (
              <div key={product.id} className="product-column">
                <div className="product-header">
                  <div className="product-image">
                    <img 
                      src={product.image || 'https://via.placeholder.com/200x133'} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x133';
                      }}
                    />
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <button 
                    onClick={() => removeProduct(product.id.toString())} 
                    className="retry-button"
                  >
                    Fjern
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="table-body">
            {allSpecLabels.map((label, idx) => (
              <div key={label} className={`table-row ${idx % 2 === 0 ? 'even' : 'odd'}`}>
                <div className="spec-column">
                  <div className="spec-label">{label}</div>
                </div>
                {products.map((product) => (
                  <div key={product.id + label} className="product-column">
                    <div className="spec-value">{getSpecValue(product, label)}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="actions" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <button className="retry-button" onClick={() => navigate(-1)}>
            Tilbage til produkter
          </button>
          <div style={{ fontSize: '14px', color: '#666', alignSelf: 'center' }}>
            {products.length} produkt{products.length !== 1 ? 'er' : ''} sammenlignet
          </div>
        </div>
      </div>
    </div>
  );
}