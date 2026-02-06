import cooking from '../assets/cooking.gif'

export default function Submission(props) {
    return (
        <div id="submission" className="fixed bottom-[4dvmin] left-[50%] -translate-x-1/2 flex flex-col sm:flex-row justify-between gap-2 sm:items-center bg-white p-3 sm:p-5 rounded-md border-2 border-dashed border-[#d1d0cc] hover:border-black transition duration-300 text-center sm:text-left text-sm sm:text-lg">
            <p className="font-bold sm:text-lg">Ready for a recipe?</p>
            { props.isLoading ? <img src={cooking} alt="Cooking..." width="48" className="mx-auto sm:mx-0" /> : <button type="submit" aria-label="Get a recipe" className={props.ingredientsLength < 4? "bg-gray-300 border-none text-white cursor-not-allowed shrink-0 px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150" : "shrink-0 cursor-pointer border-2 border-dashed bg-white text-[#d17557] px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150"}>Get a recipe</button> }
        </div>
    )
}