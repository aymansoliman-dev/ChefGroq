import chef from '../assets/chef.svg'
import x from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.svg'
import me from '../assets/ayman.svg'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away-subtle.css';

const socialLinks = [
    { name: "GitHub", url: "https://github.com/aymansoliman-dev", icon: github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aymansoliman-dev/en/", icon: linkedin },
    { name: "X", url: "https://x.com/a_soliman1783", icon: x },
    { name: "Ayman", url: "https://drive.google.com/file/d/1aFNy-k7gMEHSt-UmVW75aXk5Y4x-wEpm/view?usp=sharing", icon: me }
]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-center items-center gap-4 py-4 bg-white">
            <div className="m-auto flex justify-between">
                <div id="logo" className="flex justify-center items-center-safe gap-4">
                    <Tippy className="sm:hidden" content="Chef Groq" arrow={true} animation="shift-away-subtle" duration={[300, 200]} trigger="mouseenter" placement="right">
                        <span>
                            <img src={chef} alt="Chef" className="w-12 sm:w-16 aspect-square"/>
                        </span>
                    </Tippy>
                    <h1 className="hidden sm:inline text-xl translate-y-1">Chef Groq</h1>
                </div>
                <div id="social-links" className="flex items-center ">
                    <ul className="flex items-center gap-5">
                        { socialLinks.map(({ name, url, icon }) =>
                            <li key={name} id={name}>
                                <Tippy content={name} arrow={true} animation="shift-away-subtle" duration={[300, 200]} trigger="mouseenter">
                                    <span>
                                        <a href={url} target="_blank" rel="noreferrer">
                                            <img src={icon} alt={name} className="w-8 aspect-square" />
                                        </a>
                                    </span>
                                </Tippy>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}