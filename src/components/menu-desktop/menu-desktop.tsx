import styles from './menu-desktop.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SearchInput } from '@components/search-input/search-input'

export function MenuDesktop(props: {
    textColor: 'white' | 'black'
}) {
    const router = useRouter();
    const menus = [
        { name: 'Repertório', url: '/repertorio' },
        { name: 'Artistas', url: '/artistas' },
        { name: 'Mais acessadas', url: '/musicas-mais-acessadas' }
    ];

    return (
        <>
            <nav className={styles.nav}>
                {menus.map((menu, index) => (
                    <Link
                        key={index}
                        href={menu.url}
                        className={`
                            ${styles.link}
                            ${router.pathname === menu.url ? styles.isActive : ''}
                            ${props.textColor === 'white' ? styles.textWhite : ''}
                    `}>
                        {menu.name}
                    </Link>
                ))}

                <SearchInput
                    placeholder='Buscar música ou artista'
                    className={styles.input}
                />
            </nav>
        </>
    )
}

MenuDesktop.defaultProps = {
    textColor: 'black',
};
