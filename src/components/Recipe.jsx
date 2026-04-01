import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import recipeIcon from "../assets/recipe.svg"
import love from "../assets/coffee-love.svg"

export default function Recipe({ recipe }) {
    const [displayedText, setDisplayedText] = useState("")
    const [isFinished, setIsFinished] = useState(false)
    const bottomRef = useRef(null)
    const [isUserNearBottom, setIsUserNearBottom] = useState(true)

    useEffect(() => {
        if (!recipe) return
        setDisplayedText("")
        setIsFinished(false)

        let index = 0
        const speed = 18
        const interval = setInterval(() => {
            index++
            setDisplayedText(recipe.slice(0, index))
            if (index >= recipe.length) {
                clearInterval(interval)
                setIsFinished(true)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [recipe])

    useEffect(() => {
        const handleScroll = () => {
            const distanceFromBottom =
                document.documentElement.scrollHeight -
                window.innerHeight -
                window.scrollY
            setIsUserNearBottom(distanceFromBottom < 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isUserNearBottom) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [displayedText, isUserNearBottom])

    return (
        <section id="recipe">
            {/* Recipe sub-window */}
            <div className="win-window">
                {/* Inner title bar */}
                <div className="win-title-bar" style={{ background: 'linear-gradient(to right,#006060,#008080)' }}>
                    <img src={recipeIcon} alt="" width="14" height="14" />
                    <span className="win-title-bar-text">Recipe Output</span>
                </div>

                {/* Recipe content */}
                <article
                    aria-live="polite"
                    className="p-3"
                    style={{
                        background: '#ffffff',
                        borderTop: '1px solid #404040',
                        borderLeft: '1px solid #404040',
                        borderBottom: '1px solid #dfdfdf',
                        borderRight: '1px solid #dfdfdf',
                        margin: 4,
                        minHeight: 120,
                        maxHeight: 380,
                        overflowY: 'auto',
                        fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
                        fontSize: 11,
                    }}
                >
                    <ReactMarkdown>{displayedText}</ReactMarkdown>

                    {isFinished && (
                        <div
                            className="flex items-center gap-2 opacity-0 animate-fade-in"
                            style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #d4d0c8', fontSize: 11, color: '#008000' }}
                        >
                            <img src={love} alt="" width="20" />
                            <span>Recipe complete — enjoy your meal!</span>
                        </div>
                    )}

                    <div ref={bottomRef} />
                </article>
            </div>
        </section>
    )
}
