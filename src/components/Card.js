import React from 'react';
import { Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap';
import iconGithub from '../pictures/iconGithub.svg';
import iconUdacity from '../pictures/iconUdacity.svg';
import iconLink from '../pictures/iconLink.svg';
import LinkWithTooltip from './LinkWithTooltip';
import image1 from '../pictures/artandnight-home_artistes_v.jpg';

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
      <h4>{props.title}</h4>
      <Carousel interval={null}>
        <Carousel.Item>
          <img width={350} height={250} alt="350x250" src={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={350}
            height={250}
            alt="350x250"
            src="https://placeimg.com/350/250/people"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={350}
            height={250}
            alt="350x250"
            src="https://placeimg.com/350/250/arch"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={350}
            height={250}
            alt="350x250"
            src="https://placeimg.com/350/250/animals"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={350}
            height={250}
            alt="350x250"
            src="https://placeimg.com/350/250/tech"
          />
        </Carousel.Item>
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

      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: '12em',
          border: 'solid thin'
        }}
      >
        <p>Built with </p>
        {props.builtWith &&
          props.builtWith.map(item => (
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
      <div>
        <IconLinkWithTooltip
          id="tooltip-siteLink"
          alt="Link to website"
          tooltip="Check it live!"
          placement="top"
          href={props.webPreview}
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
