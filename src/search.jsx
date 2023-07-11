import { useState, useEffect} from "react";
import Meals from "./meals";

function Search(){
    const[query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])

    const apiId = "5a0154a0"
    const apiKey = "bed919734efaca6e102267f80e6b2a0d"
    const url =`https://api.edamam.com/api/recipes/v2?type=any&q=${query}&app_id=${apiId}&app_key=${apiKey}`
    const randomUrl =`https://api.edamam.com/api/recipes/v2?type=any&q=chicken&app_id=${apiId}&app_key=${apiKey}`

    function searchResults(e){
        setQuery(e.target.value)
        fetch(url)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRecipes(data.hits)
        })
    
    }

    function fetchRandom(){
    
        fetch(randomUrl)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRecipes(data.hits)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
    }

    useEffect(() =>{
        fetchRandom()
    },[])
 
    return(
        <div>
            <form className="w-full  mt-[34px]" onSubmit={handleSubmit}>
                <div className="flex justify-center gap-[10px] flex-wrap items-center">
                    <input 
                        type="text" 
                        placeholder="Search recipe"
                        value={query}
                        onChange={searchResults}
                        maxLength={100}
                        className="inline-block w-[300px] h-[50px] lg:w-[800px] lg:h-[50px] bg-[#d9d9d9] rounded-[50px] text-black text-[20px] p-[40px]"
                    />
                </div>
            </form>
            <Meals recipes={recipes}/>
        </div>
       
    )
}

export default Search;