import { Button } from "@nextui-org/react";

import AppProvider from "@components/generics/AppProvider";

function App() {

  return (
    <AppProvider>
      <h3>Hare Krishna</h3>
      <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
    </AppProvider>
  );

}

export default App;