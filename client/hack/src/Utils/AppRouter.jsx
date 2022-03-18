import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Registration from '../Pages/Registration';
import { LOGIN_ROUTE, REG_ROUTE } from './consts';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';

const AppRouter = () => {
    return (
            <Routes>
                <Route path={REG_ROUTE} element={<Registration/>}/>
                <Route path={LOGIN_ROUTE} element={<Login setUser={this.updateUserParams}/>}/>
                <Route path='/profile' element={<Profile user={this.state}/>}>
                <Route path=":profileId" element={<Profile user={this.state}/>}/>
                </Route>
                <Route path="*" element={""}/>
                <Route path="/" element={<Home />}/>
                </Routes>

    );
};

export default AppRouter;