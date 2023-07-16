import { useState } from "react";
import Recipe from "./recipe";

function Meals({recipes}){
    const [showRecipe, setShowRecipe] = useState(false)
    const [modalData, setModalData] = useState()
    const data = recipes.recipe

    const showModal = (e)=> {
        setShowRecipe(true)
        setModalData(data.label)
    }

    return(
        <>
            <article className="w-full flex justify-center flex-wrap gap-[40px] m-auto mt-[34px] px-[10px] bg-[#242424]">
                {recipes.map((meal,index) =>(
                    <div key={index} className="w-[300px] h-[400px]  cursor-pointer " onClick={showModal}>
                        <div className="card-image w-full h-[250px] overflow-hidden">
                            <img 
                                className="w-full h-full object-cover"
                                src={meal.recipe.image}
                                alt={meal.recipe.label}
                            />

                        </div>
                        <div className="card-text w-full h-[140px] px-[8px] bg-[#ECE4D2]">
                            <h1 className="w-full text-black text-[30px] font-bold truncate">{meal.recipe.label}</h1>
                            <p className="w-full text-black text-[20px] font-bold"> meal type: {meal.recipe.mealType}</p>
                            <p className="w-full text-black text-[20px] font-bold truncate">Ingredients: {meal.recipe.ingredientLines}</p>

                        </div>
                    </div>
                    
                ))}
            </article>
            {showRecipe ? <Recipe setShowRecipe={setShowRecipe} modalData={modalData} />: null} 
        </> 
    )
}

export default Meals;