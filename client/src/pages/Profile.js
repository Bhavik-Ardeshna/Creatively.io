import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../App'


function Profile() {
    const {state,dispatch} = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
            <h1>{state.name}</h1>  
        </div>
    );
}

export default Profile;