import ingredientIcon from '../assets/ingredient.svg'

export default function ListOfIngredients({ ingredients, handleRemoveIngredient, disabled }) {
    return (
        <div className="win-groupbox" data-label="Ingredients on the Table">
            <div className="win-listbox overflow-y-auto" style={{ maxHeight: 220 }}>
                {ingredients.map((ingredient, i) => (
                    <div
                        key={ingredient}
                        className="win-listbox-item"
                        style={{
                            background: i % 2 === 0 ? '#ffffff' : '#f5f5f0',
                        }}
                    >
                        <img src={ingredientIcon} alt="" width="14" height="14" style={{ flexShrink: 0 }} />
                        <input
                            id={ingredient}
                            name="ingredients[]"
                            value={ingredient}
                            readOnly
                            className="grow bg-transparent outline-none cursor-default"
                            style={{ fontSize: 11, fontFamily: '"Tahoma","MS Sans Serif",sans-serif', border: 'none', color: 'inherit' }}
                            disabled
                        />
                        {!disabled && (
                            <button
                                aria-label={`Remove ${ingredient}`}
                                onClick={() => handleRemoveIngredient(ingredient)}
                                className="win-btn"
                                style={{ minWidth: 0, padding: '1px 6px', fontSize: 10, marginLeft: 4, flexShrink: 0 }}
                                title={`Remove ${ingredient}`}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div style={{ fontSize: 11, color: '#808080', marginTop: 4 }}>
                {ingredients.length} ingredient{ingredients.length !== 1 ? 's' : ''} — need at least 4 to generate a recipe
            </div>
        </div>
    )
}
