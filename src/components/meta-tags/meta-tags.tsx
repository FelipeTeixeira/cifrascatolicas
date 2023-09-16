import Head from 'next/head';
import { usePathname } from 'next/navigation'

export function MetaTags(props: {
    title: string;
    description: string;
}) {
    const { title, description } = props;
    const pathname = usePathname();

    return (
        <Head>
            <MetaTags />

            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <meta property="og:type" content="website" />
        </Head>
    )
}

MetaTags.defaultProps = {
    title: 'Cifras Católicas: Todas as músicas católicas reunidas para você tocar!',
    description: 'Todas as músicas católicas reunidas para você tocar!'
};
