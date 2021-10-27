import React, { useState, useEffect, useContext } from 'react';
import {UserContext} from '../App';
import Header from '../partials/Header';
import '../profile.css';



function Profile() {
    const {state,dispatch} = useContext(UserContext);

    return (
        <>
        <Header />
        <div className="pt-56">
       <div class="bg-white  pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div class="relative h-40">
        <img class="absolute h-full w-full object-cover" src="https://source.unsplash.com/random"/>
      </div>
      <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
      </div>
      <div class="mt-16">
        <h1 class="text-lg text-center font-semibold">
          {state.name} 
        </h1>
        <p class="text-sm text-gray-600 text-center">
        {state.email}
        </p>
      </div>
      <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          User experience
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          VueJS
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          TailwindCSS
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          React
        </div>
        <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
          Painting
        </div>
      </div>
      </div>
    </div>
      </>
        
    );
}

export default Profile;