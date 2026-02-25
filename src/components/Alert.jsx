import { useEffect, useRef } from 'react'
import chef from '../assets/chef.svg'
import removeIngredientIcon from '../assets/remove-ingredient.svg'

export default function Alert({ alert, handleDismiss }) {
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
            className="m-auto max-w-[90dvw] text-xl bg-white border-2 border-gray-900 p-8 pt-12 pr-12 backdrop:bg-[#00000077]"
        >
            <form method="dialog">
                <button aria-label="dismiss alert" className="absolute right-4 top-4 cursor-pointer">
                    <img src={removeIngredientIcon} alt="close popup" loading="lazy" width="32" className="pointer-events-none" />
                </button>
            </form>
            <div className="flex items-center gap-2">
                <img src={chef} alt="Chef:" width="64" />
                <p>{alert}</p>
            </div>
        </dialog>
    )
}