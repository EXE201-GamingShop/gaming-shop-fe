import React from 'react';

const StickyIcons = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <a 
          href="https://www.facebook.com/doninhhai" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            // backgroundColor: '#189bf2',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden', 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="assets/images/fb.png" 
            alt="Facebook Icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </a>

        <a 
          href="https://zalo.me/0397734973" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            // backgroundColor: '#1877F2', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden', 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="assets/images/zalo.png" 
            alt="Zalo Icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </a>
    </div>
  );
};

export default StickyIcons;