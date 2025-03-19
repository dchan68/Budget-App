//layouts
import Main, {mainLoader} from "./layouts/Main";

//action
import { logoutAction } from "./actions/logout";

import {createBrowserRouter, RouterProvider, } from "react-router-dom"
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error"
import { ToastContainer, toast } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error />,
    children: [  
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router}/>
    <ToastContainer />
  </div>;
}

export default App;
