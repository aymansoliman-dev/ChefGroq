export default function FormReset(props) {
    return (
        <div id="form-reset" className="fixed bottom-[4dvmin] left-[50%] -translate-x-1/2 flex flex-col sm:flex-row justify-between gap-2 sm:items-center bg-white to-10%-transparent p-3 sm:p-5 rounded-md border-2 border-dashed border-[#d1d0cc] hover:border-black transition duration-300 text-center sm:text-left text-sm sm:text-lg">
            <p className="font-bold sm:text-lg">Ready for a new recipe?</p>
            <button type="reset" onClick={props.handleReset} aria-label="Get a new recipe" className="disabled:bg-gray-300 bg-red shrink-0 cursor-pointer  border-2 border-dashed bg-white text-[#d17557] px-4 py-2 rounded-md active:scale-[0.98] transition ease-in duration-150">Get a new recipe</button>
        </div>
    )
}