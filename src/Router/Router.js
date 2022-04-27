import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Archieve from '../Pages/Archieve/Archieve';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Notes from '../Pages/Notes/Notes';
import Signup from '../Pages/Signup/Signup';
import Trash from '../Pages/Trash/Trash';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/notes' element={ <Notes /> } />
                <Route path='/archieve' element={ <Archieve /> } />
                <Route path='/trash' element={ <Trash /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />
            </Routes>
        </div>
    );
};

export default Router;