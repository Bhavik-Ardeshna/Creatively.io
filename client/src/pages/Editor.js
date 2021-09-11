import React, { useState, useContext } from 'react';
import '../Editor.css';
import axios from 'axios';
import IMG1 from "../images/favicon.png";

import { UserContext } from '../App'
import { SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';
// import Canvas from '../Components/Canvas';
// import DataTag from '../Components/DataTag';

const Editor = (props) => {
    const [toggleS, setToggleS] = useState(true);
    const [toggleC, setToggleC] = useState(false);
    const [toggleT, setToggleT] = useState(false);
    const [color, setColor] = useState('#fff');
    const [fontSize, setFontSize] = useState(45);
    const [fontFamily, setFontFamily] = useState("Monaco");
    const [image, setImage] = useState('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc0MjF8MHwxfHNlYXJjaHwyfHxjYXJ8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=400');
    const [search, setSearch] = useState("");
    const [clientID, setClientID] = useState("ZG18UChGubjWF05lQqafihNH4zJVnhfV5LyOJtvuPR0");
    const [searchData, setSearchData] = useState([]);
    const [selectSearchImage, setSelectSearchImage] = useState('');

    const { state, dispatch } = useContext(UserContext);
    const currUserName = state.name;
    const toogleSearch = () => {
        setToggleS(true);
        setToggleT(false);
        setToggleC(false);

    }
    const toogleText = () => {
        setToggleT(true);
        setToggleS(false);
        setToggleC(false);

    }
    const toogleColor = () => {
        setToggleC(true);
        setToggleT(false);
        setToggleS(false);

    }
    const handleChange = (event) => {
        setFontSize(event.target.value);
        console.log(fontSize)
    };
    const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
        console.log(fontFamily)
    };

    const onSearch = (e) => {
        setSearch(e.target.value);
    };
    const onSearchSubmit = (e) => {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + search + "&client_id=" + clientID;
        axios.get(url).then((res) => {
            setSearchData(res.data.results);
        })
    };

    const onSelectImage = (e) => {
        setImage(e.target.src);
    };
    return (

        <>
            <div className="flex w-screen">
                <div>
                    <div className="z-50">

                        <div className="sidebar">

                            <ul className="sidebar-nav">
                                <li>
                                    <a onClick={toogleSearch} href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" onClick={toogleText}><i class="fa fa-font px-2" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" onClick={toogleColor}><i class="fa fa-paint-brush px-2" aria-hidden="true"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="z-40 ">
                        <div className="bg-black stool px-4 py-4 h-screen overflow-y-auto overflow-x-hidden">

                            {
                                toggleS && (
                                    <>
                                        <div className="container mx-8 px-4 ">
                                            <div className="px-4">
                                                <div class="shadow flex">
                                                    <input class="w-full rounded p-2" onChange={onSearch} type="text" placeholder="Search..." />
                                                    <button class="bg-white w-auto flex justify-end items-center text-black-500 p-2 hover:text-blue-400" type="submit" onClick={onSearchSubmit}>
                                                        <i class="fa fa-search" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <section className="py-8 px-4">
                                                <div className="flex flex-wrap flex-col">
                                                    {searchData.map((photo) => (

                                                        <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" onClick={onSelectImage} src={photo.urls.small} alt="" /></div>
                                                    ))}

                                                </div>
                                            </section>
                                        </div>

                                    </>
                                )
                            }
                            {
                                toggleC && (

                                    <div className="container mx-16 px-16 ">
                                        <h4 className="text-white">Colour</h4>
                                        {/* <SketchPicker color={color} onChangeComplete={updateColor => setColor(updateColor.hex)} /> */}
                                    </div>
                                )
                            }
                            {
                                toggleT && (
                                    <>
                                        <div className="container mx-16 px-16 ">

                                            <div class="pt-5">
                                                <h4 className="text-white">Font size</h4>
                                            </div>
                                        </div>
                                        <div className="container mx-16 px-16 ">

                                            <div class="pt-5">

                                                <h4 className="text-white">Font family</h4>
                                            </div>
                                        </div >
                                    </>
                                )
                            }

                        </div >
                    </div >
                </div >


                <div className="flex min-h-screen bg-gray-800 w-full">
                    <div className="flex flex-col">
                        <div className="flex flex-wrap justify-between h-20 halfTopBar text-white bg-black md:flex-nowrap">

                            <div class="z-30 flex  bg-black">
                                <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out p-3">

                                    <img src={IMG1} height="50px" width="50px" />

                                    <span className="pl-2 text-blue-400 text-2xl hover:text-blue-500">Creatively.io</span>
                                </Link>
                            </div>
                            <div className="pr-5 flex flex-row justify-items-center items-center ">
                                <Link to="/profile" className="btn-sm justify-content-center">

                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACs0lEQVRoge2YTUhUURTHf+c9cSUUGIV90KLIadPKYiK1gnKvMGZgfkAG7XWRogzZx2Jm0ToCNReFRe1aGGE1LqZo1SZHatMHgiSM4Gpy3mnhuKoZ38x5wyC83/Ld+7/n/O+95717H4SEhOxqJOgBNR3pwNVuVFqBw4XHP0FTePJMokvzQcYLzIB+OhHBcx4B50p3lEXc/JC0LC8FETcQA5puvogjL4E9PiXreNop0cyCNbbZQGHm0/hPfluZxdGz1pVwLGKAwrYpM3kA2YvnTKnaJtFkQNORDnba86WJ8iFy2ZKDbQVErpj0AI7GTHJTcFHL7G8P0mZR2wwoh0z6AMawF7EVwbPIjVuIXyb9FisWsbUGFk36Ld5bxDYDeZkz6QE8nlvk9i/xx8gCcKFCdUrOZNot8e1F7Hg3QbPlCzWLMGQObx1AWpaX8OgC1v2rNItHl5zOZKzxA3mNSjSzgONFUfFR1JpCiAZxEoVqXWgcjYG0AkcKj3+ALlbjQhMSYiSQGui7da/RcevPI9oGnFQ4JtAINBS6bCisCXwDvqCS8vK5d4/vj65ZY1dsIBabcxuav3eq6KBCh0BdOXqFTYF5UZk6WrfxIh6PV3Soq8CAyuBEottTuSNwvJKg/4wIX4GxmcmRso8mZRm4PvrgwKabmwUxXQNLMJ93uTYbH1n1K/BtoH8s2S6OPgEOVpSaf1YR6Z2+PfzaT2dfX+KB8UQPjr6h+skD7FfVVwPjiR4/nXdcgcGJ5FVVnQVcc2rlkQd6pydHnpbqVNJA33jirANvgfogMyuDP+rJpZm7w0UvPUUN3Ign9+Xy+hloqkpq/lmpd+XUw/jw7/81Fq2B3KYmqX3yAE25PIlijcWLWOirSjoVof3FWkq9hQI/ahsomkvt/wsZCQ3Uml1vICQkJKS2/AXahskZfbXgrgAAAABJRU5ErkJggg==" height="40px" width="40px" />

                                    <span className="pl-2 text-xl text-red-500 hover:text-red-800">{currUserName}</span>
                                </Link>
                                <button className="btn-sm text-black bg-blue-500 hover:bg-blue-600  ml-3">
                                    <span>Download</span>
                                    <svg className="w-3 h-3 fill-current text-black flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </button>
                                <button className="btn-sm text-black bg-blue-500 hover:bg-blue-600  ml-3">
                                    <span>Publish</span>
                                    <svg className="w-3 h-3 fill-current text-black flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="pt-8 px-5 pb-5">
                            <div
                                className="rounded-md text-white font-semibold flex items-center justify-center py-3 px-6 w-full shadow">
                                <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 bg-gradient-to-br from-blue-500 to-green-400 fixImage" >
                                    <img
                                        alt="gallery"
                                        class="w-full object-cover object-center block absolute inset-0 p-5 fixImage"
                                        src="https://source.unsplash.com/random"
                                    />
                                    <div className="relative z-10 w-full text-">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div >
        </>


    )
}

export default Editor