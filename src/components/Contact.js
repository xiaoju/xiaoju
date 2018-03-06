import React from 'react';
import iconLn from '../pictures/iconLn.svg';
import iconLn_hover from '../pictures/iconLn_hover.svg';
import iconEnvelope from '../pictures/iconEnvelope.svg';
import iconEnvelope_hover from '../pictures/iconEnvelope_hover.svg';
import iconGithub from '../pictures/iconGithub.svg';
import iconGithub_hover from '../pictures/iconGithub_hover.svg';
import iconGps from '../pictures/iconGps.svg';
import iconGps_hover from '../pictures/iconGps_hover.svg';

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
        <div className="xj-card flex-column">
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
      <div className="xj-footer">
        <p className="left">
          <a href="https://goo.gl/maps/apLJXjbFjfm" className="logo_swapping">
            <img
              className="logo_passive"
              src={iconGps}
              height="35"
              title="Toulouse, France"
              alt="location: Toulouse, France"
            />
            <img
              className="logo_hover"
              src={iconGps_hover}
              height="35"
              title="Toulouse, France"
              alt="location: Toulouse, France"
            />
          </a>
        </p>
        <p>
          <a
            href="mailto:jerome@xiaoju.io?subject=xiaoju.io - contact&body=Hi Jerome,"
            className="logo_swapping"
          >
            <img
              className="logo_passive"
              src={iconEnvelope}
              height="35"
              title="jerome@xiaoju.io"
              alt="email: jerome@xiaoju.io"
            />
            <img
              className="logo_hover"
              src={iconEnvelope_hover}
              height="35"
              title="jerome@xiaoju.io"
              alt="email: jerome@xiaoju.io"
            />
          </a>
        </p>
        <p>
          <a
            href="http://www.linkedin.com/in/sourcing"
            className="logo_swapping"
          >
            <img
              className="logo_hover"
              src={iconLn_hover}
              height="35"
              alt="linkedInlogo"
              title="linkedin.com/in/sourcing/"
            />
            <img
              className="logo_passive"
              src={iconLn}
              height="35"
              alt="linkedInlogo"
              title="https://www.linkedin.com/in/sourcing"
            />
          </a>
        </p>
        <p>
          <a href="https://github.com/xiaoju" className="logo_swapping">
            <img
              className="logo_hover"
              src={iconGithub_hover}
              height="35"
              title="github.com/xiaoju"
              alt="github.com/xiaoju"
            />
            <img
              className="logo_passive"
              src={iconGithub}
              height="35"
              title="github.com/xiaoju"
              alt="github.com/xiaoju"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
