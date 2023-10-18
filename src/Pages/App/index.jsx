import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import SignIn from "../SignIn";
import Register from "../Register";
import NotFound from "../NotFound";

import "./App.css";

const AppRoutes = () => {
  let Routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return Routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
