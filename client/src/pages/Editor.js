import React, { useState, useContext ,useRef} from 'react';
import '../Editor.css';
import axios from 'axios';
import IMG1 from "../images/favicon.png";

import { UserContext } from '../App'
import { BlockPicker, ChromePicker, CirclePicker, CompactPicker, PhotoshopPicker, SketchPicker, SwatchesPicker, TwitterPicker } from 'react-color';
import { Link } from 'react-router-dom';


import * as htmlToImage from "html-to-image";
import download from "downloadjs";

// import Canvas from '../Components/Canvas';
// import DataTag from '../Components/DataTag';

const Editor = (props) => {
    const [textT, setTextT] = useState('')
    const [textA, setTextA] = useState('')
    const [toggleS, setToggleS] = useState(true);
    const [toggleC, setToggleC] = useState(false);
    const [toggleCon, setToggleCon] = useState(false);
    const [toggleT, setToggleT] = useState(false);
    const [toogleIEdit, setToogleIEdit] = useState(false);
    const [color, setColor] = useState('#fff');
    const [bordercolor, setBorderColor] = useState('#fff');
    const [fontFamily, setFontFamily] = useState("Monaco");
    const [opacity, setOpacity] = useState(1);
    const [image, setImage] = useState('https://images.unsplash.com/photo-1578070181910-f1e514afdd08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDc0MjF8MHwxfHNlYXJjaHwyfHxibHVlfGVufDB8fHx8MTYzMTUxMDM3Mg&ixlib=rb-1.2.1&q=80&w=400');
    const [search, setSearch] = useState([]);
    const [clientID, setClientID] = useState("ZG18UChGubjWF05lQqafihNH4zJVnhfV5LyOJtvuPR0");
    const [searchData, setSearchData] = useState([]);
    const [selectSearchImage, setSelectSearchImage] = useState('');
    const [fontSize, setFontSize] = useState(14);
    const [fontSizeClass, setFontSizeClass] = useState(1);
    const { state, dispatch } = useContext(UserContext);
    const currUserName = state.name;
    const [fontAlign, setFontAlign] = useState("center");

    const canvas = useRef(null);

    function Download(e) {
        // htmlToImage.toPng(canvas.current)
        //   .then(function (dataUrl) {
        //     var img = new Image();
        //     img.src = dataUrl;
        //     imgClass.current.appendChild(img)
        //   })
        //   .catch(function (error) {
        //     console.error('oops, something went wrong!', error);
        //   });
        htmlToImage.toJpeg(canvas.current).then(function (blob) {
            download(blob, "Edit-Creatively.jpeg");
        });
    }

    const toogleSearch = () => {
        setToggleS(true);
        setToggleT(false);
        setToggleC(false);
        setToogleIEdit(false);
        setToggleCon(false);
    }
    const toogleText = () => {
        setToggleT(true);
        setToggleS(false);
        setToggleC(false);
        setToogleIEdit(false);   
        setToggleCon(false);
    }
    const toogleColor = () => {
        setToggleC(true);
        setToggleT(false);
        setToggleS(false);
        setToogleIEdit(false);
        setToggleCon(false);
    }
    const toogleImageEdit = () => {
        setToogleIEdit(true);
        setToggleC(false);
        setToggleT(false);
        setToggleS(false);
        setToggleCon(false);
    }
    const toogleContent = () => {
        setToggleCon(true);
        setToogleIEdit(false);
        setToggleC(false);
        setToggleT(false);
        setToggleS(false);
    }
    function handleTextT(e) {
        setTextT(e.target.value)
    }

    function handleTextA(e) {
        setTextA(e.target.value)
    }
    function justifyText(align) {
        setFontAlign(align);
    }

    function handleClick(operation) {
        var fs = fontSize;
        if (operation === "plus") {
            fs += 1;
            fs = fs%60;
        } else {
            fs -= 1;
            if(fs<0){
                fs=1;
            }
        }
        var sizeClass = `text-${fs}xl`;
        setFontSize(fs);
        setFontSizeClass(sizeClass);
    }
    const handleChange = (event) => {
        setFontSize(event.target.value);
    };
    const handleFontFamilyChange = (event) => {
        setFontFamily(event.target.value);
    };
    const handleOpacityChange = (event) => {
        const opa =  event.target.value / 100;
        setOpacity(opa);
        // console.log(opa);
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
                                    <a onClick={toogleContent} href="#">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABEElEQVRoge2ZzXECMQyF5QxDUUljNJBAyoAucuECpbC08XEAJzuOFzzOgpXlfUf/SE+za72DzIQQzwUwBz6BI/7pgCUwzxWyaiyuho9cId1l8/URf8BfAN4uWrvcJgANdFWR6n1pKWZMVIg3bhYCbDPdYleTbMxYKaGXBDOzEELoHxhqAOm5Eu4RK96dlV6MF1Ix1zrdkMAxY0Um80aKv4jXXyxS8kX2mbWvynxjxsojZ3eCCvGGnL1125Wze0fOXplPzp4iZ/fO8xQiZ88gZ78SKzKZNyJnr8wnZ0+Rs3tnkoUczc5jrUZaiulp/B699dvvxswWZrb/R29+/WuF83h6yc9Q1DMH4J3ceFoIMW1OssmQRzFLS6cAAAAASUVORK5CYII="/>

                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={toogleText}><i class="fa fa-font px-2" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" onClick={toogleColor}><i class="fa fa-paint-brush px-2" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                <a href="#" onClick={toogleImageEdit}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADBUlEQVRoge3ZP4xUVRgF8PsIroKBlYSCRBPWhIYGLWy1gTWBSgtCR0JDoYmlNhoDjbhW2oClJQ2xsyZIZBM10bUg/AmsaKI26mYJLK78KN4dvDO+N/P+zBummJNM5uXNd893zn33fvfeNyHMMMMMM0w1sIDPcQebusdmzHUOC23Fv461CYguwxoWh2nMhoh/MYTwQwhhR6teaI+1EMKBLMtWa7WSD5sebuMg5rrR2Jd3DoewmuQ/24ToTkJwsAOto/IvJvnr9X4kSCds5z1fkH8uyb9ZFjdsDngclGWlcV2iioYtk5MTAp7DEm5hI35/jPkukj3GmPh2YqWkXP6I/1W7Vho6MPBJifgelqbdwE8J5VvYjreTeyvTbmA9odwe7z2b3FtvomGSk/h2cn0imjiR3Ls11mwdPIGlIeMfzoxVQwcGdsirTRGmvwpFznmcwU3cj98fYWdTDbOV+EmjEwPYjwv4I34uYH9DuuXQX60qi2g0B/Aq/i6YqGt4rSbXe2g2fJsYkB961gvE93AXh2rqeAYf4rp8A3gDp7FtrAZwBPeSZr/iJbwcr3u4hyMVOedxuaQzvhFX9NYG8EbsnR5WsS/5fZ/+I+IG3qwg/sqQpwmnWxvAMTxIwm9ib0HcQvythwc41kI83GhlAMf1Hz2v4vkh8S/EmB42cbyheLjf2ABO4t8kbAV7Sgn/a7dH/9Z6Q3yBVVM8XGtkAO/gYRLyPXaPEp+03x3b/CMOowbi4YPaBvDuAMkydlUVn/DswuEW4i/j6VoG5AtLiktKNmI1jDQR/+3IThs0gFMDJBcVbIGnQnwkT6vLpwMkXxm1ElYTv1xT/BVVX8Hg5xKSLw0be9MgPiY5V0ByHk9NvfiYaMH4/hv4BVvl7zvL9jbjE5+YWFS8Na6LzyLf0YmJT0zsxVn5ZqzpX0y9ev/FRMWPE9iC3yqKr1YqJwm80oX4SR7qD1eI+S6EsJhl2Z9di6kNo6vP11M15geBvwpE/y6f2Ee1XF86h/wgfjc+iffjnGg9hB8BIj1wIuax31cAAAAASUVORK5CYII=" />
                                </a>
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

                                    <div className="container pl-16 pt-5">
                                        <SwatchesPicker height="600px" width="340px" color={color} onChangeComplete={updateColor => setColor(updateColor.hex)} />
                                    </div>
                                )
                            }
                            {
                                toggleT && (
                                    <>
                                        <div className="container px-16 ">

                                            <div class="pt-5">
                                                <h4 className="text-white">
                                                    <div className="flex flex-row">
                                                        <button
                                                            onClick={() => handleClick("minus")}
                                                            className="text-white bg-indigo-500 border-0 py-2 px-2 mr-2 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                                        >
                                                            
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="text-black text-center rounded w-full"
                                                            readOnly
                                                            value={fontSize}
                                                        />
                                                        <button
                                                            onClick={() => handleClick("plus")}
                                                            className="text-white bg-indigo-500 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="container px-16 ">

                                            <div class="pt-5">
                                                <h4 className="text-white">
                                                    <div className="flex space-x-2 py-2">
                                                        <button
                                                            onClick={() => justifyText("left")}
                                                            className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg w-full"
                                                        >
                                                            
                                                            Left
                                                        </button>
                                                        <button
                                                            onClick={() => justifyText("center")}
                                                            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg w-full"
                                                        >
                                                            
                                                            Center
                                                        </button>
                                                        <button
                                                            onClick={() => justifyText("right")}
                                                            className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg w-full"
                                                        >
                                                            
                                                            Right
                                                        </button>
                                                    </div>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="container px-16 ">

                                            <div class="pt-5">

                                                <h4 className="text-white">
                                                <strong>
                                                    <select  onChange={handleFontFamilyChange} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                        <option aria-label="None" value="" >Font Family</option>

                                                        <option style={{fontFamily:"Allison"}} value={"Allison"}>Allison</option>

                                                        <option style={{fontFamily:"Bungee Shade"}} value={"Bungee Shade"}>Bungee Shade</option>

                                                        <option style={{fontFamily:"Cardo"}} value={"Cardo"}>Cardo</option>
                                                        
                                                        <option style={{fontFamily:"Caveat"}} value={"Caveat"}>Caveat</option>

                                                        <option style={{fontFamily:"Eater"}} value={"Eater"}>Eater</option>

                                                        <option style={{fontFamily:"Faster One"}} value={"Faster One"}>Faster One</option>

                                                        <option style={{fontFamily:"Frijole"}} value={"Frijole"}>Frijole</option>

                                                        <option style={{fontFamily:"Jura"}} value={"Jura"}>Jura</option>

                                                        <option style={{fontFamily:"Lemon"}} value={"Lemon"}>Lemon</option>

                                                        <option style={{fontFamily:"Merienda One"}} value={"Merienda One"}>Merienda One</option>

                                                        <option style={{fontFamily:"Notable"}} value={"Notable"}>Notable</option>

                                                        <option style={{fontFamily:"Open Sans"}} value={"Open Sans"}>Open Sans</option>

                                                        <option style={{fontFamily:"Roboto"}} value={"Roboto"}>Roboto</option>

                                                        <option style={{fontFamily:"Roboto Mono"}} value={"Roboto Mono"}>Roboto Mono</option>
                                                        <option style={{fontFamily:"Rye"}} value={"Rye"}>Rye</option>

                                                        <option style={{fontFamily:"Sacramento"}} value={"Sacramento"}>Sacramento</option>

                                                        <option style={{fontFamily:"Satisfy"}} value={"Satisfy"}>Satisfy</option>

                                                        <option style={{fontFamily:"Syncopate"}} value={"Syncopate"}>Syncopate</option>
                                                        <option style={{fontFamily:"Ubuntu"}} value={"Ubuntu"}>Ubuntu</option>

                                                        <option style={{fontFamily:"Walter Turncoat"}} value={"Walter Turncoat"}>Walter Turncoat</option>




                                                    </select>
                                                </strong>
                                                </h4>
                                            </div>
                                        </div >
                                    </>
                                )
                            }
                             {
                                toggleCon && (
                                    <>
                                        <div className="container px-16 ml-5 ">

                                            <div class="">
                                                <div className="flex flex-col  p-3 bg-gray-800 group  shadow mt-10 cursor-pointer" >
                                                        <div>
                                                            <span className="block text-white text-1xl font-bold mb-3">Thought</span>
                                                        </div>
                                                        <textarea onChange={handleTextT} name="message" className="w-max bg-black text-white group-hover:text-white hover:bg-violet-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>

                                                        
                                                </div>
                                                <div className="flex flex-col  p-3 bg-gray-800 group  shadow mt-10 cursor-pointer" >
                                                        <div>
                                                            <span className="block text-white text-1xl font-bold  mb-3">Author</span>
                                                        </div>
                                                        <textarea onChange={handleTextA} name="message" className="w-max bg-black text-white group-hover:text-white hover:bg-violet-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                             {
                                toogleIEdit && (
                                    <>
                                        <div className="container px-16 ">

                                                <div class="pt-5">
                                                    <h4 className="text-2xl BGC" style={{color:bordercolor}}>
                                                        <b>Border Colour</b>
                                                    </h4>
                                                    <BlockPicker width="340px" color={bordercolor} onChangeComplete={updateColor => setBorderColor(updateColor.hex)} />
                                                </div>
                                                
                                        </div>
                                        
                                        <div className="container px-16 ">

                                                <div class="pt-5">

                                                    <h4 className="text-white">
                                                    <strong>
                                                        <select  onChange={handleOpacityChange} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                            <option aria-label="None" value="" >Opacity</option>
                                                            <option value={0}>0</option>
                                                            <option value={5}>5</option>
                                                            <option value={10}>10</option>
                                                            <option value={20}>25</option>
                                                            <option value={25}>25</option>
                                                            <option value={30}>30</option>
                                                            <option value={40}>40</option>
                                                            <option value={50}>50</option>
                                                            <option value={60}>60</option>
                                                            <option value={70}>70</option>
                                                            <option value={75}>75</option>
                                                            <option value={80}>80</option>
                                                            <option value={90}>90</option>
                                                            <option value={95}>95</option>
                                                            <option value={100}>100</option>
                                                        </select>
                                                    </strong>
                                                    </h4>
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
                                <button onClick={(e)=>Download(e)} className="btn-sm text-black bg-blue-500 hover:bg-blue-600  ml-3">
                                    <span>Download</span>
                                    <svg className="w-3 h-3 fill-current text-black flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </button>
                                {/* <button className="btn-sm text-black bg-blue-500 hover:bg-blue-600  ml-3">
                                    <span>Publish</span>
                                    <svg className="w-3 h-3 fill-current text-black flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </button> */}
                            </div>
                        </div>
                        <div className="pt-8 px-5 pb-5">
                            <div className="rounded-md text-white font-semibold flex items-center justify-center py-3 px-6 w-full shadow"  ref={canvas}>
                                <div class="flex flex-wrap w-full  py-32 px-10 relative mb-4 fixImage" style={{backgroundColor:bordercolor}}>
                                {/* <div className="frame"> */}
                                    <img
                                        alt="gallery"
                                        className="w-full object-cover object-center block absolute inset-0 p-5 fixImage "
                                        src={image}
                                        style={{opacity:opacity}}
                                    />
                                   
                                   <div class={"relative z-10 w-full text-" + fontAlign}>
                                        <h2 className='pt-12' style={{fontSize:fontSize,color:color,fontFamily:fontFamily}}>{textT}</h2>
                                    </div>
                                    <div class={"relative z-10 w-full text-" + fontAlign}>
                                        <h2 className='py-8' style={{fontSize:fontSize,color:color,fontFamily:fontFamily}}>{textA}</h2>
                                    </div>

                                {/* </div> */}
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