import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }}
    >
      <div style={{ flexGrow: '1' }}>
        <div className="xj-card">
          <p>
            小 [xiǎo]:{' '}
            <a href="https://www.yoyochinese.com/blog/how-nicknames-work-in-Chinese">
              prefix
            </a>{' '}
            used in front of a family name to indicate informality or affection,
            small, little, young.
          </p>
          <p>
            马驹 [mǎ jū]:{' '}
            <a href="https://en.wikipedia.org/wiki/Foal">young horse</a> (colt,
            filly, foal)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
