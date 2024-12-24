import React from 'react';

import { NextUIProvider } from "@nextui-org/react";

import { IGenericChildrenProps } from 'interfaces/uiInterfaces/common';

const AppProvider: React.FC<IGenericChildrenProps> = (props) => {

  const { children } = props;

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

export default AppProvider;