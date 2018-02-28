import React from 'react';
import { Image } from 'react-bootstrap';
import iconGithub from '../pictures/iconGithub.svg';
import iconUdacity from '../pictures/iconUdacity.svg';
import iconLink from '../pictures/iconLink.svg';

function Card(props) {
  return (
    <div className="xj-card">
      <h4>{props.title}</h4>
      <a href="">
        <Image src="http://via.placeholder.com/350x350" responsive />
      </a>
      <p>{props.text}</p>
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
            <a href={item.link} key={item.alt}>
              <img
                src={item.icon}
                height="17"
                alt={item.alt}
                style={{ margin: '0.3em' }}
              />
            </a>
          ))}
      </div>

      <div>
        <a href={props.webPreview}>
          <img
            src={iconLink}
            height="17"
            alt="link to website"
            style={{ margin: '0.3em' }}
          />
        </a>
        <a href={props.githubRepo}>
          <img
            src={iconGithub}
            height="17"
            alt="github repo"
            style={{ margin: '0.3em' }}
          />
        </a>
        <a href={props.udacityLink}>
          <img
            src={iconUdacity}
            height="17"
            alt="Udacity link"
            style={{ margin: '0.3em' }}
          />
        </a>
      </div>
    </div>
  );
}

export default Card;
