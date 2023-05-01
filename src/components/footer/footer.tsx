import Image from 'next/image'
import styles from './footer.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import Link from 'next/link';
import { Container } from '@components/container/container'

export function Footer() {
    const menus = [
        { name: 'Repertório', url: 'repertorio' },
        { name: 'Artistas', url: 'artistas' },
        { name: 'Mais acessadas', url: 'musicas-mais-acessadas' }
    ];

    return (
        <footer className={styles.footer}>
            <Container flexDirection='row'>
                <Link href="/">
                    <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
                </Link>

                <div className={styles.menus}>
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            href={menu.url}
                            className={styles.link}>
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </Container>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} Cifras Católicas. Todos os direitos Reservados.
            </p>
        </footer>
    )
}
