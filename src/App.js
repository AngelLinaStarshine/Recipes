import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';



function App() {

const MY_ID = "35cf2e12";
const MY_KEY = "35f0274d08cc569c0044f18ab903f7df";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmit, setWordSubmit] = useState("lemon");

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=$${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [wordSubmit])


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmit(mySearch)
}
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      <h1>Find a Recipe</h1>
         </div>

         <div className='container'>
          <form onSubmit={finalSearch}>
            <input className="search" onChange={myRecipeSearch} value={mySearch}/>
          </form>
          </div>

          <div className='container'>
            <button onClick={finalSearch}>
              <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="food"/>
            </button>
          </div>

{myRecipes.map((element, index) =>(
  <MyRecipesComponent key={index}
  label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientLines}/>
) )}


    </div>
  );
}

export default App;
