import React from 'react';

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    backgroundColor: '#f7c210',
    color: '#000',
    width: '100%',
  };

  return (
    <header style={headerStyle}>
      <h1>My Todo</h1>
    </header>
  );
}

export default Header;
