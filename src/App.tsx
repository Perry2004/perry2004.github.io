import { Alert, HeroUIProvider } from "@heroui/react";
function App() {
  return (
    <HeroUIProvider>
      {/* <h1 className="text-center text-3xl font-bold">Hello World</h1> */}
      <Alert title="Hello World" />
    </HeroUIProvider>
  );
}

export default App;
