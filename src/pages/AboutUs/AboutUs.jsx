import React, { useState, useEffect } from 'react';
import './AboutUs.scss';

export default function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/about-us');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setAboutData(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching about data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="our-history">
        <div className="container">
          <div className="loading-spinner">Indlæser...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="our-history">
        <div className="container">
          <div className="error-message">
            Fejl ved indlæsning: {error}
          </div>
        </div>
      </div>
    );
  }

  if (!aboutData) {
    return null;
  }

  return (
    <div className="our-history">
      <div className="container">
        <h1 className="main-title">{aboutData.mainTitle}</h1>
        
        {/* History Section */}
        <section className="history-section">
          <div className="content-wrapper">
            <div className="image-container">
              <img 
                src={aboutData.history.image} 
                alt={aboutData.history.imageAlt} 
                className="history-image" 
              />
            </div>
            <div className="text-content centered">
              <h2 className="section-title">{aboutData.history.title}</h2>
              <p className="highlight-text">
                {aboutData.history.highlightText}
              </p>
              {aboutData.history.paragraphs.map((paragraph, index) => (
                <p key={index} className="body-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Hear The Difference Section */}
        <section className="hear-difference-section">
          <div className="content-wrapper reverse">
            <div className="image-container">
              <img 
                src={aboutData.hearDifference.image} 
                alt={aboutData.hearDifference.imageAlt} 
                className="showroom-image" 
              />
            </div>
            <div className="text-content centered">
              <h2 className="section-title">{aboutData.hearDifference.title}</h2>
              <p className="highlight-text">
                {aboutData.hearDifference.highlightText}
              </p>
              {aboutData.hearDifference.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={paragraph.type === 'emphasis' ? 'emphasis-text' : 'body-text'}
                >
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="content-wrapper">
            <div className="image-container">
              <img 
                src={aboutData.services.image} 
                alt={aboutData.services.imageAlt} 
                className="services-image" 
              />
            </div>
            <div className="text-content centered">
              <h2 className="section-title">{aboutData.services.title}</h2>
              <p className="highlight-text">
                {aboutData.services.highlightText}
              </p>
              {aboutData.services.serviceList.map((service, index) => (
                <p key={index} className="body-text">
                  <span>{service.name}</span> {service.description}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Tailored For You Section */}
        <section className="tailored-section">
          <div className="content-wrapper reverse">
            <div className="image-container">
              <img 
                src={aboutData.tailored.image} 
                alt={aboutData.tailored.imageAlt} 
                className="services-image" 
              />
            </div>
            <div className="text-content centered">
              <h2 className="section-title">{aboutData.tailored.title}</h2>
              <p className="highlight-text">
                {aboutData.tailored.highlightText}
              </p>
              {aboutData.tailored.paragraphs.map((paragraph, index) => (
                <p key={index} className="body-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}