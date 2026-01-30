import chef from '../assets/chef.svg'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-center items-center gap-4 py-4 bg-white">
            <img src={chef} alt="Chef" className="w-12 sm:w-16 aspect-square"/>
            <h1 className="text-xl sm:text-2xl translate-y-1">Chef Groq</h1>
        </header>
    )
}