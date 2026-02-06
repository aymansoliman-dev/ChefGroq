import chef from '../assets/chef.svg'
import removeIngredientIcon from '../assets/remove-ingredient.svg'

export default function Alert({ alert, handleDismiss }) {
    return (
        <div id="overlay" className="fixed inset-0 z-50 flex justify-center items-center bg-[#00000077]">
            <div id="alert" className="max-w-[90dvw] relative text-xl bg-white border-2 border-gray-900 p-8 pt-12 pr-12 flex items-center gap-2">
                <button onClick={handleDismiss} aria-label="dismiss alert" className="absolute right-4 top-4 float-right cursor-pointer"><img src={removeIngredientIcon} alt="close popup" loading="lazy" width="32" className="pointer-events-none" /></button>
                <img src={chef} alt="Chef:" width="64"/>
                <p>{ alert }</p>
            </div>
        </div>
    )
}