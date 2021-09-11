import React, { useState, useEffect, useContext } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import {UserContext} from '../App'
function Header() {

  const [top, setTop] = useState(true);

  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const LogOut = ()=>{
    localStorage.setItem("user",null);
    localStorage.setItem("token",null);

    // dispatch({type:"CLEAR"});
    history.go(0)
  }

  const renderNavList = ()=>{
    if(state){

      return[
              <li>
                <Link to="/profile" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg> */}
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACs0lEQVRoge2YTUhUURTHf+c9cSUUGIV90KLIadPKYiK1gnKvMGZgfkAG7XWRogzZx2Jm0ToCNReFRe1aGGE1LqZo1SZHatMHgiSM4Gpy3mnhuKoZ38x5wyC83/Ld+7/n/O+95717H4SEhOxqJOgBNR3pwNVuVFqBw4XHP0FTePJMokvzQcYLzIB+OhHBcx4B50p3lEXc/JC0LC8FETcQA5puvogjL4E9PiXreNop0cyCNbbZQGHm0/hPfluZxdGz1pVwLGKAwrYpM3kA2YvnTKnaJtFkQNORDnba86WJ8iFy2ZKDbQVErpj0AI7GTHJTcFHL7G8P0mZR2wwoh0z6AMawF7EVwbPIjVuIXyb9FisWsbUGFk36Ld5bxDYDeZkz6QE8nlvk9i/xx8gCcKFCdUrOZNot8e1F7Hg3QbPlCzWLMGQObx1AWpaX8OgC1v2rNItHl5zOZKzxA3mNSjSzgONFUfFR1JpCiAZxEoVqXWgcjYG0AkcKj3+ALlbjQhMSYiSQGui7da/RcevPI9oGnFQ4JtAINBS6bCisCXwDvqCS8vK5d4/vj65ZY1dsIBabcxuav3eq6KBCh0BdOXqFTYF5UZk6WrfxIh6PV3Soq8CAyuBEottTuSNwvJKg/4wIX4GxmcmRso8mZRm4PvrgwKabmwUxXQNLMJ93uTYbH1n1K/BtoH8s2S6OPgEOVpSaf1YR6Z2+PfzaT2dfX+KB8UQPjr6h+skD7FfVVwPjiR4/nXdcgcGJ5FVVnQVcc2rlkQd6pydHnpbqVNJA33jirANvgfogMyuDP+rJpZm7w0UvPUUN3Ign9+Xy+hloqkpq/lmpd+XUw/jw7/81Fq2B3KYmqX3yAE25PIlijcWLWOirSjoVof3FWkq9hQI/ahsomkvt/wsZCQ3Uml1vICQkJKS2/AXahskZfbXgrgAAAABJRU5ErkJggg=="/>

                  <span className="pl-2 text-red-500 hover:text-red-800">{state.name}</span>
                  </Link>
              </li>,
              <li>
                <Link to="/about" className="btn-sm text-black bg-blue-400 hover:bg-blue-500  ml-3">
                    <span>About Us</span>
                    <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                </Link>
              </li>,
              <li>
                <Link to="/contact" className="btn-sm text-black bg-blue-400 hover:bg-blue-500 ml-3">
                    <span>Contact Us</span>
                    <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </Link>
              </li>,
              <li>
                <button type="button" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                onClick={(e)=>LogOut(e)}>
                  <span>Logout</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </button>
              </li>,
          ];
    }
    else{
      return[
          <li>
              <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
          </li>,
          <li>
              <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                <span>Sign up</span>
                <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://  www.w3.org/2000/svg">
                   <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                </svg>
              </Link>
          </li>,
      ];
    }
  }

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to={state ? "/" : "/signin"} className="block" aria-label="Cruip">

              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {renderNavList()}
            </ul>

          </nav>
 
        </div>
      </div>
    </header>
  );
}

export default Header;
