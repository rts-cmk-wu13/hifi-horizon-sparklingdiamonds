import React, { useState } from 'react';

const PostOfficeSelector = () => {
  const [selected, setSelected] = useState('1');

  const postOffices = [
    {
      id: '1',
      address: 'Fedex Station Jernholmen 28, 32, 2650 Hvidovre',
      lat:  55.6085083,
      lng: 12.4881724
    }, 
    {
      id: '2',
      address: 'ServicePoint FedEx Gl. Kongevej 163, 1850 Frederiksberg C',
      lat: 55.67978169857385,
      lng: 12.534127833446929
    }, 
    {
      id: '3',
      address: 'Mail Boxes Etc. København Østerbrogade 226, st. tv, 2100 København',
      lat: 55.713792100672876,
      lng: 12.577886900000001
    } 
  ];

  const selectedPostOffice = postOffices.find(po => po.id === selected);
  const mapUrl = `https://maps.google.com/maps?q=${selectedPostOffice.lat},${selectedPostOffice.lng}&z=15&output=embed`;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
        <img src="../../Produktbilleder/fedex.svg" alt="Fedex-logo" />
      <p style={{ fontWeight: 'bold' }}>
        Your order will be shipped with <span style={{ color: '#4D148C' }}>FedEx</span> selected a postoffice
      </p>

      {/* Dynamic Google Map */}
      <div style={{ marginBottom: '20px' }}>
        <iframe
          title="map"
          src={mapUrl}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>

      {/* Post office radio buttons */}
      {postOffices.map(po => (
        <div key={po.id} style={{ margin: '10px 0' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="postoffice"
              value={po.id}
              checked={selected === po.id}
              onChange={() => setSelected(po.id)}
              style={{ marginRight: '10px' }}
            />
            <span
              style={{
                textDecoration: po.id === '2' ? 'underline' : 'none',
                color: po.id === '2' ? '#1a0dab' : '#000'
              }}
            >
              {po.address}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PostOfficeSelector;
