import styles from './cipher.module.scss'

export function Cipher(props: {
    cipher: string | TrustedHTML;
    fontSize: number;
}) {
    const style = {
        fontSize: `${props.fontSize}px`
    };

    return (
        <pre
            className={styles.cipher}
            style={style}
            dangerouslySetInnerHTML={{__html: props.cipher}} />
    )
}
