import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import linkedinIcon from '../pictures/inIcon.svg';
import githubIcon from '../pictures/githubIcon.svg';
import gpsIcon from '../pictures/gpsIcon.svg';

function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
        // justifyContent: 'space-around'
      }}
    >
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

      <div className="xj-footer">
        <p>
          <img src={gpsIcon} height="17" alt="location: " /> Toulouse, France
        </p>
        <p>
          <Glyphicon glyph="envelope" style={{ fontSize: '1.2em' }} />
          <a href="mailto:info@xiaoju.io?subject=xiaoju - "> info@xiaoju.io</a>
        </p>
        <p>
          <a href="https://github.com/xiaoju">
            <img src={githubIcon} height="17" alt="github repo address: " />{' '}
            github.com/xiaoju
          </a>
        </p>
        <p>
          <a href="http://www.linkedin.com/in/sourcing">
            <img
              src={linkedinIcon}
              height="17"
              alt="linkedin profile address: "
            />{' '}
            linkedin.com/in/sourcing
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
