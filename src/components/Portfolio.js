import React from 'react';
import Card from './Card';
import { Icon } from '../utils/Icon';

import artandnight0 from '../pictures/artandnight0.png';
import artandnight1 from '../pictures/artandnight1.jpg';
import artandnight2 from '../pictures/artandnight2.png';
import xiaojuio1 from '../pictures/xiaojuio1.png';
import myReads1 from '../pictures/myReads1.png';
import myReads2 from '../pictures/myReads2.png';

import animals1 from '../pictures/animals1.jpeg';
import animals2 from '../pictures/animals2.jpeg';
import animals3 from '../pictures/animals3.jpeg';
import animals4 from '../pictures/animals4.jpeg';
import animals5 from '../pictures/animals5.jpeg';
import animals6 from '../pictures/animals6.jpeg';

function Portfolio() {
  return (
    <div className="cardContainer">
      <Card
        title="art and night"
        text={[
          'A participative platform for promotion and distribution of art through innovative channels.'
        ]}
        githubRepo="https://github.com/xiaoju/artandnight"
        status="online"
        webLink="http://www.artandnight.com"
        techno={[
          Icon.javascript,
          Icon.react,
          Icon.semanticui,
          Icon.reactrouter
        ]}
        pictures={[artandnight1, artandnight2, artandnight0]}
      />
      <Card
        title="readable"
        text={[
          'Complete blogging webapp built from scratch using with React, Redux and vanilla CSS styling.',
          'Second project for React Udacity NanoDegree.'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        webLink="http://readable.xiaoju.io"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        techno={[Icon.react, Icon.css, Icon.reactrouter]}
        pictures={[animals3, animals1, animals4]}
      />
      <Card
        title="MobileFlashCards"
        text={[
          'A flashcards mobile app for iOS and Android, built with React Native.',
          'Third and last project for React Udacity NanoDegree.'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-03-MobileFlashCards"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        techno={[Icon.reactnative, Icon.android, Icon.ios]}
        pictures={[animals4, animals1, animals5]}
      />
      <Card
        title="xiaoju.io"
        text={['This website!']}
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        status="online"
        webLink="http://www.xiaoju.io"
        techno={[Icon.javascript, Icon.react, Icon.bootstrap, Icon.reactrouter]}
        pictures={[xiaojuio1, animals2, animals3, animals4]}
      />
      <Card
        title="myReads"
        text={[
          'A webapp to keep track of the books you read, want to read or are currently reading.',
          'Database access through public REST API.',
          'First project for React Udacity NanoDegree.'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-01-myreads"
        webLink="http://myreads.xiaoju.io"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        techno={[Icon.javascript, Icon.react, Icon.reactrouter]}
        pictures={[myReads1, myReads2]}
      />
      <Card
        title="ActiveLink"
        text={[
          'A platform for schools to manage their extra-curricular offerings.',
          'Including authentication and payment backend.'
        ]}
        githubRepo="https://github.com/xiaoju/activelink"
        status="work in progress"
        webLink="http://activelink.xiaoju.io"
        techno={[
          // Icon.javascript,
          Icon.react,
          Icon.nodejs,
          // Icon.expressjs,
          Icon.stripe,
          Icon.bootstrap
        ]}
        pictures={[animals5, animals6, animals4]}
      />
      <Card
        title="Juniper lab"
        text={[
          'A virtual lab built with Vagrant around Juniper routers, to experiment with network routing protocols.'
        ]}
        githubRepo="https://github.com/xiaoju/junos_vagrant_virtual_lab"
        status="closed"
        techno={[Icon.vagrant, Icon.junos]}
        pictures={[animals1, animals3, animals4]}
      />
      {/* <Card
        title="test"
        text={['test line1', 'test line2']}
        githubRepo="https://github.com/xiaoju/react_nd-03-MobileFlashCards"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        pictures={[animals4, animals1, animals5]}
        techno={[
          Icon.react,
          Icon.react,
          Icon.react,
          Icon.react,
          Icon.react,
          Icon.react,
          Icon.react,
          Icon.react
        ]}
      /> */}
    </div>
  );
}

export default Portfolio;
