import styles from './cipher.module.scss'

export function Cipher(props: {
    cipher: string | TrustedHTML;
}) {
    return (
        <pre
            className={styles.cipher}
            dangerouslySetInnerHTML={{__html: props.cipher}} />
    )
}
