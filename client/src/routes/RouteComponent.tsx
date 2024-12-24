import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { IRoute, IRouteComponentProps } from '@interfaces/uiInterfaces/common';

import TopLoadingBar from '@components/generics/TopLoadingBar';

const RouteComponent: React.FC<IRouteComponentProps> = (props) => {

  const { routes } = props;

  function renderInitialRoute(route: IRoute, index: number) {

    const routeAttributes = {
      key: index,
      path: route.path,
      element: route.element
    };

    return <Route {...routeAttributes} />;
  }

  // function renderNotFoundRoute() {

  //   const notFoundRouteAttributes = {
  //     path: '*',
  //     element: <NotFoundPage />
  //   };

  //   return <Route {...notFoundRouteAttributes} />;

  // }

  return (
    <Suspense fallback={<TopLoadingBar />}>
      <Routes>
        {
          routes.map((route, index) => (
            renderInitialRoute(route, index)
          ))
        }
        {/* {renderNotFoundRoute()} */}
      </Routes>
    </Suspense>
  );

}

export default RouteComponent;