import React from 'react';

export default function Name({ children }) {
  const { nameStyle } = styles;

  return <div style={nameStyle}>{children}</div>;
}

const styles = {
  nameStyle: {
    border: '1px solid lightgray',
    borderRadius: '4px',
    marginRight: '5px',
    marginBottom: '5px',
    padding: '5px',
  },
};
