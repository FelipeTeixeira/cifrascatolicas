import styles from './toolbar.module.scss'
import { PlayIcon } from '@components/icons/play-icon'
import { StopIcon } from '@components/icons/stop-icon';
import { useEffect, useState } from 'react';

export function Toolbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [speed, setSpeed] = useState(100);
    const speedOptions = [100, 50, 10, 5];
    const [speedIndex, setSpeedIndex] = useState(0);

    useEffect(() => {
        let scrollInterval: NodeJS.Timer;

        if (isScrolling) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1);

                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    clearInterval(scrollInterval);
                    setIsScrolling(false);
                }
            }, speed);
        }

        return () => {
            clearInterval(scrollInterval);
        };
    }, [isScrolling, speed]);

    const toggleScroll = () => {
        setIsScrolling(!isScrolling);
    };

    const changeSpeed = () => {
        const nextSpeedIndex = (speedIndex + 1) % speedOptions.length;
        setSpeedIndex(nextSpeedIndex);
        setSpeed(speedOptions[nextSpeedIndex] as any);
    };

    return (
        <div className={styles.toolbar}>
            <p>
                Auto rolagem
            </p>

            <button className={styles.button} onClick={toggleScroll} type="button">
                {isScrolling ? <StopIcon /> : <PlayIcon />}
            </button>

            <button
                onClick={changeSpeed}
                className={`${styles.button} ${styles.secondary}`}
                color='white'
                type="button">

                {speedOptions.findIndex(option => option === speed) + 1}x
            </button>

            {/* TODO - BOTAO DE SUBIR A TELA */}
        </div>
    )
}
