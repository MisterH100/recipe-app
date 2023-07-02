import background from './assets/background.jpg';
import chicken from './assets/TandooriChicken.jpg';
import Recipe from './recipe';

function Search(){
    return(
        <>
            <form className="w-full  mt-[34px]">
                <input 
                    type="text" 
                    placeholder="Search recipe"
                    maxLength={100}
                    className="block w-[300px] h-[60px] lg:w-[800px] lg:h-[100px] bg-[#d9d9d9] rounded-[50px] text-black text-[20px] md:text-[32px] m-auto p-[50px]"
                />
            </form>

            <div className="flex flex-wrap justify-center md:justify-between w-full lg:w-[1000px] m-auto mt-[34px] gap-[10px] md:gap-0">
                <button className="w-[180px] h-[88px] bg-[#78e538] rounded-[50px] text-center text-black text-[32px] font-bold mt-0 md:mt-[10px]">
                    All
                </button>
                <button className="w-[180px] h-[88px] bg-[#f6f6e4] rounded-[50px] text-center text-black text-[32px] text-opacity-70 font-bold">
                    Breakfast
                </button>
                <button className="w-[180px] h-[88px] bg-[#f6f6e4] rounded-[50px] text-center text-black text-[32px] text-opacity-70 font-bold">
                    lunch
                </button>
                <button className="w-[180px] h-[88px] bg-[#f6f6e4] rounded-[50px] text-center text-black text-[32px] text-opacity-70 font-bold">
                    dinner
                </button>

            </div>
        </>
       
    )
}

function FoodCard(){
    return(
        <article className="relative w-[300px] h-[400px] m-auto mt-[34px] px-[10px] mb-[50px] cursor-pointer">
            <img 
                className="w-[300px] h-[400px] object-cover"
                src={chicken} 
                alt="Tandoori Chicken" 
            />
            <div className="absolute top-[50%] left-[10px] w-[280px] bg-[#78e538]/[0.5]">
                <h1 className="w-full h-[113px] text-white text-[40px] font-bold">Tandoori Chicken</h1>
                <p className="w-full h-[31px] text-white text-[24px] font-bold"> ingredients:</p>
                <p className="w-full h-[31px] text-white text-[24px] font-bold"> preperation time:</p>
            </div>
            
        </article>
    )
}

function Home(){
    return(
        <section className="w-full h-full bg-[#656723] ">
            <div className="relative w-full lg:w-[1000px] h-[500px] m-auto">
                <img 
                    className="w-full lg:w-[1000px] h-[500px] object-cover"
                    src={background} 
                    alt="Background" 
                />
                <h1 className="absolute top-[50%] w-full h-[210px] text-white text-[40px] lg:text-[64px] font-bold px-[10px] bg-[#d9d9d9]/[0.3]">Be a chef today <br/>find the best recipe for you</h1>
            </div>
            <Search/>
            <div className="w-full flex flex-wrap justify-between">
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </div>
            <Recipe/>
            
        </section>
    )
}

export default Home;