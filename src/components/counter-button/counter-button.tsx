import { AddIcon } from '@components/icons/add-icon';
import styles from './counter-button.module.scss'
import { RemoveIcon } from '@components/icons/remove-icon';

export function CounterButton(props: {
    name: string;
}) {
    return (
        <div className={styles.counterButton}>
            <button
                type='button'
                className={styles.button}>
                <RemoveIcon />
            </button>

            {props.name}

            <button
                type='button'
                className={styles.button}>
                <AddIcon />
            </button>
        </div>
    )
}
