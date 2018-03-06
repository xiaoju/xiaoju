import React from 'react';
import Card from './Card';
import { Icon } from '../utils/Icon';

import underconstruction from '../pictures/underconstruction.jpg';
import artandnight0 from '../pictures/artandnight0.png';
import artandnight1 from '../pictures/artandnight1.jpg';
import artandnight2 from '../pictures/artandnight2.png';
import xiaojuio1 from '../pictures/xiaojuio1.png';
import myReads1 from '../pictures/myReads1.png';
import myReads2 from '../pictures/myReads2.png';
import readable1 from '../pictures/readable1.jpg';
import readable2 from '../pictures/readable2.jpg';
import mobileFlashCards1 from '../pictures/mobileFlashCards1.jpg';
import mobileFlashCards2 from '../pictures/mobileFlashCards2.jpg';
import mobileFlashCards3 from '../pictures/mobileFlashCards3.jpg';
import mobileFlashCards4 from '../pictures/mobileFlashCards4.jpg';
import mobileFlashCards5 from '../pictures/mobileFlashCards5.jpg';

// import animals1 from '../pictures/animals1.jpeg';
// import animals2 from '../pictures/animals2.jpeg';
import animals3 from '../pictures/animals3.jpeg';
// import animals4 from '../pictures/animals4.jpeg';
// import animals5 from '../pictures/animals5.jpeg';
// import animals6 from '../pictures/animals6.jpeg';

function Portfolio() {
  return (
    <div className="cardContainer">
      <Card
        title="Art and Night"
        text={[
          'A participative platform for promotion and distribution of art through innovative channels.',
          'A startup currently operating in stealth mode...'
        ]}
        githubRepo="https://github.com/xiaoju/artandnight"
        status="online"
        webLink="http://www.artandnight.com"
        techno={[
          Icon.responsive,
          Icon.javascript,
          Icon.react,
          Icon.semanticui,
          Icon.reactrouter
        ]}
        pictures={[artandnight1, artandnight2, artandnight0]}
      />
      <Card
        title="Readable"
        text={[
          'Complete blogging webapp built from scratch with React, Redux and vanilla CSS styling. Offer input forms, filter function, and manages API calls to backend.',
          'Vintage interface in the colors of Atom editor!',
          'Second project for React Udacity NanoDegree.'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        webLink="http://readable.xiaoju.io"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        techno={[Icon.javascript, Icon.react, Icon.css, Icon.reactrouter]}
        pictures={[readable1, readable2]}
      />
      <Card
        title="Mobile Flash Cards"
        text={[
          'A flashcards mobile app for iOS and Android, built with React Native.',
          'Third and last project for React Udacity NanoDegree.'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-03-MobileFlashCards"
        udacityLink="https://eu.udacity.com/course/react-nanodegree--nd019"
        techno={[Icon.reactnative, Icon.android, Icon.ios]}
        pictures={[
          mobileFlashCards1,
          mobileFlashCards2,
          mobileFlashCards3,
          mobileFlashCards4,
          mobileFlashCards5
        ]}
      />
      <Card
        title="xiaoju.io"
        text={[
          'This website!',
          'Responsive design. Based on react-bootstrap with many custom adjustments. Own design for the flexbox cards.',
          'Special attention given to all the User Interface details and to components reusability...'
        ]}
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        status="online"
        webLink="http://www.xiaoju.io"
        techno={[
          Icon.responsive,
          Icon.javascript,
          Icon.react,
          Icon.bootstrap,
          Icon.reactrouter
        ]}
        pictures={[xiaojuio1]}
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
          'Full stack design including authentication, payment backend and content database fed by user forms.',
          'Work In Progress!'
        ]}
        githubRepo="https://github.com/xiaoju/activelink"
        status="work in progress"
        webLink="http://activelink.xiaoju.io"
        techno={[
          Icon.javascript,
          Icon.responsive,
          Icon.react,
          Icon.nodejs,
          Icon.expressjs,
          Icon.stripe,
          Icon.bootstrap
        ]}
        pictures={[underconstruction]}
      />
      <Card
        title="Juniper lab"
        text={[
          'A virtual lab built with Vagrant around Juniper routers, to experiment with network routing protocols.'
        ]}
        githubRepo="https://github.com/xiaoju/junos_vagrant_virtual_lab"
        status="closed"
        techno={[Icon.vagrant, Icon.junos]}
        pictures={[animals3]}
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
