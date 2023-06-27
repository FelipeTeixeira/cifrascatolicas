import Image from 'next/image'
import styles from './advertising.module.scss'
import { Tag } from '@components/tag/tag'
import Anuncio from '@public/teste/anuncio.png'
import { Container } from '@components/container/container';
import { Section } from '@components/section/section';

export function AdvertisingSection(props: {
    hasPadding: boolean;
    style: string;
}) {
    return (
        <Section style={`
            ${props.hasPadding ? '' : styles.removePadding}
            ${props.style}
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
    style: '',
};
