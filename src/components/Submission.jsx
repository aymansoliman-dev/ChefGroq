import cooking from '../assets/cooking.gif'

export default function Submission(props) {
    return (
        <div id="submission" className="fixed bottom-[4dvmin] w-[min(64rem, 90dvw)] flex flex-col sm:flex-row justify-between gap-4 sm:items-center bg-white p-2 sm:p-8 rounded-md shadow-[0px_0px_4rem_4rem_#e2e2e2] text-center sm:text-left text-sm sm:text-lg">
            <div>
                <p className="font-bold text-lg">Ready for a recipe?</p>
                <p className="text-sm text-gray-500">Generate a recipe from your list of ingredients.</p>
            </div>
            { props.isLoading ? <img src={cooking} alt="Cooking..." width="48" className="mx-auto sm:mx-0" /> : <button type="submit" aria-label="Get a recipe" disabled={props.ingredientsLength < 4} className="disabled:bg-gray-300 bg-red shrink-0 cursor-pointer bg-[#d17557] text-white px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150">Get a recipe</button> }
        </div>
    )
}