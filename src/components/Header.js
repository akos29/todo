import React from 'react';

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  return (
    <header style={headerStyle}>
      <h1>My Todo</h1>
    </header>
  );
}

export default Header;
