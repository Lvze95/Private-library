import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { ShowAuthors } from "./Pages/Author/ShowAuthors";
import { ShowBooks } from "./Pages/Book/ShowBooks";
import { ShowUsers } from "./Pages/User/ShowUsers";
import { ShowGenres } from "./Pages/Genre/ShowGenres";
import ErrorPage from "./ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/authors",
    element: <ShowAuthors />,
  },
  {
    path: "/books",
    element: <ShowBooks />,
  },
  {
    path: "/genres",
    element: <ShowGenres />,
  },
  {
    path: "/user",
    element: <ShowUsers />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default routes;
