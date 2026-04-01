import { useState, useEffect } from 'react'
import chef from '../assets/chef.svg'
import x from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import me from '../assets/ayman.svg'
import Sound from "./Sound.jsx";

const socialLinks = [
    { name: "GitHub", url: "https://github.com/aymansoliman-dev", icon: github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aymansoliman-dev/en/", icon: linkedin },
    { name: "X (Twitter)", url: "https://x.com/a_soliman1783", icon: x },
    { name: "Resume", url: "https://drive.google.com/file/d/1aFNy-k7gMEHSt-UmVW75aXk5Y4x-wEpm/view?usp=sharing", icon: me }
]

function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(id)
    }, [])
    return (
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    )
}

export default function Header() {
    return (
        <header className="win-taskbar w-full sticky bottom-0 z-50">
            {/* Win2k-style Start button */}
            <button
                className="win-start-btn"
                aria-label="Start"
                style={{ fontFamily: '"Tahoma","MS Sans Serif",sans-serif' }}
            >
                <img src={chef} alt="" width="16" height="16" />
                <span>Start</span>
            </button>

            {/* Vertical divider */}
            <div className="mx-2 self-stretch flex items-center gap-px">
                <div className="w-px h-5 bg-[#1a3060]" />
                <div className="w-px h-5 bg-[#5578c0]" />
            </div>

            {/* Active window pill */}
            <div
                className="flex items-center gap-1 px-2 text-white text-[11px] font-bold cursor-default select-none"
                style={{
                    height: 22,
                    minWidth: 130,
                    background: 'linear-gradient(to bottom,#1a3a7e,#2a5ac7)',
                    borderTop: '1px solid #3a5090',
                    borderLeft: '1px solid #3a5090',
                    borderBottom: '1px solid #6888d0',
                    borderRight: '1px solid #6888d0',
                    fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
                }}
            >
                <img src={chef} alt="" width="14" height="14" />
                <span>Chef Groq - Recipe Maker</span>
            </div>

            <div className="flex-1" />

            {/* Sound control in tray */}
            <Sound />

            {/* System tray: social links */}
            <nav
                className="flex items-center gap-1 px-2 h-full"
                aria-label="Social links"
                style={{
                    borderTop: '1px solid #1a3060',
                    borderLeft: '1px solid #1a3060',
                    borderBottom: '1px solid #5578c0',
                    borderRight: '1px solid #5578c0',
                }}
            >
                {socialLinks.map(({ name, url, icon }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        title={name}
                        className="flex items-center p-[2px] rounded"
                        style={{ transition: 'background 0.1s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                        <img src={icon} alt={name} width="16" height="16" />
                    </a>
                ))}
            </nav>

            {/* Clock */}
            <div
                className="flex items-center px-3 text-white text-[11px] h-full ml-1 select-none"
                aria-label="System clock"
                style={{
                    fontFamily: '"Tahoma","MS Sans Serif",sans-serif',
                    borderTop: '1px solid #1a3060',
                    borderLeft: '1px solid #1a3060',
                    borderBottom: '1px solid #5578c0',
                    borderRight: '1px solid #5578c0',
                    minWidth: 52,
                    justifyContent: 'center',
                }}
            >
                <Clock />
            </div>
        </header>
    )
}
