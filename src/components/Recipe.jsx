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
            <article
                aria-live="polite"
                className="border-y-2 border-dashed border-[#d1d0cc] pt-6 flex flex-col gap-4
                           sm:[&>p]:text-lg [&>ol]:list-decimal [&>ol]:list-inside
                           [&>ul]:list-disc [&>ul]:list-inside transition-all"
            >
                <img
                    src={recipeIcon}
                    alt="Recipe"
                    className="w-[12dvmin] mx-auto sm:mx-0"
                />
                <ReactMarkdown>{displayedText}</ReactMarkdown>

                {isFinished && (
                    <img
                        src={love}
                        alt="Love"
                        width="32"
                        className="opacity-0 animate-fade-in"
                    />
                )}

                <div ref={bottomRef} className="mt-44" />
            </article>
        </section>
    )
}
