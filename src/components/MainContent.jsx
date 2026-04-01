import IngredientsForm from "./IngredientsForm.jsx";
import Recipe from "./Recipe.jsx";
import {useState, useEffect, useMemo} from "react";
import getRecipeFromGroq from "../ai.js";
import FormReset from "./FormReset.jsx";
import Alert from "./Alert.jsx";
import chefIcon from "../assets/chef.svg";

export default function MainContent() {
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
    const [alertMessage, setAlertMessage] = useState(null); // Add state for alert

    // Memoize the serialized recipe to avoid unnecessary stringification
    const serializedRecipe = useMemo(() => {
        return recipe ? encodeURIComponent(JSON.stringify(recipe)) : null;
    }, [recipe]);

    // Only update URL when serialized recipe actually changes
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (serializedRecipe) {
            // Check if the URL actually needs updating
            if (params.get('recipe') !== serializedRecipe) {
                params.set('recipe', serializedRecipe);
                const newUrl = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState({}, '', newUrl);
            }
        } else {
            if (params.has('recipe')) {
                params.delete('recipe');
                const newUrl = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState({}, '', newUrl);
            }
        }
    }, [serializedRecipe]);

    /**/
    function getRecipe(event) {
        event.preventDefault();
        const ingredients = new FormData(event.target).getAll('ingredients[]');

        // Check if there are at least 4 ingredients
        if (ingredients.length < 4) {
            setAlertMessage("You shall add at least 4 ingredients!");
            return;
        }

        setLoadingRecipe(true);
        getRecipeFromGroq(ingredients)
            .then(recipe => setRecipe(recipe))
            .finally(() => setLoadingRecipe(false));
    }
    /**/

    function dismissAlert() {
        setAlertMessage(null);
    }

    function reset() {
        setRecipe(null);
    }

    return (
        <main
            className="grow flex items-start justify-center p-3 sm:p-5"
            style={{ fontFamily: '"Tahoma","MS Sans Serif",sans-serif' }}
        >
            {/* Main application window */}
            <div className="win-window w-full" style={{ maxWidth: 700 }}>

                {/* Title bar */}
                <div className="win-title-bar">
                    <img src={chefIcon} alt="" className="win-title-bar-icon" />
                    <span className="win-title-bar-text">Chef Groq — AI Recipe Maker</span>
                    <button className="win-title-btn" title="Minimize" aria-label="Minimize">_</button>
                    <button className="win-title-btn" title="Maximize" aria-label="Maximize">□</button>
                    <button className="win-title-btn font-bold" title="Close" aria-label="Close" style={{ marginLeft: 2 }}>✕</button>
                </div>

                {/* Menu bar */}
                <div className="win-menubar">
                    <span className="win-menubar-item"><u>F</u>ile</span>
                    <span className="win-menubar-item"><u>E</u>dit</span>
                    <span className="win-menubar-item"><u>V</u>iew</span>
                    <span className="win-menubar-item"><u>R</u>ecipe</span>
                    <span className="win-menubar-item"><u>H</u>elp</span>
                </div>

                {/* Toolbar */}
                <div className="win-toolbar">
                    <button className="win-btn" style={{ minWidth: 0, padding: '2px 8px' }} title="New">📄 New</button>
                    <div style={{ width: 1, alignSelf: 'stretch', background: '#808080', margin: '0 3px' }} />
                    <button className="win-btn" style={{ minWidth: 0, padding: '2px 8px' }} title="Print">🖨 Print</button>
                    <button className="win-btn" style={{ minWidth: 0, padding: '2px 8px' }} title="Help">❓ Help</button>
                </div>

                {/* Content area */}
                <div className="p-3 flex flex-col gap-3" style={{ background: '#d4d0c8' }}>

                    {/* About group box */}
                    <div className="win-groupbox" data-label="About Chef Groq">
                        <div className="flex items-start gap-3">
                            <img src={chefIcon} alt="Chef Groq" width="32" height="32" style={{ flexShrink: 0, imageRendering: 'auto' }} />
                            <div>
                                <p className="font-bold mb-1" style={{ fontSize: 11 }}>Make a recipe from your own ingredients!</p>
                                <p style={{ fontSize: 11, color: '#404040' }}>
                                    Chef Groq is an AI-powered recipe generator using the Groq API.
                                    Add at least <strong>4 ingredients</strong> and click <strong>Get Recipe</strong> to generate your recipe.
                                </p>
                            </div>
                        </div>
                    </div>

                    {alertMessage && <Alert alertMessage={alertMessage} handleDismiss={dismissAlert} />}
                    <IngredientsForm recipe={recipe} handleSubmit={getRecipe} isLoading={loadingRecipe} />

                    {recipe && (
                        <>
                            <Recipe recipe={recipe} />
                            <FormReset handleReset={reset} />
                        </>
                    )}
                </div>

                {/* Status bar */}
                <div className="win-statusbar">
                    <div className="win-statusbar-panel" style={{ flex: 1 }}>
                        {loadingRecipe
                            ? '⏳ Generating recipe, please wait...'
                            : recipe
                                ? '✅ Recipe ready — scroll down to read'
                                : 'Ready — add at least 4 ingredients to get started'}
                    </div>
                    <div className="win-statusbar-panel" style={{ flex: '0 0 auto', minWidth: 130 }}>
                        Powered by Groq AI
                    </div>
                </div>
            </div>
        </main>
    );
}
