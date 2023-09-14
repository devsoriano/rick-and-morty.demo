import { BrowserRouter, useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { RickAndMortyProvider } from "../Context";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

function App() {
  return (
    <RickAndMortyProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RickAndMortyProvider>
  );
}

export default App;
