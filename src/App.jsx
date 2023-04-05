import { useEffect } from "react";
import "./App.css";
import { MenuProvider } from "./Context/MenuContext/MenuContext";
import { Layout } from "./Layout";
import { AppRouter } from "./Router/Router";
import { ParallaxProvider } from "react-scroll-parallax";

const API_KEY = import.meta.env.VITE_API_KEY;
const q = "?apiKey=API_KEY";
function App() {
  return (
    <>
      <ParallaxProvider>
        <MenuProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </MenuProvider>
      </ParallaxProvider>
    </>
  );
}

export default App;
