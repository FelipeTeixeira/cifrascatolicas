import styles from './menu-desktop.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SearchInput } from '@components/search-input/search-input'
import { useEffect, useState } from 'react'

export function MenuDesktop(props: {
    textColor: 'white' | 'black'
}) {
    const router = useRouter();
    const menus = [
        { name: 'Repertório', url: '/repertorio' },
        { name: 'Artistas', url: '/artistas' },
        { name: 'Mais acessadas', url: '/musicas-mais-acessadas' }
    ];
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (router.query?.q) {
            setSearchValue(router.query.q as string);
        }

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };

    }, [router.events]);

    const handleRouteChange = (url: string) => {
        if (url.includes('/busca')) {
            return;
        }

        setSearchValue('');
    };

    const sendSearch = () => {
        const query = { q: searchValue };

        if (router.asPath.includes('/busca')) {
            router.push({ pathname: router.pathname, query });

            setTimeout(() => {
                router.reload();
            }, 100);

        } else {
            router.push({ pathname: '/busca', query });
        }
    }

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
                    value={searchValue}
                    onChange={setSearchValue}
                    onSend={sendSearch}
                />
            </nav>
        </>
    )
}

MenuDesktop.defaultProps = {
    textColor: 'black',
};
