import cooking from '../assets/cooking.gif'

export default function Submission({ ingredientsLength, isLoading }) {
    const ready = ingredientsLength >= 4;

    return (
        <div
            id="submission"
            className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center p-3"
            style={{
                background: '#d4d0c8',
                borderTop: '1px solid #808080',
                borderBottom: '1px solid #ffffff',
                fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
            }}
        >
            <div style={{ fontSize: 11 }}>
                <p className="font-bold" style={{ marginBottom: 2 }}>Ready for a recipe?</p>
                <p style={{ color: ready ? '#008000' : '#808080' }}>
                    {ready
                        ? `✅ ${ingredientsLength} ingredients ready — click Get Recipe!`
                        : `⚠️ Add ${4 - ingredientsLength} more ingredient${4 - ingredientsLength !== 1 ? 's' : ''} to continue`}
                </p>
            </div>
            {isLoading ? (
                <div className="flex items-center gap-2" style={{ fontSize: 11 }}>
                    <img src={cooking} alt="Cooking..." width="32" />
                    <span>Generating recipe...</span>
                </div>
            ) : (
                <button
                    type="submit"
                    aria-label="Get a recipe"
                    disabled={!ready}
                    className="win-btn win-btn-default win-btn-primary"
                    style={{ minWidth: 110 }}
                >
                    🍳 Get Recipe
                </button>
            )}
        </div>
    )
}
