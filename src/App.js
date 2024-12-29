import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

const MY_ID = "35cf2e12";
const MY_KEY = "35f0274d08cc569c0044f18ab903f7df";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([])

useEffect(() => {
  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=user&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [])


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
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
          <form>
            <input className="search" onChange={myRecipeSearch} value={mySearch}/>
          </form>
          </div>

          <div className='container'>
            <button>
              <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="food"/>
            </button>
          </div>

{myRecipes.map(element =>(
  <MyRecipesComponent/>
) 

)}


    </div>
  );
}

export default App;
