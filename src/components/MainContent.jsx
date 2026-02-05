import IngredientsForm from "./IngredientsForm.jsx";
import Recipe from "./Recipe.jsx";
import {useState, useEffect} from "react";
import getRecipeFromGroq from "../ai.js";
import FormReset from "./FormReset.jsx";

export default function MainContent() {
    // Initialize recipe from URL if present
    const [recipe, setRecipe] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const urlRecipe = params.get('recipe');
        if (urlRecipe) {
            try {
                return JSON.parse(decodeURIComponent(urlRecipe));
            } catch {
                return null;
            }
        }
        return null;
    });

    const [loadingRecipe, setLoadingRecipe] = useState(false);

    // Sync recipe to URL whenever it changes
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (recipe) {
            params.set('recipe', encodeURIComponent(JSON.stringify(recipe)));
        } else {
            params.delete('recipe');
        }

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);
    }, [recipe]);

    function getRecipe(event) {
        event.preventDefault();
        setLoadingRecipe(true);
        const ingredients = new FormData(event.target).getAll('ingredients[]');
        getRecipeFromGroq(ingredients)
            .then(recipe => setRecipe(recipe))
            .finally(() => setLoadingRecipe(false));
    }

    function reset() {
        setRecipe(null);
    }

    return (
        <main className="grow flex flex-col gap-8 m-auto pt-[6dvmin] max-w-11/12">
            <div className="text-center">
                <h1 className="text-lg sm:text-xl font-bold mb-6">Make a recipe from your own Ingredients with Chef Groq!</h1>
                <p className="text-xs sm:text-sm">Chef Groq is an AI-powered recipe generator using Groq API, it helps you decide what to cook using the ingredients you already have.</p>
            </div>
            <IngredientsForm recipe={recipe} handleSubmit={getRecipe} isLoading={loadingRecipe} />
            {recipe &&
                <>
                    <Recipe recipe={recipe} />
                    <FormReset handleReset={reset} />
                </>
            }
        </main>
    );
}