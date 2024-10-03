import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Viewall from "../Pages/Viewallappointments/Viewall";

// import Signup from "../Pages/Singup/Signup";
// import Resetpassword from "../Pages/ResetPassword/Resetpassword";
import Appointments from "../Pages/Appointments/Appointments";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Settings from "../Pages/Settings/Settings";


const router = createBrowserRouter([{
    path: '/',
    element: <App />,

    children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'appointments', element: <Appointments /> },
        { path: 'settings', element: <Settings /> },
        { path: 'viewallappointments', element: <Viewall /> }
    ]
}])


export default router


