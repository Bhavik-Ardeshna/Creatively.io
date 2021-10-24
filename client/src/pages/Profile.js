import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../App';
import '../profile.css';



function Profile() {
    const {state,dispatch} = useContext(UserContext);

    return (
        <div>
            <div class="container">
  <div class="card">
    <div class="icons">
      <img class="ham" src="https://i.imgur.com/boqY7Lz.png"/>
      <img class="float-right" src="https://i.imgur.com/Rx0C5u5.png"/>
      <img class="float-right" src="https://i.imgur.com/K7rZve9.png"/>
    </div>
    <div class="profile_pic">
    	<img class="pic" src="https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png"/>
            </div>
            <div class="title">
                {state.name}
            </div>
            <div class="designation">
                {state.email}
            </div>
            <div class="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat.
            </div>
            <hr class="line"/>
            <div class="footer">
                <button class="btn-more">MORE</button>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Profile;