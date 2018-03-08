import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import iconLn from '../pictures/iconLn.svg';
import iconLn_hover from '../pictures/iconLn_hover.svg';
import iconEnvelope from '../pictures/iconEnvelope.svg';
import iconEnvelope_hover from '../pictures/iconEnvelope_hover.svg';
import iconGithub from '../pictures/iconGithub.svg';
import iconGithub_hover from '../pictures/iconGithub_hover.svg';
import iconGps from '../pictures/iconGps.svg';
import iconGps_hover from '../pictures/iconGps_hover.svg';

function Footer() {
  return (
    <div id="footer" className="xj-footer">
      <OverlayTrigger
        overlay={<Tooltip id="location">{'Toulouse, France'}</Tooltip>}
        placement="top"
        delayShow={150}
        delayHide={80}
      >
        <a
          className="logo_swapping left"
          href="https://goo.gl/maps/apLJXjbFjfm"
        >
          <img
            className="logo_passive"
            src={iconGps}
            height="35"
            alt="location: Toulouse, France"
          />
          <img
            className="logo_hover"
            src={iconGps_hover}
            height="35"
            alt="location: Toulouse, France"
          />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        overlay={<Tooltip id="location">{'linkedin.com/in/sourcing'}</Tooltip>}
        placement="top"
        delayShow={150}
        delayHide={80}
      >
        <a
          className="logo_swapping"
          href="https://www.linkedin.com/in/sourcing"
        >
          <img
            className="logo_passive"
            src={iconLn}
            height="35"
            alt="linkedin.com/in/sourcing"
          />
          <img
            className="logo_hover"
            src={iconLn_hover}
            height="35"
            alt="linkedin.com/in/sourcing"
          />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        overlay={<Tooltip id="location">{'jerome@xiaoju.io'}</Tooltip>}
        placement="top"
        delayShow={150}
        delayHide={80}
      >
        <a
          className="logo_swapping"
          href="mailto:jerome@xiaoju.io?subject=xiaoju.io - contact&body=Hi Jerome, "
        >
          <img
            className="logo_passive"
            src={iconEnvelope}
            height="35"
            alt="jerome@xiaoju.io"
          />
          <img
            className="logo_hover"
            src={iconEnvelope_hover}
            height="35"
            alt="jerome@xiaoju.io"
          />
        </a>
      </OverlayTrigger>
      <OverlayTrigger
        overlay={<Tooltip id="location">{'github.com/xiaoju'}</Tooltip>}
        placement="top"
        delayShow={150}
        delayHide={80}
      >
        <a className="logo_swapping" href="https://github.com/xiaoju">
          <img
            className="logo_passive"
            src={iconGithub}
            height="35"
            alt="github.com/xiaoju"
          />
          <img
            className="logo_hover"
            src={iconGithub_hover}
            height="35"
            alt="github.com/xiaoju"
          />
        </a>
      </OverlayTrigger>
    </div>
  );
}

export default Footer;
