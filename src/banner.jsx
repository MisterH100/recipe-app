import background from './assets/background.jpg';

function Banner(){
    return(
        <section className="flex gap-[10px] justify-center w-full h-[600px] bg-[#F6A022] py-[20px]">
            <div className="w-[20%] h-[500px] bg-[#242424]">
                <img 
                    className="w-full h-full object-cover"
                    src={background} 
                    alt="Background" 
                />
            </div>

            <div className="relative w-[50%] h-[500px]">
                <img 
                    className="w-full h-full object-cover"
                    src={background} 
                    alt="Background" 
                />
            </div>

            <div className="w-[20%] h-[500px] bg-[#242424]">
                <img 
                    className="w-full h-full object-cover"
                    src={background} 
                    alt="Background" 
                />
            </div>
        </section>
    )
}

export default Banner;