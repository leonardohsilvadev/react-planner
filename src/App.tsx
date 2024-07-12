import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTripPage, TripDetailsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
