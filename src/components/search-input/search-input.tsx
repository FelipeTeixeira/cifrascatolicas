import styles from './search-input.module.scss'
import { SearchIcon } from '@components/icons/search-icon'

export function SearchInput(props: {
    placeholder: string;
}) {
    return (
        <div className={styles.formGroup}>
            <span className={styles.icon}>
                <SearchIcon width={20} height={20} />
            </span>
            <input type="search" placeholder={props.placeholder} autoComplete='off' />
        </div>
    )
}

SearchInput.defaultProps = {
    placeholder: '',
};
