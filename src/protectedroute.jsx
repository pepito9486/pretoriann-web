import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { usingcontext } from './context/usuariocontext';

function Protectedroute(props) {
     const {user, isauthenticate, loading}=usingcontext()
    // if(loading) return <h1>loading...</h1> 
     
     if(!isauthenticate && !loading) {
     return <Navigate to='/login' replace />
     }
    return (
        <Outlet/>
    );
}

export default Protectedroute;