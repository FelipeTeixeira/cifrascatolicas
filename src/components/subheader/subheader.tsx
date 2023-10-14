import styles from './subheader.module.scss'
import { ArrowBackIcon } from '@components/icons/arrow-back-icon';
import { SearchIcon } from '@components/icons/search-icon';
import Link from 'next/link';

export function SubHeader(props: {
    previousUrl: string;
    showSearch: boolean;
}): JSX.Element {
    return (
        <header className={styles.subheader}>
            <Link href={props.previousUrl || '/'} className={styles.iconBack}>
                <ArrowBackIcon />
            </Link>

            <strong>Cifras Católicas</strong>

            {props.showSearch &&
                <Link href="/busca" className={styles.search}>
                    <SearchIcon width={18} height={18} />
                </Link>
            }
        </header>
    )
}

SubHeader.defaultProps = {
    showSearch: true,
};
