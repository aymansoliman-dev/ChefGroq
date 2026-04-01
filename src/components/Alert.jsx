import { useEffect, useRef } from 'react'
import chef from '../assets/chef.svg'

export default function Alert({ alertMessage, handleDismiss }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        dialogRef.current.showModal()
    }, [])

    return (
        <dialog
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            ref={dialogRef}
            onClose={handleDismiss}
            className="win-dialog p-0 m-auto max-w-[90dvw]"
            style={{
                fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
            }}
        >
            {/* Dialog title bar */}
            <div className="win-title-bar">
                <img src={chef} alt="" width="14" height="14" />
                <span className="win-title-bar-text">Chef Groq</span>
                <form method="dialog">
                    <button aria-label="Close" className="win-title-btn font-bold" style={{ marginLeft: 2 }}>✕</button>
                </form>
            </div>

            {/* Dialog body */}
            <div className="p-4 flex flex-col gap-4" style={{ background: '#d4d0c8' }}>
                <div className="flex items-start gap-3">
                    {/* Info icon */}
                    <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                            width: 32, height: 32,
                            background: '#000080',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            fontSize: 20,
                            borderRadius: '50%',
                            fontFamily: 'serif',
                        }}
                        aria-hidden="true"
                    >
                        i
                    </div>
                    <p id="alert-dialog-description" style={{ fontSize: 11, paddingTop: 6 }}>
                        {alertMessage}
                    </p>
                </div>

                {/* Win2k-style horizontal separator */}
                <hr className="win-sep" />

                {/* OK button row */}
                <div className="flex justify-center">
                    <form method="dialog">
                        <button
                            aria-label="OK"
                            className="win-btn win-btn-default"
                            style={{ minWidth: 75 }}
                            autoFocus
                        >
                            OK
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
