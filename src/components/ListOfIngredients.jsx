import ingredientIcon from '../assets/ingredient.svg'
import removeIngredientIcon from '../assets/remove-ingredient.svg'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away-subtle.css';

export default function ListOfIngredients({ ingredients, handleRemoveIngredient, disabled }) {

    const ingredientsItems = ingredients.map(ingredient =>
        <li key={ingredient} className="flex justify-between items-center pb-2">
            <label htmlFor={ingredient} className="flex items-center gap-4 grow shrink">
                <img src={ingredientIcon} alt={ingredient} width="24"/>
                <input id={ingredient} name="ingredients[]" value={ingredient} readOnly className="pointer-events-none cursor-text" disabled />
            </label>
            <Tippy content={"remove " + ingredient} arrow={true} animation="shift-away-subtle" duration={[400, 300]} trigger="mouseenter" placement="left">
                <button disabled={disabled} aria-label={"remove " + ingredient} onClick={() => handleRemoveIngredient(ingredient)} className="cursor-pointer disabled:hidden"><img src={removeIngredientIcon} alt="remove ingredient" width="24" className="pointer-events-none" /></button>
            </Tippy>
        </li>
    )

    return (
        <div id="ingredients">
            <ul className="text-[#475467] sm:text-xl overflow-y-auto max-h-80 scroll-smooth
               [&::-webkit-scrollbar]:w-4
               [&::-webkit-scrollbar-track]:bg-transparent
               [&::-webkit-scrollbar-thumb]:rounded-full
               [&::-webkit-scrollbar-thumb]:bg-[#475467]
               [&::-webkit-scrollbar-thumb]:border-l-8
               [&::-webkit-scrollbar-thumb]:border-transparent
               [&::-webkit-scrollbar-thumb]:bg-clip-padding
               [&::-webkit-scrollbar-thumb:hover]:bg-gray-600
               [&::-webkit-scrollbar-button]:hidden">
                {ingredientsItems}
            </ul>
        </div>
    )
}