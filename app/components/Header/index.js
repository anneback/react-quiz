import React from 'react';

import A from './A';
import Img from './Img';
import Banner from './banner.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="http://nordnetab.com/careers/working-at-nordnet/">
          <Img src={Banner} alt="nordnet quiz logo" />
        </A>
      </div>
    );
  }
}

export default Header;
