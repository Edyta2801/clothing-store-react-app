import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from './logo.png';

const styles = {
  width: 150,
  height: 'auto',
};

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logoImg} alt="logo" style={styles} />
      </Link>
    </div>
  );
}

export default Logo;
