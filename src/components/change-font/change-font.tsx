import { AddIcon } from '@components/icons/add-icon';
import styles from './change-font.module.scss'
import { RemoveIcon } from '@components/icons/remove-icon';

export function ChangeFont(props: { fontSize: number, updateFontSize: (novoTamanho: number) => void }) {
    const { fontSize, updateFontSize } = props;

    const increaseFontSize = () => {
        const newFontSize = fontSize + 2;
        updateFontSize(newFontSize);
    }

    const decreaseFontSize = () => {
        const newFontSize = fontSize - 2;
        updateFontSize(newFontSize);
    }

    return (
        <div className={styles.changeFont}>
            <button
                onClick={decreaseFontSize}
                disabled={fontSize === 10}
                type='button'
                className={styles.button}>
                <RemoveIcon />
            </button>

            Letra

            <button
                onClick={increaseFontSize}
                disabled={fontSize === 22}
                type='button'
                className={styles.button}>
                <AddIcon />
            </button>
        </div>
    )
}
