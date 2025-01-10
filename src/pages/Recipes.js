import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg"
           
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg"
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg"
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg"
        },
        {
            title: "Paneer Tikka",
            image: "/img/gallery/Paneer-Tikka-Featured-1.jpg"

        },
        {
            title: "Masala Dosa",
            image: "/img/gallery/Masala-Dosa-500x500.jpg"

        },
        {
            title: "Chole Bhature",
            image: "/img/gallery/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg"

        },
        {
            title: "Honey Chilli Fries",
            image: "/img/gallery/honey-chilli-fries.jpg"

        }
       
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}