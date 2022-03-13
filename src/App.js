import './App.css';
import { } from "react-router-dom";
import CoursePage from "./components/pages/CoursePage";

import GroupsPage from "./components/pages/GroupsPage";
import PriceAnalizPage from "./components/pages/PriceAnalizPage";
import SchedulePage from "./components/pages/SchedulePage";
import StudentsAttendans from "./components/pages/StudentsAttendans";
import StudentsPage from "./components/pages/StudentsPage";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import {} from "react-router";


import DashboardPage from "./components/pages/DashboardPage";

function App() {
    const routes=[
        {path:'/',component:CoursePage},
        {path:'/group',component:GroupsPage},
        {path:'/price',component:PriceAnalizPage},
        {path:'/schedule',component:SchedulePage},
        {path:'/attends',component:StudentsAttendans},
        {path:'/students',component:StudentsPage},

    ]
  return (
    <div className="App">

     <BrowserRouter>
         <Routes>
             {routes.map((item) => (
                 <Route exact path={item.path} element={<item.component />} />
             ))}
         </Routes>
     </BrowserRouter>

        <DashboardPage />

    </div>
  );
}

export default App;
