import "./App.css";
import { MenuProvider } from "./Context/MenuContext/MenuContext";
import { Layout } from "./Layout";
import { AppRouter } from "./Router/Router";
import { RoutingProvider } from "./Context/RoutingContext/RoutingContext";

function App() {
  return (
    <>
      <RoutingProvider>
        <MenuProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </MenuProvider>
      </RoutingProvider>
    </>
  );
}

export default App;
