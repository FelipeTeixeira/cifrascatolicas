import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './search-input.module.scss'
import { SearchIcon } from '@components/icons/search-icon'

export function SearchInput(props: {
    value: string;
    placeholder: string;
    className: string;
    onChange: (value: string) => void;
    onSend: (value: string) => void;
}) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        props.onChange(newValue);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onSend(props.value);
        }
    };

    return (
        <div className={`${styles.formGroup} ${props.className}`}>
            <button type='button' className={styles.icon} onClick={() => props.onSend(props.value)}>
                <SearchIcon width={20} height={20} />
            </button>

            <input
                type="text"
                autoComplete='off'
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

SearchInput.defaultProps = {
    value: '',
    placeholder: '',
    className: '',
    onChange: () => { },
    onSend: () => { },
};
