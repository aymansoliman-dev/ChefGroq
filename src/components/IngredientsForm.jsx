import {useState, useEffect, useRef} from "react";
import Alert from "./Alert.jsx";
import Inputs from "./Inputs.jsx";
import ListOfIngredients from "./ListOfIngredients.jsx";
import Submission from "./Submission.jsx";

export default function IngredientsForm({ handleSubmit, isLoading, recipe = null }) {
    const [ingredients, setIngredients] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const urlIngredients = params.get('ingredients');
        return urlIngredients ? urlIngredients.split(',').filter(Boolean) : [];
    });

    const [alertIngredient, setAlertIngredient] = useState(null);
    const timeoutRef = useRef(null);

    // Debounced URL sync
    useEffect(() => {
        // Clear previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Debounce URL updates by 300ms
        timeoutRef.current = setTimeout(() => {
            const params = new URLSearchParams(window.location.search);

            if (ingredients.length > 0) {
                params.set('ingredients', ingredients.join(','));
            } else {
                params.delete('ingredients');
            }

            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.replaceState({}, '', newUrl);
        }, 300);

        // Cleanup
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [ingredients]);

    function addIngredient(input) {
        input.value = input.value.trim().toLowerCase();

        if (ingredients.includes(input.value)) {
            setAlertIngredient(input.value);
        } else if (input.value) {
            setIngredients([input.value, ...ingredients]);
        }

        input.value = '';
        input.focus();
    }

    function dismissAlert() {
        setAlertIngredient(null);
    }

    function removeIngredient(ingredient) {
        setIngredients(ingredients => ingredients.filter(i => i !== ingredient));
    }

    return (
        <section id="ingredients-form">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="hidden"
                        name="ingredients[]"
                        value={ingredient}
                    />
                ))}
                {alertIngredient && <Alert alert={`Oops! You've already put ${alertIngredient} on your table.` } handleDismiss={dismissAlert} />}
                {!isLoading && !recipe && <Inputs handleAddIngredient={addIngredient} />}
                {!!ingredients.length && <ListOfIngredients ingredients={ingredients} handleRemoveIngredient={removeIngredient} disabled={isLoading || recipe} />}
                {!recipe && <Submission ingredientsLength={ingredients.length} isLoading={isLoading} />}
            </form>
        </section>
    );
}