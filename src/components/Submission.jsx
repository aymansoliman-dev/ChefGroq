import cooking from '../assets/cooking.gif'

export default function Submission(props) {
    return (
        <div id="submission" className="fixed bottom-[4dvmin] w-[min(64rem, 90dvw)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center bg-white p-2 sm:p-8 rounded-md border-2 border-dashed border-[#d1d0cc] hover:border-black transition duration-300 text-center sm:text-left text-sm sm:text-lg">
            <div>
                <p className="font-bold text-lg">Ready for a recipe?</p>
                <p className="text-sm text-gray-500">Generate a recipe from your list of ingredients.</p>
            </div>
            { props.isLoading ? <img src={cooking} alt="Cooking..." width="48" className="mx-auto sm:mx-0" /> : <button type="submit" aria-label="Get a recipe" disabled={props.ingredientsLength < 4} className="disabled:bg-gray-300 disabled:border-none disabled:text-white disabled:cursor-not-allowed shrink-0 cursor-pointer border-2 border-dashed bg-white text-[#d17557] hover:text-white hover:bg-[#d17557] hover:border-solid px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150">Get a recipe</button> }
        </div>
    )
}