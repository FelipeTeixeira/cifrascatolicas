import { useState } from 'react';
import styles from './toggle-button.module.scss'

export function ToggleButton(props: {
    options: string[];
    // TODO - melhorar tipagem dos onClick
    onClick: any;
    hasButtonSpacing: boolean;
}) {
    const [selected, setSelected] = useState(props.options[0]);

    return (
        <div className={`
            ${styles.toggleButton}
            ${props.hasButtonSpacing ? styles.hasButtonSpacing : ''}
        `}>
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

ToggleButton.defaultProps = {
    hasButtonSpacing: false,
};
