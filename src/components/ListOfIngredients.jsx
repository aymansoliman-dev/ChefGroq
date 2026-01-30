import ingredientIcon from '../assets/ingredient.svg'
import removeIngredientIcon from '../assets/remove-ingredient.svg'

export default function ListOfIngredients(props) {

    const ingredientsItems = props.ingredients.map(ingredient =>
        <li key={ingredient} className="flex justify-between items-center pb-2">
            <label htmlFor={ingredient} className="flex items-center gap-4 grow shrink">
                <img src={ingredientIcon} alt={ingredient} width="24"/>
                <input id={ingredient} name="ingredients[]" value={ingredient} readOnly className="pointer-events-none cursor-text" disabled />
            </label>
            <button disabled={props.disabled} aria-label={"remove " + ingredient} onClick={() => props.handleRemoveIngredient(ingredient)} className="cursor-pointer disabled:hidden"><img src={removeIngredientIcon} alt="remove ingredient" width="24" className="pointer-events-none" /></button>
        </li>
    )

    return (
        <div id="ingredients">
            <h2 className="text-lg sm:text-xl font-bold mb-6">Ingredients on table:</h2>
            <ul className="text-[#475467] sm:text-xl overflow-y-auto">
                {ingredientsItems}
            </ul>
        </div>
    )
}