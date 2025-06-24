import React, { useState } from 'react';

const PostOfficeSelector = () => {
  const [selected, setSelected] = useState('1');

  const postOffices = [
    {
      id: '1',
      address: 'Postoffice - 4 Leah Close, Edinburgh, United Kingdom',
      lat: 55.9533,
      lng: -3.1883
    },
    {
      id: '2',
      address: 'Postoffice - 7 The Old School House, Edinburgh, United Kingdom',
      lat: 55.9500,
      lng: -3.1800
    },
    {
      id: '3',
      address: 'Postoffice - 28 Thwaites Oak Close, Edinburgh, United Kingdom',
      lat: 55.9600,
      lng: -3.1900
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
