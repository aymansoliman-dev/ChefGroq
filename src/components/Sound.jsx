import { useEffect, useRef, useState } from "react";
import soundOnSvg from "../assets/sound-on.svg";
import soundOffSVG from "../assets/sound-off.svg";
import music from "../assets/موسيقي تتر الشيف شربيني.mp3";
import Tippy from "@tippyjs/react";

const sound = new Audio(music);
sound.loop = true;

export default function Sound() {
    const [soundOn, setSoundOn] = useState(() => {
        const saved = sessionStorage.getItem('chefGroqMusicPlaying');
        return saved === 'true';
    });

    const [playBlocked, setPlayBlocked] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (soundOn) {
            sound.play().catch((error) => {
                // Autoplay was blocked by browser
                console.log('Autoplay blocked:', error);
                setPlayBlocked(true);
            });
        } else {
            sound.pause();
            setPlayBlocked(false);
        }

        sessionStorage.setItem('chefGroqMusicPlaying', soundOn);
    }, [soundOn]);

    useEffect(() => {
        const timer = setTimeout(() => {
            buttonRef.current?.focus();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        if (playBlocked) {
            // User clicked, so browser will allow playback now
            sound.play().catch(() => {});
            setPlayBlocked(false);
        } else {
            setSoundOn(!soundOn);
        }
    };

    return (
        <Tippy
            content={
                playBlocked
                    ? "Click to resume music"
                    : soundOn
                        ? "Mute Music"
                        : "Play Music"
            }
            trigger="mouseenter focus"
            arrow
            animation="shift-away-subtle"
            duration={[300, 200]}
            placement="top"
        >
            <button
                type="button"
                ref={buttonRef}
                id="music-control"
                onClick={handleClick}
                className={`z-10 cursor-pointer rounded-full border-3 p-2 shrink-0 ${
                    playBlocked ? 'animate-pulse border-yellow-500' : ''
                }`}
            >
                <img
                    src={soundOn || playBlocked ? soundOnSvg : soundOffSVG}
                    alt="Sound"
                    className="pointer-events-none w-6 sm:w-8"
                />
            </button>
        </Tippy>
    );
}