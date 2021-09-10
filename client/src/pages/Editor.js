import { useState, useEffect, useRef } from "react";    
import ImageGrid from "../utils/ImageGrid";
// import { HuePicker } from 'react-color'
import React from 'react'
import { ChevronRight } from "../utils/SVGs";
import axios from 'axios';

export default function Editor() {
    const [visible, setVisible] = useState(false);
    const canvas = useRef(null);
    const imgClass = useRef(null);

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [fontSize1, setFontSize1] = useState(1)
    const [fontSizeClass1, setFontSizeClass1] = useState(1)
    const [fontAlign1, setFontAlign1] = useState('center')
    const [fontColor1, setFontColor1] = useState('white')
    const [fontSize2, setFontSize2] = useState(1)
    const [fontSizeClass2, setFontSizeClass2] = useState(1)
    const [fontAlign2, setFontAlign2] = useState('center')
    const [fontColor2, setFontColor2] = useState('white')
    const [wall, setWall] = useState('false');
    const [thought, setThought] = useState('false')
    const [author, setAuthor] = useState('false')
    const [align, setAlign] = useState('false')
    const [data, setData] = useState('false')
    const [search, setSearch] = useState("");
    const [clientID, setClientID] = useState("ZG18UChGubjWF05lQqafihNH4zJVnhfV5LyOJtvuPR0");
    const [searchData, setSearchData] = useState([]);
    const [image, setImage] = useState('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDc0MjF8MHwxfHNlYXJjaHwyfHxjYXJ8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=400');

    const top = 100;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const onScroll = () => {
        setVisible(document.documentElement.scrollTop > top);
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        // Remove listener on unmount
        return () => document.removeEventListener("scroll", onScroll);
    }, []);



    const showGrid = () => {
        setWall('true');
    }

    const hideGrid = () => {
        setWall('false');

    }
    const showData = () => {
        setData(data == 'false' ? 'true' : 'false');
        setAuthor('false')
        setThought('false')
        setAlign('false')
    }
    const showThought = () => {
        setThought(thought == 'false' ? 'true' : 'false');
        setAuthor('false')
        setAlign('false')
        setData('false')
    }

    const showAuthor = () => {
        setAuthor(author == 'false' ? 'true' : 'false');
        setThought('false')
        setAlign('false')
        setData('false')
    }

    const showAlign = () => {
        setAlign(align == 'false' ? 'true' : 'false');
        setThought('false')
        setAuthor('false')
        setData('false')
    }

    function handleClick1(operation) {
        var fs = fontSize1
        if (operation === 'plus') {
            fs += 1
        }
        else {
            fs -= 1
        }
        var sizeClass = `text-${fs}xl`
        setFontSize1(fs)
        setFontSizeClass1(sizeClass)
    }
    function handleClick2(operation) {
        var fs = fontSize2
        if (operation === 'plus') {
            fs += 1
        }
        else {
            fs -= 1
        }
        var sizeClass = `text-${fs}xl`
        setFontSize2(fs)
        setFontSizeClass2(sizeClass)
    }

    function handleText1(e) {
        setText1(e.target.value)
    }

    function handleText2(e) {
        setText2(e.target.value)
    }

    function justifyText1(align) {
        setFontAlign1(align)
    }
    function SetColor1(color) {
        setFontColor1(color)
    }
    function justifyText2(align) {
        setFontAlign2(align)
    }
    function SetColor2(color) {
        setFontColor2(color)
    }
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


            <div className="h-mega grid grid-cols-3 gap-4">

                <div className="col-span-2 ... canva_pos">
                    <div className="pl-64">
                        <>

                            <div className="  relative">
                                {/* <img
                                            src="https://source.unsplash.com/random"
                                            className="lg:w-1/2 lg:h-auto object-cover object-center rounded absolute inset-0 fixImage"
                                        /> */}

                                <div className="container mx-auto px-4 ">
                                    <div className="mt-2 flex space-x-4">
                                        {/* <div className="rounded-md  py-3 px-3 shadow " > */}
                                        <div class="flex flex-wrap  bg-gray-100 py-10 px-10 relative  ">
                                            <div className="frame" ref={canvas}>
                                                {/* <img
                                                    src={image}
                                                    className="lg:w-1/2 lg:h-auto object-cover object-center rounded absolute inset-0 fixImage"
                                                />
                                                <div class={"relative z-10 w-full text-" + fontAlign1}>
                                                    <h2 className={fontSizeClass1 + ' pt-12 ' + 'text-' + fontColor1}>{text1}</h2>
                                                </div>
                                                <div class={"relative z-10 w-full text-" + fontAlign2}>
                                                    <h2 className={fontSizeClass2 + ' py-8 ' + 'text-' + fontColor2}>{text2}</h2>
                                                </div> */}


                                                <img
                                                    src={image}
                                                    className="fixImage"
                                                />

                                                <div class={"relative z-10 w-full text-" + fontAlign1}>
                                                    <h2 className={fontSizeClass1 + ' pt-10 ' + 'text-' + fontColor1}>{text1}</h2>
                                                </div>
                                                <div class={"relative z-10 w-full text-" + fontAlign2}>
                                                    <h2 className={fontSizeClass2 + '  ' + 'text-' + fontColor2}>{text2}</h2>
                                                </div>

                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                    <style jsx>{`
                    .canva_pos{
                        position:relative;
                        top:25%;
                        margin-right:10%;
                    }
                    .fixImage{
                        width:100%;
                        height:100%;
                    }
                    .frame {
                        width: 700px;
                        height: 470px;
                        border: 3px solid #ccc;
                        background: #eee;
                        margin: auto;
                        padding: 15px 10px;
                
                    `}</style>
                </div>
                {/* <div className="bg-white shadow-lg"> */}
                <div className="flex flex-col row-span-3 bg-white shadow rounded-lg mt-5 mr-5">

                    <>
                        {
                            wall == 'false'
                                ?
                                <>
                                    <div className="flex items-center p-2 bg-white group hover:bg-violet-500 shadow mt-10 cursor-pointer" onClick={showGrid}>
                                        <div>
                                            <span className="block text-1xl font-bold group-hover:text-white">Background</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-white group hover:bg-violet-500 shadow mt-5 cursor-pointer" onClick={showData}>

                                        <span className="block text-1xl font-bold group-hover:text-white">Content</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>

                                    </div>
                                    {
                                        data == 'true'
                                            ?
                                            <>
                                                <div className="flex flex-col  p-2 bg-white group  shadow mt-10 cursor-pointer" >
                                                    <div>
                                                        <span className="block text-1xl font-bold mb-3">Thought</span>
                                                    </div>
                                                    <textarea onChange={handleText1} id="message" name="message" className="w-max bg-white group-hover:text-white hover:bg-violet-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                </div>
                                                <div className="flex flex-col  p-2 bg-white group  shadow mt-10 cursor-pointer" >
                                                    <div>
                                                        <span className="block text-1xl font-bold  mb-3">Author</span>
                                                    </div>
                                                    <textarea onChange={handleText2} id="message" name="message" className="w-max bg-white group-hover:text-white hover:bg-violet-500 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                                </div>
                                            </>
                                            :
                                            null


                                    }


                                    <div className="flex items-center justify-between p-2 bg-white group hover:bg-violet-500 shadow mt-5 cursor-pointer" onClick={showThought}>

                                        <span className="block text-1xl font-bold group-hover:text-white">Title</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>

                                    </div>
                                    {
                                        thought == 'true'
                                            ?
                                            <div className=" bg-blue-200">

                                                <div className="ml-4 mb-8 pt-5">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2 ">Colour</span>
                                                    </div>
                                                    {/* <HuePicker /> */}
                                                    <div className="flex space-x-2 py-6">
                                                        <button onClick={() => SetColor1('black')} className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Black</button>
                                                        <button onClick={() => SetColor1('white')} className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">White</button>
                                                        <button onClick={() => SetColor1('red-500')} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Red</button>
                                                    </div>

                                                </div>
                                                <div className="ml-4 mb-8">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Text Size</span>
                                                    </div>
                                                    <div className="flex space-x-2">
                                                        <button onClick={() => handleClick1('minus')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">-</button>
                                                        <input type='text' className="text-black text-center rounded w-max" readOnly value={fontSize1} />
                                                        <button onClick={() => handleClick1('plus')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">+</button>
                                                    </div>
                                                </div>
                                                <div className="ml-4 mb-8 pb-5">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Font Family</span>
                                                    </div>
                                                    <div className="container">

                                                        <div class="pt-2">

                                                            <strong>
                                                                <select id="FontSize" class="block appearance-none w-72 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                                    <option aria-label="None" value="" >Font Family</option>
                                                                    <option value={"Lato"}>Lato</option>
                                                                    <option value={"Candara"}>Candara</option>
                                                                    <option value={"Geneva"}>Geneva</option>
                                                                    <option value={"Optima"}>Optima</option>
                                                                    <option value={"Times New Roman"}>Times New Roman</option>
                                                                    <option value={"Cambria"}>Cambria</option>
                                                                    <option value={"Georgia"}>Georgia</option>
                                                                    <option value={"Monaco"}>Monaco</option>
                                                                    <option value={"Comic Sans MS"}>Comic Sans MS</option>
                                                                    <option value={"Impact"}>Impact</option>
                                                                    <option value={"Andale Mono"}>Andale Mono</option>
                                                                    <option value={"Courier New"}>Courier New</option>
                                                                </select>
                                                            </strong>
                                                        </div>
                                                    </div >

                                                </div>
                                                <div className="ml-4">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Align</span>
                                                    </div>
                                                    <div className="container">

                                                        <div class="pt-2">

                                                            <div className=" bg-blue-200 ml-4 ">

                                                                <div className="flex space-x-2 ">
                                                                    <button onClick={() => justifyText1('left')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Left</button>
                                                                    <button onClick={() => justifyText1('center')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Center</button>
                                                                    <button onClick={() => justifyText1('right')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Right</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div >


                                                </div>
                                            </div>
                                            :
                                            null


                                    }
                                    <div className="flex items-center justify-between p-2 bg-white group hover:bg-violet-500 shadow mt-5 cursor-pointer" onClick={showAuthor}>

                                        <span className="block text-1xl font-bold group-hover:text-white">Author</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {
                                        author == 'true'
                                            ?
                                            <div className=" bg-blue-200">

                                                <div className="ml-4 mb-8 pt-5">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2 ">Colour</span>
                                                    </div>
                                                    {/* <HuePicker /> */}
                                                    <div className="flex space-x-2 py-6">
                                                        <button onClick={() => SetColor2('black')} className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Black</button>
                                                        <button onClick={() => SetColor2('white')} className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">White</button>
                                                        <button onClick={() => SetColor2('red-500')} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Red</button>
                                                    </div>
                                                </div>
                                                <div className="ml-4 mb-8">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Text Size</span>
                                                    </div>
                                                    <div className="flex space-x-2">
                                                        <button onClick={() => handleClick2('minus')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">-</button>
                                                        <input type='text' className="text-black text-center rounded w-max" readOnly value={fontSize2} />
                                                        <button onClick={() => handleClick2('plus')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">+</button>
                                                    </div>
                                                </div>
                                                <div className="ml-4 mb-8 pb-5">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Font Family</span>
                                                    </div>
                                                    <div className="container">

                                                        <div class="pt-2">

                                                            <strong>
                                                                <select id="FontSize" class="block appearance-none w-72 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                                    <option aria-label="None" value="" >Font Family</option>
                                                                    <option value={"Lato"}>Lato</option>
                                                                    <option value={"Candara"}>Candara</option>
                                                                    <option value={"Geneva"}>Geneva</option>
                                                                    <option value={"Optima"}>Optima</option>
                                                                    <option value={"Times New Roman"}>Times New Roman</option>
                                                                    <option value={"Cambria"}>Cambria</option>
                                                                    <option value={"Georgia"}>Georgia</option>
                                                                    <option value={"Monaco"}>Monaco</option>
                                                                    <option value={"Comic Sans MS"}>Comic Sans MS</option>
                                                                    <option value={"Impact"}>Impact</option>
                                                                    <option value={"Andale Mono"}>Andale Mono</option>
                                                                    <option value={"Courier New"}>Courier New</option>
                                                                </select>
                                                            </strong>
                                                        </div>
                                                    </div >


                                                </div>
                                                <div className="ml-4">
                                                    <div>
                                                        <span className="block text-1xl font-bold-300 group-hover:text-white mb-2">Align</span>
                                                    </div>
                                                    <div className="container">

                                                        <div class="pt-2">

                                                            <div className=" bg-blue-200 ml-4 ">

                                                                <div className="flex space-x-2">
                                                                    <button onClick={() => justifyText2('left')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Left</button>
                                                                    <button onClick={() => justifyText2('center')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Center</button>
                                                                    <button onClick={() => justifyText2('right')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Right</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div >


                                                </div>

                                            </div>
                                            :
                                            null
                                    }
                                    {/* <div className="flex items-center justify-between p-2 bg-white group hover:bg-violet-500 shadow mt-10 cursor-pointer" onClick={showAlign}>

                                        <span className="block text-1xl font-bold group-hover:text-white">Align</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {
                                        align == 'true'
                                            ?
                                            <div className=" bg-blue-200 ml-4 mt-3">

                                                <div className="flex space-x-2 py-2">
                                                    <button onClick={() => justifyText1('left')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Left</button>
                                                    <button onClick={() => justifyText1('center')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Center</button>
                                                    <button onClick={() => justifyText1('right')} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-max">Right</button>
                                                </div>
                                            </div>
                                            :
                                            null
                                    } */}

                                </>
                                :
                                <>
                                    <div onClick={hideGrid}>
                                        <ChevronRight className="h-8 w-8 mb-3 mt-3 ml-3" />
                                    </div>
                                    {/* <ImageGrid /> */}
                                    <div className="container ">
                                        <div className="relative hidden md:flex text-gray-600 w-1/2 ml-6 mb-3">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline" onClick={onSearchSubmit}>
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                </button>
                                            </span>
                                            <input type="search" name="q" placeholder="Search Quotes..." onChange={onSearch} type="text" className="w-full py-2 text-sm text-black rounded border-2 pl-10 pr-2 focus:outline-none focus:bg-white focus:text-gray-900" autoComplete="off" />
                                        </div>

                                        {/* <section className="py-8 px-4">
                                            <div className="flex flex-wrap flex-col">
                                                {searchData.map((photo) => (

                                                    <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" onClick={onSelectImage} src={photo.urls.small} alt="" /></div>
                                                ))}

                                            </div>
                                        </section> */}
                                        <section class="text-gray-600 body-font overflow-auto mb-5 h-imggrid">
                                            <div class="container px-5  mx-auto flex flex-wrap" >
                                                <div class="flex flex-wrap md:-m-2 -m-1">
                                                    {searchData.map((photo, i) => (
                                                        <>
                                                            <div className="md:w-auto pl-3 pb-4 mb-8 md:mb-0"><img className="rounded shadow-md" onClick={onSelectImage} src={photo.urls.small} alt="" /></div>

                                                        </>
                                                    ))}

                                                </div >
                                            </div>
                                        </section >
                                    </div>
                                </>
                        }
                    </>
                </div >

            </div >




        </>
    );
}