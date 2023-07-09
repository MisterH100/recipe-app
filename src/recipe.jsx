import chicken from './assets/TandooriChicken.jpg';


function Recipe({setShowRecipe}){
    return(
        <section className="recipe flex flex-col md:block w-[300px] h-[auto] md:w-[900px] md:h-[600px] bg-[#ECE4D2]  mx-[10px]">
            <div className="flex justify-center flex-wrap px-[10px] md:px-[130px] py-[10px] md:justify-between ">
                <div className="w-[200px] h-[250px]">
                    <img
                        className="w-full h-full object-cover"
                        src={chicken}
                        alt="Tandoori Chicken"
                    />
                </div>
              
                <article>
                    <h1 className="text-black text-[32px] underline font-bold">Tandoori Chicken</h1>
                    <h3 className="text-black text-[20px] font-bold">Ingredients</h3>
                    <ul className="list-disc px-[20px]">
                        <li  className="text-black text-[16px] font-bold">6 Chicken leg</li>
                        <li  className="text-black text-[16px] font-bold">1 Ciliantro</li>
                        <li  className="text-black text-[16px] font-bold">1 cucumber</li>
                        <li  className="text-black text-[16px] font-bold">1 Garlic</li>
                        <li  className="text-black text-[16px] font-bold">1 Ginger</li>
                        <li  className="text-black text-[16px] font-bold">Peas</li>
                        <li  className="text-black text-[16px] font-bold">Red Onion</li>
                    </ul>
                </article>
            </div>
            <div className=" px-[10px] md:px-[130px] w-full">
                <h3 className="text-black text-[32px] font-bold">Preperation: 1hr</h3>
                <p className="text-black text-[20px] font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quibusdam nobis beatae neque fugiat ullam maiores totam reiciendis, modi ipsam! Ipsum atque ipsam nulla quasi quos beatae odio eius possimus.</p>
            </div>
            <button className="block w-[100px] h-[50px] m-auto my-[40px] text-white text-center rounded bg-red-500" onClick={() => setShowRecipe(false)}>Close</button>
        </section>
    )
}

export default Recipe;