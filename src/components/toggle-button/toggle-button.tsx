import { useState } from 'react';
import styles from './toggle-button.module.scss'

export function ToggleButton(props: {
    options: string[];
    onClick: any;
}) {
    const [selected, setSelected] = useState(props.options[0]);

    return (
        <div className={styles.toggleButton}>
            {props.options.map((option, index) => (
                <button
                    key={index}
                    type='button'
                    onClick={() => {
                        setSelected(option);
                        props.onClick(option);
                    }}
                    className={`
                        ${styles.button}
                        ${option === selected ? styles.isActive : ''}`
                    }>
                    {option}
                </button>
            ))}
        </div>
    )
}
