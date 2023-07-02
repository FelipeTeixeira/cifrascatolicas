import styles from './chords.module.scss'
import { ScrollContainer } from '@components/scroll-container/scroll-container';
import Image from 'next/image';
import ChordIcon from '@public/icons/chord-icon.svg'

export function Chords(props: {
    options: string[];
    className: string;
}) {
    return (
        <ScrollContainer className={props.className}>
            {props.options.map((option, index) => (
                <button className={styles.chord} key={index} type='button'>
                    <strong>
                        {option}
                    </strong>

                    <Image src={ChordIcon} alt='' />

                    <span className={styles.chordNote}>1</span>
                    <span className={styles.chordNote}>2</span>
                </button>
            ))}
        </ScrollContainer>
    )
}

Chords.defaultProps = {
    className: '',
};
