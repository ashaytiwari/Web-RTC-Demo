import React from 'react';

import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from 'react-router-dom';

import { IGenericChildrenProps } from 'interfaces/uiInterfaces/common';

const AppProvider: React.FC<IGenericChildrenProps> = (props) => {

  const { children } = props;

  return (
    <Router>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Router>
  );
};

export default AppProvider;