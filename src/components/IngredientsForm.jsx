import {useState} from "react";
import Alert from "./Alert.jsx";
import Inputs from "./Inputs.jsx";
import ListOfIngredients from "./ListOfIngredients.jsx";
import Submission from "./Submission.jsx";

export default function IngredientsForm(props) {

    const [ingredients, setIngredients] = useState([])
    const [alertIngredient, setAlertIngredient] = useState(null)

    function addIngredient(input) {
        input.value = input.value.trim().toLowerCase()
        ingredients.includes(input.value) ? setAlertIngredient(input.value) : !input.value? input.value = '' : setIngredients([input.value, ...ingredients])
        input.value = ''
        input.focus()
    }

    function dismissAlert() {
        setAlertIngredient(null)
    }

    function removeIngredient(ingredient) {
        setIngredients(ingredients => ingredients.filter(i => i !== ingredient))
    }

    return (
        <section id="ingredients-form">
            <form onSubmit={props.handleSubmit} className="flex flex-col gap-6">
                {/* Hidden inputs for FormData to pick up */}
                {ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="hidden"
                        name="ingredients[]"
                        value={ingredient}
                    />
                ))}
                { alertIngredient                   && <Alert alertIngredient={alertIngredient} handleDismiss={dismissAlert} />                                                             }
                { !props.isLoading && !props.recipe && <Inputs handleAddIngredient={addIngredient} />                                                                                       }
                { !!ingredients.length              && <ListOfIngredients ingredients={ingredients} handleRemoveIngredient={removeIngredient} disabled={props.isLoading || props.recipe} /> }
                { !props.recipe                     && <Submission ingredientsLength={ingredients.length} isLoading={props.isLoading} />                                                    }
            </form>
        </section>
    )
}