import React from 'react';
import Card from './Card';
import { Icon } from '../utils/Icon';

function Portfolio() {
  return (
    <div className="cardContainer">
      <Card
        title="Art and Night"
        text="A participative platform for art promotion and distribution."
        githubRepo="https://github.com/xiaoju/artandnight"
        status="online"
        webPreview="http://www.artandnight.com"
        builtWith={[Icon.javascript, Icon.react, Icon.semanticui]}
      />
      <Card
        title="xiaoju.io"
        text="This website!"
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        status="online"
        webPreview="http://www.xiaoju.io"
        builtWith={[Icon.javascript, Icon.react, Icon.bootstrap]}
      />
      <Card
        title="ActiveLink"
        text="A platform for schools to manage their extra-curricular offerings. Including authentication and payment backend."
        githubRepo="https://github.com/xiaoju/activelink"
        status="work in progress"
        webPreview="http://activelink.xiaoju.io"
        builtWith={[
          Icon.javascript,
          Icon.react,
          Icon.nodejs,
          Icon.expressjs,
          Icon.stripe,
          Icon.bootstrap
        ]}
      />
      <Card
        title="Juniper lab"
        text="A virtual lab built with Vagrant around Juniper routers, to test network routing protocols."
        githubRepo="https://github.com/xiaoju/junos_vagrant_virtual_lab"
        status="closed"
        webPreview=""
        builtWith={[Icon.vagrant, Icon.junos]}
      />
      <Card
        title="myReads"
        text="1st project, interfacing to Udacity backend."
        githubRepo="https://github.com/xiaoju/react_nd-01-myreads"
        webPreview="http://myreads.xiaoju.io"
        builtWith={[Icon.javascript, Icon.react]}
      />
      <Card
        title="Readable"
        text="Complete blogging webapp built from scratch using using React, Redux and vanilla CSS styling."
        githubRepo="https://github.com/xiaoju/react_nd-02b"
        webPreview="http://readable.xiaoju.io"
        builtWith={[Icon.vagrant, Icon.css]}
      />
      <Card
        title="MobileFlashCards"
        text="A flashcards mobile app for iOS and Android, built with React Native."
        githubRepo="https://github.com/xiaoju/react_nd-03-MobileFlashCards"
        webPreview=""
        builtWith={[Icon.reactnative, Icon.android, Icon.ios]}
      />
    </div>
  );
}

export default Portfolio;
