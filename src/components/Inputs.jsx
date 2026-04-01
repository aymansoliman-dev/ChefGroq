export default function Inputs({ handleAddIngredient }) {
    return (
        <div className="win-groupbox" data-label="Add Ingredient">
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-end">
                <label htmlFor="ingredient" className="grow flex flex-col gap-1">
                    <span style={{ fontSize: 11 }}>Ingredient name:</span>
                    <input
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        className="win-input"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddIngredient(e.target);
                            }
                        }}
                    />
                </label>
                <button
                    onClick={(e) => { e.preventDefault(); handleAddIngredient(document.querySelector('[name="ingredient"]')); }}
                    className="win-btn win-btn-default"
                    style={{ minWidth: 110, flexShrink: 0 }}
                >
                    + Add Ingredient
                </button>
            </div>
        </div>
    );
}
