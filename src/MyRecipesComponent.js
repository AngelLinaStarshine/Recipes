import check from './check.png';

function MyRecipesComponent({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>
            <div className="container">
            <img src={image} alt="recipe" width="300px"/>
            </div>
            <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img src={check} className="icon" alt="icon"/>
                        {ingredient}</li>
                ))}
            </ul>
            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}


export default MyRecipesComponent;