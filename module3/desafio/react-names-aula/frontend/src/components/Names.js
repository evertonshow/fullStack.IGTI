import React from 'react';

export default function Names({ children }) {
  const { nameContainerStyle } = styles;
  return <div style={nameContainerStyle}>{children}</div>;
}

const styles = {
  nameContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px',
    flexWrap: 'wrap',
  },
};
