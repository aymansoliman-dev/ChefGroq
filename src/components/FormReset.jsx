export default function FormReset({ handleReset }) {
    return (
        <div
            id="form-reset"
            className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center p-3"
            style={{
                background: '#d4d0c8',
                borderTop: '1px solid #808080',
                borderBottom: '1px solid #ffffff',
                fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
            }}
        >
            <div style={{ fontSize: 11 }}>
                <p className="font-bold" style={{ marginBottom: 2 }}>Recipe generated!</p>
                <p style={{ color: '#404040' }}>Want to try different ingredients?</p>
            </div>
            <button
                type="reset"
                onClick={handleReset}
                aria-label="Get a new recipe"
                className="win-btn win-btn-default"
                style={{ minWidth: 130 }}
            >
                🔄 New Recipe
            </button>
        </div>
    )
}
