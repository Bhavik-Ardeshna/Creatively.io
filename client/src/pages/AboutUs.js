import React from 'react';
import '../aboutus.css';
import Header from '../partials/Header';
function AboutUs(props) {
    return (
      <>
      <Header/>
      <div class="bg-green-100 py-32">
                <h1 className="mt-8 text-center text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Our Features <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> & Services.</span></h1>
      <div class="md:flex md:justify-center md:space-x-8 md:px-14">
        <div class="mt-16 py-4 px-4 bg-whit w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Communications</h1>
              <p class="mt-4 text-gray-600">It will be implemented in our updated version.</p>
              <button class="mt-8 mb-4 py-2 px-20 rounded-full bg-blue-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
            </div>
          </div>
        </div>
        <div class="mt-16 py-4 px-4 bg-whit w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Editing Template</h1>
              <p class="mt-4 text-gray-600">Editing evolves fontsize fontalign fontfamily.</p>
              <button class="mt-8 mb-4 py-2 px-20 rounded-full bg-blue-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
            </div>
          </div>
        </div>
        <div class="mt-16 py-4 px-4 bg-whit w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div class="w-sm">
            <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
            <div class="mt-4 text-green-600 text-center">
              <h1 class="text-xl font-bold">Happy Customers</h1>
              <p class="mt-4 text-gray-600">Customer can download Template they have created using our editor.</p>
              <button class="mt-8 mb-4 py-2 px-20 rounded-full bg-blue-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </>
    );
}

export default AboutUs;