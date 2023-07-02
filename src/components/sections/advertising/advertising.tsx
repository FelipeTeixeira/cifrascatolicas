import Image from 'next/image'
import styles from './advertising.module.scss'
import { Tag } from '@components/tag/tag'
import Anuncio from '@public/teste/anuncio.png'
import { Container } from '@components/container/container';
import { Section } from '@components/section/section';

export function AdvertisingSection(props: {
    hasPadding: boolean;
    className: string;
}) {
    return (
        <Section className={`
            ${props.hasPadding ? '' : styles.removePadding}
            ${props.className}
        `}>
            <Container>
                <Tag>
                    Publicidade
                </Tag>
                <Image src={Anuncio} alt='' className={styles.image} />
            </Container>
        </Section>
    )
}

AdvertisingSection.defaultProps = {
    hasPadding: true,
    className: '',
};
