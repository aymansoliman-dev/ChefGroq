import { useEffect, useRef, useState } from "react";
import soundOnSvg from "../assets/sound-on.svg";
import soundOffSVG from "../assets/sound-off.svg";
import music from "../assets/موسيقي تتر الشيف شربيني.mp3";

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

    const label = playBlocked ? "Click to resume music" : soundOn ? "Mute Music" : "Play Music";

    return (
        <button
            type="button"
            ref={buttonRef}
            id="music-control"
            onClick={handleClick}
            title={label}
            aria-label={label}
            className="win-btn"
            style={{
                minWidth: 0,
                padding: '2px 8px',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 11,
                color: playBlocked ? '#c08000' : '#000000',
            }}
        >
            <img
                src={soundOn || playBlocked ? soundOnSvg : soundOffSVG}
                alt=""
                className="pointer-events-none"
                width="14"
                height="14"
            />
            <span>{soundOn ? '♪ Music On' : '♪ Music Off'}</span>
        </button>
    );
}
