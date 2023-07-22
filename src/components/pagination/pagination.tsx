import Link from 'next/link';
import styles from './pagination.module.scss'
import { MetaInterface } from '@interfaces/meta.interface';
import { useRouter } from 'next/router';

export function Pagination(props: {
    className: string;
    meta: MetaInterface;
}) {
    const { meta } = props;
    const router = useRouter()
    const nextPage = meta.currentPage + 1;
    const previousPage = meta.currentPage - 1;
    const urlPage = router.asPath.split('/')[1];

    function setUrlPage(page: number): string {
        return `/${urlPage}/pagina/${page}`;
    }

    return (
        <ul className={styles.pagination}>
            {previousPage ?
                <li>
                    <Link href={setUrlPage(previousPage)} className={styles.link}>
                        Anterior
                    </Link>
                </li>
                : null}

            <li>
                <span className={styles.page}>{meta.currentPage}</span>
                de
                <span className={styles.page}>{meta.totalPages}</span>
            </li>

            {meta.currentPage !== meta.totalPages ?
                <li>
                    <Link href={setUrlPage(nextPage)} className={styles.link}>
                        Proximo
                    </Link>
                </li>
                : null}
        </ul>
    )
}

Pagination.defaultProps = {
    className: '',
};
