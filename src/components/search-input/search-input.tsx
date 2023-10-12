import { ChangeEvent, useState } from 'react';
import styles from './search-input.module.scss'
import { SearchIcon } from '@components/icons/search-icon'

export function SearchInput(props: {
    placeholder: string;
    className: string;
    onChange: (value: string) => void;
}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        props.onChange(newValue);
    };

    return (
        <div className={`${styles.formGroup} ${props.className}`}>
            <span className={styles.icon}>
                <SearchIcon width={20} height={20} />
            </span>
            <input
                type="text"
                autoComplete='off'
                placeholder={props.placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    )
}

SearchInput.defaultProps = {
    placeholder: '',
    className: '',
};
