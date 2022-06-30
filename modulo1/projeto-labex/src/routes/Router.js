import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHomePage from '../pages/AdminHomePage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
import CreateTripPage from '../pages/CreateTripPage';
import HomePage from '../pages/HomePage';
import ListTripPage from '../pages/ListTripsPage';
import LoginPage from '../pages/LoginPage';
import TripDetailsPage from '../pages/TripDetailsPage'



function Router(){
<BrowserRouter>
    <Routes>
        <Route index element = {<HomePage/>}/>
        <Route element = {<LoginPage/>}/>
        <Route element= {<AdminHomePage/>}/>
        <Route element = {<ApplicationFormPage/>}/>
        <Route element = {<CreateTripPage/>}/>
        <Route element = {<ListTripPage/>}/>
        <Route element = {<TripDetailsPage/>}/>

    </Routes>
</BrowserRouter>
}