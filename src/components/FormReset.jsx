export default function FormReset(props) {
    return (
        <div id="form-reset" className="fixed bottom-[4dvmin] flex flex-col sm:flex-row justify-between gap-4 sm:items-center bg-white to-10%-transparent p-2 sm:p-8 rounded-md shadow-[0px_0px_4rem_4rem_#e2e2e2] text-center sm:text-left text-sm sm:text-lg">
            <div>
                <p className="font-bold text-lg">Ready for a new recipe?</p>
                <p className="text-sm text-gray-500">Generate a new recipe with new ingredients.</p>
            </div>
            <button type="reset" onClick={props.handleReset} aria-label="Get a new recipe" className="disabled:bg-gray-300 bg-red shrink-0 cursor-pointer bg-[#d17557] text-white px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150">Get a new recipe</button>
        </div>
    )
}