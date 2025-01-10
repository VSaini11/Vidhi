import CustomImage from "./CustomImage"
import { Link } from "react-router-dom"

export default function RecipeCard({recipe}){
    // Convert title to URL-friendly ID
    const getTitleId = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link 
                    to={`/recipe/${getTitleId(recipe.title)}`} 
                    className="view-btn"
                >
                    VIEW RECIPE
                </Link>
            </div>
        </div>
    )
}