import { ArrowExpandIcon } from '@components/icons/arrow-expand-icon';
import styles from './radio-group.module.scss'
import { useState } from 'react';

export function RadioGroup(props: {
    selected: string;
    options: string[];
}) {
    const [selected, setSelected] = useState(props.selected);
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.radioGroup}>
            <button className={styles.expandButton} onClick={() => setVisible(!visible)}>
                {selected}
                <span className={visible ? styles.isActive : ''}>
                    <ArrowExpandIcon />
                </span>
            </button>

            {visible &&
                <ul className={styles.options}>
                    {props.options.map((option, index) => (
                        <li key={index} className={option === selected ? styles.selected : ''}>
                            <button className={styles.option} type='button' onClick={() => {
                                setSelected(option);
                                setVisible(false);
                            }}>
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}
