export default function Inputs(props) {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-center text-sm sm:text-lg">
                <label htmlFor="ingredient" className="grow">
                    <input
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        className="w-full border-2 border-gray-300 rounded-md p-2 placeholder-gray-500 box"
                    />
                </label>
                <button onClick={(e) => {e.preventDefault(); props.handleAddIngredient(document.querySelector('[name="ingredient"]'))}} className="shrink-0 cursor-pointer bg-white text-black border-2 border-dashed rounded-md py-2 px-4 active:scale-[0.98] transition ease-in duration-150">+ Add ingredient</button>
            </div>
        </>
    );
}