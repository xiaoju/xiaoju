import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap';
import iconGithub from '../pictures/iconGithub.svg';
import iconUdacity from '../pictures/iconUdacity.svg';
import iconLink from '../pictures/iconLink.svg';

function Card(props) {
  function IconLinkWithTooltip({
    id,
    href,
    tooltip,
    placement,
    srcIcon,
    height,
    alt,
    style
  }) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
        placement={placement}
        delayShow={150}
        delayHide={80}
      >
        <a href={href}>
          <img src={srcIcon} height={height} alt={alt} style={style} />
        </a>
      </OverlayTrigger>
    );
  }

  return (
    <div className="xj-card">
      <h4>
        <a href={props.webLink}>{props.title}</a>
      </h4>
      <Carousel interval={null}>
        {props.pictures.length &&
          props.pictures.map((thisPict, index) => (
            <Carousel.Item key={index}>
              <img
                width={550}
                height={550}
                alt="website screenshots"
                src={thisPict}
              />
            </Carousel.Item>
          ))}
      </Carousel>
      <p>{props.text}</p>
      {props.udacityLink && (
        <IconLinkWithTooltip
          id="tooltip-udacity"
          alt="Udacity React Nanodegree"
          tooltip="This project was created towards graduation of Udacity React Nanodegree Program."
          placement="top"
          href={props.udacityLink}
          srcIcon={iconUdacity}
          height="17"
          style={{ margin: '0.3em' }}
        />
      )}

      {props.techno && (
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            maxWidth: '12em',
            border: 'solid thin'
          }}
        >
          <p>Built with </p>

          {props.techno.map(item => (
            <IconLinkWithTooltip
              key={item.alt}
              id={item.alt}
              alt={item.alt}
              tooltip={item.title}
              placement="top"
              href={item.link}
              srcIcon={item.icon}
              height="17"
              style={{ margin: '0.3em' }}
            />
          ))}
        </div>
      )}
      <div>
        <IconLinkWithTooltip
          id="tooltip-siteLink"
          alt="Link to website"
          tooltip="Check it live!"
          placement="top"
          href={props.webLink}
          srcIcon={iconLink}
          height="17"
          style={{ margin: '0.3em' }}
        />
        <IconLinkWithTooltip
          id="tooltip-github"
          alt="github repo"
          tooltip="See code on github"
          placement="top"
          href={props.githubRepo}
          srcIcon={iconGithub}
          height="17"
          style={{ margin: '0.3em' }}
        />
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  githubRepo: PropTypes.string.isRequired,
  status: PropTypes.string,
  webLink: PropTypes.string,
  techno: PropTypes.array,
  pictures: PropTypes.array.isRequired
  // key: PropTypes.string.isRequired,
  // href: PropTypes.string.isRequired,
  // placement: PropTypes.string.isRequired,
  // srcIcon: PropTypes.func.isRequired,
  // height: PropTypes.string.isRequired,
  // style: PropTypes.object.isRequired
};
