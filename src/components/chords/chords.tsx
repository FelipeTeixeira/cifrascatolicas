import { ChordIcon } from '@components/icons/chord-icon';
import styles from './chords.module.scss'
import { ScrollContainer } from '@components/scroll-container/scroll-container';

export function Chords(props: {
    options: string[];
}) {
    return (
        <ScrollContainer>
            {props.options.map((option, index) => (
                <button className={styles.chord} key={index} type='button'>
                    <strong>
                        {option}
                    </strong>
                    <ChordIcon />
                    <span className={styles.chordNote}>1</span>
                    <span className={styles.chordNote}>2</span>
                </button>
            ))}
        </ScrollContainer>
    )
}
