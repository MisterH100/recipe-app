import {useState} from 'react';
import background from './assets/background.jpg';
import Search from "./search";



function App(){

  return (
    <section className="w-full h-auto bg-[#F6A022] ">
    <div className="relative w-full lg:w-[1000px] h-[500px] m-auto top-[20px]">
        <img 
            className="w-full lg:w-[1000px] h-[500px] object-cover"
            src={background} 
            alt="Background" 
        />
        <h1 className="absolute top-[50%] w-full h-[210px] text-white text-[40px] lg:text-[64px] font-bold px-[10px] bg-[#d9d9d9]/[0.3]">Be a chef today <br/>find the best recipe for you</h1>
    </div>

    <Search/>

</section>
  )
}

export default App
