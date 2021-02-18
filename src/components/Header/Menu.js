import React from 'react';

import './Menu.css';

const styles = {
  marginBottom: 10,
};

function Menu({children}) {
  return (
    <nav className="Menu" style={styles}>
      {children}
     Test
    </nav>
  );
}

export default Menu;
