import { React} from "react";
import * as htmlToImage from "html-to-image";
// import FileSaver from 'file-saver';
import download from "downloadjs";

const Editor = () => {

    
    // const canvas = useRef(null);
    // const imgClass = useRef(null);

    // const [text, setText] = useState("");
    // const [fontSize, setFontSize] = useState(1);
    // const [fontSizeClass, setFontSizeClass] = useState(1);
    // const [fontAlign, setFontAlign] = useState("center");
    // const [fontColor, setFontColor] = useState("white");

    // function handleClick(operation) {
    //     var fs = fontSize;
    //     if (operation === "plus") {
    //         fs += 1;
    //     } else {
    //         fs -= 1;
    //     }
    //     var sizeClass = `text-${fs}xl`;
    //     setFontSize(fs);
    //     setFontSizeClass(sizeClass);
    // }

    // function handleText(e) {
    //     setText(e.target.value);
    // }

    // function justifyText(align) {
    //     setFontAlign(align);
    // }

    // function SetColor(color) {
    //     setFontColor(color);
    // }

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
            download(blob, "my-node.jpeg");
        });
    }
    return (
        <div>
            <div className="container mx-auto px-4 ">
                <div className="mt-2 flex space-x-4">
                    <div className="rounded-md bg-indigo-200 text-white font-semibold flex justify-center py-3 px-6 w-1/3 shadow">
                        <div className="flex flex-col w-full md:py-8 mt-8 md:mt-0">
                            <div className="relative mb-4">
                                
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-white"
                                >
                                    Message{" "}
                                </label>
                                <textarea
                                    onChange={handleText}
                                    id="message"
                                    name="message"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                >
                                    {" "}
                                </textarea>{" "}
                            </div>{" "}
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleClick("minus")}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    -{" "}
                                </button>{" "}
                                <input
                                    type="text"
                                    className="text-black text-center rounded w-full"
                                    readOnly
                                    value={fontSize}
                                />{" "}
                                <button
                                    onClick={() => handleClick("plus")}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    +{" "}
                                </button>{" "}
                            </div>{" "}
                            <div className="flex space-x-2 py-2">
                                <button
                                    onClick={() => justifyText("left")}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Left{" "}
                                </button>{" "}
                                <button
                                    onClick={() => justifyText("center")}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Center{" "}
                                </button>{" "}
                                <button
                                    onClick={() => justifyText("right")}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Right{" "}
                                </button>{" "}
                            </div>{" "}
                            <div className="flex space-x-2 py-2">
                                <button
                                    onClick={() => SetColor("black")}
                                    className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Black{" "}
                                </button>{" "}
                                <button
                                    onClick={() => SetColor("white")}
                                    className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    White{" "}
                                </button>{" "}
                                <button
                                    onClick={() => SetColor("red-500")}
                                    className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Red{" "}
                                </button>{" "}
                            </div>{" "}
                            <div className="flex space-x-2 py-2">
                                <button
                                    onClick={() => Download()}
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
                                >
                                    {" "}
                                    Download{" "}
                                </button>{" "}
                            </div>{" "}
                        </div>
                    </div>{" "}
                    <div
                        className="rounded-md text-white font-semibold flex items-center justify-center py-3 px-6 w-full shadow"
                        ref={canvas}
                    >
                        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 bg-gradient-to-br from-blue-500 to-green-400">
                            <img
                                alt="gallery"
                                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0 p-5"
                                src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg"
                            />
                            <div class={"relative z-10 w-full text-" + fontAlign}>
                                <h2 className={fontSizeClass + " py-12 " + "text-" + fontColor}>
                                    {" "}
                                    {text}{" "}
                                </h2>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div ref={imgClass}></div>{" "}
            </div>{" "}
        </div>
    );
};



export default Editor;
