import { useParams } from "react-router-dom"
import CustomImage from "../components/CustomImage"

export default function Recipe() {
    const { recipeId } = useParams()

    const recipes = {
        "chicken-pan-pizza": {
            id: "chicken-pizza",
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            description: "This delicious chicken pan pizza is perfect for any occasion. Made with fresh ingredients and our special sauce.",
            ingredients: [
                "2 cups all-purpose flour",
                "1 cup chicken (diced)",
                "2 cups mozzarella cheese",
                "1 cup pizza sauce",
                "Fresh basil leaves"
            ],
            instructions: [
                "Prepare the pizza dough",
                "Cook the diced chicken",
                "Spread pizza sauce on the dough",
                "Add chicken and cheese",
                "Bake at 425°F for 15-20 minutes"
            ]
        },
        "japanese-sushi": {
            id: "japanese-sushi",
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            description: "Fresh and delicious Japanese sushi rolls made with premium grade fish and seasoned rice.",
            ingredients: [
                "2 cups sushi rice",
                "2 cups water",
                "1/4 cup rice vinegar",
                "Fresh salmon or tuna",
                "Nori sheets"
            ],
            instructions: [
                "Cook sushi rice",
                "Season rice with vinegar",
                "Prepare fish and fillings",
                "Roll with nori sheets",
                "Slice and serve"
            ]
        },
        "mutton-biriyani": {
            id: "Mutton Biriyani",
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            description: "Fresh and delicious Japanese sushi rolls made with premium grade fish and seasoned rice.",
            ingredients: [
                "For Marinating Mutton:",

                "500g mutton (cut into pieces)",
                "1 cup yogurt (curd)",
                "2 tbsp ginger-garlic paste",
                "1 tsp turmeric powder",
                "1 tbsp red chili powder",
                "1 tbsp coriander powder",
                "1 tsp garam masala powder",
                "Salt to taste",

                "For Cooking Rice:",

                "2 cups basmati rice",
                '4 cups water',
                '2 bay leaves',
                '4-5 cloves',
                '4-5 green cardamoms',
                '1 cinnamon stick',
                '1 tsp caraway seeds (shahi jeera)',
                'Salt to taste',

                "For Biryani:",
                
                "3 large onions (thinly sliced)",
                "2 large tomatoes (chopped)",
                "1/2 cup fresh mint leaves (chopped)",
                "1/2 cup fresh coriander leaves (chopped)",
                "2-3 green chilies (slit lengthwise)",
                "1/2 cup milk (warmed)",
                "A few saffron strands (soaked in milk)",
                "1/2 cup cooking oil or ghee",
                "1 tbsp biryani masala powder (optional)"
            ],
            instructions: [
                "Marinate the mutton with yogurt, ginger-garlic paste, turmeric, red chili powder, coriander powder, garam masala, and salt.",
                "Cook the rice according to the instructions on the package.",
                "Add the marinated mutton to the cooked rice and mix well.",
                "Cook for 20-25 minutes, stirring occasionally.",
                "Serve the biriyani with onions, tomatoes, fresh mint, fresh coriander, green chilies, warm milk, saffron, cooking oil, and biryani masala (if used)."
            ]
        },
        "chole-bhature": {
            id: "chole-bhature",
            title: "Chole Bhature",
            image: "/img/gallery/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg",
            description: "Popular North Indian dish featuring spiced chickpeas and deep-fried bread.",
            ingredients: [
                "2 cups chickpeas (soaked overnight)",
                "2 onions (finely chopped)",
                "2 tomatoes (pureed)",
                "2 tbsp ginger-garlic paste",
                "2 cups all-purpose flour (for bhature)",
                "Oil for deep frying",
                "Spices (cumin, coriander, garam masala)"
            ],
            instructions: [
                "Pressure cook chickpeas until tender",
                "Saute onions and add spices",
                "Add tomato puree and cook chole",
                "Make bhature dough and let it rest",
                "Roll and deep fry bhature",
                "Serve hot with pickled onions"
            ]
        },
    
        "honey-chilli-fries": {
            id: "honey-chilli-fries",
            title: "Honey Chilli Fries",
            image: "/img/gallery/honey-chilli-fries.jpg",
            description: "Crispy french fries tossed in sweet and spicy honey chilli sauce.",
            ingredients: [
                "4 large potatoes (cut into strips)",
                "3 tbsp honey",
                "2 tbsp chilli sauce",
                "1 tbsp soy sauce",
                "Spring onions for garnish",
                "Oil for deep frying",
                "Salt to taste"
            ],
            instructions: [
                "Soak potato strips in cold water",
                "Deep fry until golden brown",
                "Prepare honey chilli sauce",
                "Toss fries in the sauce",
                "Garnish with spring onions"
            ]
        },
    
        "masala-dosa": {
            id: "masala-dosa",
            title: "Masala Dosa",
            image: "/img/gallery/Masala-Dosa-500x500.jpg",
            description: "South Indian crispy crepe filled with spiced potato filling.",
            ingredients: [
                "2 cups rice",
                "1 cup urad dal",
                "Potatoes for filling",
                "Onions and spices",
                "Oil for cooking",
                "Coconut chutney",
                "Sambar"
            ],
            instructions: [
                "Soak and grind rice and dal",
                "Ferment the batter overnight",
                "Prepare potato masala filling",
                "Spread batter on hot griddle",
                "Add filling and fold",
                "Serve with chutney and sambar"
            ]
        },
    
        "american-cheese-burger": {
            id: "american-cheeseburger",
            title: "American Cheeseburger",
            image: "/img/gallery/img_5.jpg",
            description: "Classic American cheeseburger with juicy beef patty and melted cheese.",
            ingredients: [
                "500g ground beef",
                "4 cheese slices",
                "4 burger buns",
                "Lettuce and tomatoes",
                "Onions and pickles",
                "Mayo and mustard",
                "Salt and pepper"
            ],
            instructions: [
                "Shape beef into patties",
                "Season with salt and pepper",
                "Grill patties to desired doneness",
                "Add cheese to melt",
                "Toast the buns",
                "Assemble with toppings and sauce"
            ]
        },

        "spaghetti-and-meatballs": {
            id: "spaghetti-meatballs",
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            description: "Classic Italian-American dish featuring tender meatballs and pasta in rich tomato sauce.",
            ingredients: [
                "1 pound ground beef",
                "1 pound spaghetti",
                "2 eggs",
                "1/2 cup breadcrumbs",
                "1/2 cup grated Parmesan",
                "4 cups marinara sauce",
                "Fresh basil leaves",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Mix beef, eggs, breadcrumbs, and seasonings",
                "Form into meatballs",
                "Brown meatballs in pan",
                "Cook spaghetti until al dente",
                "Simmer meatballs in sauce",
                "Serve pasta with meatballs and extra cheese"
            ]
        },
    
        "paneer-tikka": {
            id: "paneer-tikka",
            title: "Paneer Tikka",
            image: "/img/gallery/Paneer-Tikka-Featured-1.jpg",
            description: "Grilled Indian cottage cheese cubes marinated in spiced yogurt.",
            ingredients: [
                "500g paneer cubes",
                "1 cup thick yogurt",
                "2 tbsp ginger-garlic paste",
                "2 tbsp tandoori masala",
                "1 tsp garam masala",
                "Bell peppers and onions",
                "Lemon juice",
                "Oil for basting"
            ],
            instructions: [
                "Mix yogurt with spices for marinade",
                "Marinate paneer for 2 hours",
                "Thread on skewers with vegetables",
                "Grill until charred",
                "Baste with oil while cooking",
                "Serve with mint chutney"
            ]
        }
        
        
    }

    const recipe = recipes[recipeId]

    if (!recipe) {
        return <div>Recipe not found</div>
    }

    return (
        <div className="recipe-page">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-info">
                <h2 className="recipe-title">{recipe.title}</h2>
                <div className="author">
                    <img src={recipe.authorImg} alt="" className="author-img" />
                </div>
                <p className="description">{recipe.description}</p>
                
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="instructions">
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}