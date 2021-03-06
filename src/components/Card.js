import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import IconLinkWithTooltip from './IconLinkWithTooltip';
import iconGithub from '../pictures/iconGithubBlack.svg';
import iconUdacity from '../pictures/iconUdacity.svg';
import iconLink from '../pictures/iconLink.svg';

function Card(props) {
  return (
    <div className="xj-card">
      <h4>
        {props.title}
        {/* <a href={props.webLink}>{props.title}</a> */}
      </h4>
      <a href={props.webLink}>
        {/* prettier-ignore */}
        <span className="cardLink"></span>
      </a>
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
      <div className="xj-card-description">
        {props.text.map((thisLine, index) => (
          <p key={index}>
            {thisLine}
            <br />
          </p>
        ))}
      </div>
      <div className="xj-labels-row">
        {props.udacityLink && (
          <div className="xj-label">
            <IconLinkWithTooltip
              id="tooltip-udacity"
              alt="Udacity React Nanodegree"
              tooltip="Created for Udacity React Nanodegree Program."
              placement="top"
              href={props.udacityLink}
              srcIcon={iconUdacity}
              height="20"
              style={{ margin: '0.3em' }}
            />
          </div>
        )}

        {props.techno && (
          <div className="xj-label">
            {props.techno.map(item => (
              <IconLinkWithTooltip
                key={item.alt}
                id={item.alt}
                alt={item.alt}
                tooltip={item.title}
                placement="top"
                href={item.link}
                srcIcon={item.icon}
                height="20"
                style={{ margin: '0.3em' }}
              />
            ))}
          </div>
        )}

        <div className="xj-label">
          {props.webLink && (
            <IconLinkWithTooltip
              id="tooltip-siteLink"
              alt="Link to website"
              tooltip="Check it live!"
              placement="top"
              href={props.webLink}
              srcIcon={iconLink}
              height="20"
              style={{ margin: '0.3em' }}
            />
          )}
          <IconLinkWithTooltip
            id="tooltip-github"
            alt="github repo"
            tooltip="See code on github"
            placement="top"
            href={props.githubRepo}
            srcIcon={iconGithub}
            height="20"
            style={{ margin: '0.3em' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  githubRepo: PropTypes.string.isRequired,
  status: PropTypes.string,
  webLink: PropTypes.string,
  techno: PropTypes.array,
  pictures: PropTypes.array.isRequired
};
