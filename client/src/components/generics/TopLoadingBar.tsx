import React from 'react';

import { BarLoader } from 'react-spinners';

function TopLoadingBar() {

  const barLoaderAttributes = {
    width: '100%',
    height: 5,
    color: '#9500a5'
  };

  return <BarLoader {...barLoaderAttributes} />;

};

export default TopLoadingBar;