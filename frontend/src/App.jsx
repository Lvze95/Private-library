import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
};

export default App;
