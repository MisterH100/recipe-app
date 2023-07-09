import { useState,useEffect } from 'react';
import background from './assets/background.jpg';
import chicken from './assets/TandooriChicken.jpg';
import Recipe from './recipe';



function RecipeData(){
    const [users, setUsers] = useState([])

    
}

function Search(){
    const[search, setSearch] = useState("")
    function handleSearch(e){
        e.preventDefault();
        
    }


    return(
        <>
            <form className="w-full  mt-[34px]">
                <div className="flex justify-center gap-[10px] flex-wrap items-center">
                    <input 
                        type="text" 
                        placeholder="Search recipe"
                        value={search}
                        onChange={(e)=> setSearch(e.target.value)}
                        maxLength={100}
                        className="inline-block w-[300px] h-[50px] lg:w-[800px] lg:h-[50px] bg-[#d9d9d9] rounded-[50px] text-black text-[20px] p-[40px]"
                    />
                    <input
                        type="submit"
                        value="Search"
                        onClick={handleSearch}
                        className="inline-block w-[300px] h-[60px] lg:w-[60px] lg:h-[60px] rounded-[50px] lg:rounded-[50%] text-white text-center text-bold bg-[#78e538]"
                    />
                </div>
            </form>

            <form className="flex flex-wrap justify-center md:justify-between w-full lg:w-[1000px] px-[10px] md:px-[0] py-[10px] m-auto mt-[34px] gap-[10px] md:gap-0 border-b-[2px] border-white">
                <label 
                    className="flex items-center gap-[10px]"
                    htmlFor="all">
                    All
                    <input 
                        type="radio"
                        className="filter"
                        id="all"
                        name="filter"
                    />
                </label>
                <label 
                    className="flex items-center gap-[10px]"
                    htmlFor="breakfast">
                    Breakfast
                    <input 
                        type="radio"
                        className="filter"
                        id="breakfast"
                        name="filter"
                    />
                </label>
                <label 
                    className="flex items-center gap-[10px]"
                    htmlFor="lunch">
                    Lunch
                    <input 
                        type="radio"
                        className="filter"
                        id="lunch"
                        name="filter"
                    />
                </label>
                <label 
                    className="flex items-center gap-[10px]"
                    htmlFor="dinner">
                    Dinner
                    <input 
                        type="radio"
                        className="filter"
                        id="dinner"
                        name="filter"
                    />
                </label>

                   
            </form>
        </>
       
    )
}

function FoodCard({setShowRecipe}){
    return(
        <article className="relative w-[300px] h-[400px] m-auto mt-[34px] px-[10px] mb-[50px] cursor-pointer" onClick={()=> setShowRecipe(true)}>
            <div className="card-image w-full h-[250px] overflow-hidden">
                <img 
                    className="w-full h-full object-cover"
                    src={chicken} 
                    alt="Tandoori Chicken" 
                />

            </div>
            <div className="card-text w-full h-[140px] pl-[10px] bg-[#ECE4D2]">
                <h1 className="w-full text-black text-[30px] font-bold truncate">Tandoori Chicken</h1>
                <p className="w-full text-black text-[20px] font-bold"> ingredients:</p>
                <p className="w-full text-black text-[20px] font-bold"> preperation time:</p>
            </div>
            
        </article>
    )
}


function Home(){
    const[showRecipe, setShowRecipe] = useState(false)
    return(
        <section className="w-full h-full bg-[#F6A022] ">
            <div className="relative w-full lg:w-[1000px] h-[500px] m-auto top-[20px]">
                <img 
                    className="w-full lg:w-[1000px] h-[500px] object-cover"
                    src={background} 
                    alt="Background" 
                />
                <h1 className="absolute top-[50%] w-full h-[210px] text-white text-[40px] lg:text-[64px] font-bold px-[10px] bg-[#d9d9d9]/[0.3]">Be a chef today <br/>find the best recipe for you</h1>
            </div>
            <Search/>
            <div className="w-full flex flex-wrap justify-between">
                <FoodCard setShowRecipe={setShowRecipe}/>
                <FoodCard setShowRecipe={setShowRecipe}/>
                <FoodCard setShowRecipe={setShowRecipe}/>
            </div>
            {showRecipe ? <Recipe setShowRecipe={setShowRecipe}/>: ""}
            
        </section>
    )
}

export default Home;