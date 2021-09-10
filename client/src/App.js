import React, { createContext, useReducer, useEffect, useContext } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory
} from 'react-router-dom';

import {reducer,initialState} from './reducers/userReducer';
 
import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Editor from './pages/Editor';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export const UserContext = createContext();
const data = {
  thought: "Today is a wonderful day to have a wonderful day!",
  author: "J. K. Rowling"
}
const Routing  = ()=>{
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))   
    if(user){
      dispatch({type:"USER",payload:user})
      console.log(user)
      history.push('/')
    }else{
      history.push('/signin')
    } 
  },[]);
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/editor">
          <Editor thought={data.thought} author={data.author} />
        </Route>
      </Switch>
  )
}


function App() {

  const location = useLocation();
  const [state,dispatch] = useReducer(reducer,initialState);
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Routing/>
    </UserContext.Provider>
  );
}

export default App;
