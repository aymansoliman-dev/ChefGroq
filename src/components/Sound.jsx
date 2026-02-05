import { useEffect, useRef, useState } from "react";
import soundOnSvg from "../assets/sound-on.svg";
import soundOffSVG from "../assets/sound-off.svg";
import music from "../assets/موسيقي تتر الشيف شربيني.mp3";
import Tippy from "@tippyjs/react";

const sound = new Audio(music);
sound.loop = true;

export default function Sound() {
    const [soundOn, setSoundOn] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (soundOn) {
            sound.play().catch(() => {});
        } else {
            sound.pause();
        }
    }, [soundOn]);

    useEffect(() => {
        const timer = setTimeout(() => {
            buttonRef.current?.focus();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Tippy
            content={soundOn ? "Mute Music" : "Play Music"}
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
                onClick={(e) => { e.preventDefault(); setSoundOn(!soundOn); }}
                className="z-10 cursor-pointer rounded-b-full border-3 p-0.5"
            >
                <img
                    src={soundOn ? soundOnSvg : soundOffSVG}
                    alt="Sound"
                    className="pointer-events-none w-[8dvmin] max-w-[32px]"
                />
            </button>
        </Tippy>
    );
}
