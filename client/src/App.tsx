import { Button } from "@nextui-org/react";

import RouteComponent from "@routes/RouteComponent";
import initialRoutes from "@routes/config/initialRoutes";

import AppProvider from "@components/generics/AppProvider";

function App() {

  return (
    <AppProvider>
      <RouteComponent routes={initialRoutes} />
    </AppProvider>
  );

}

export default App;