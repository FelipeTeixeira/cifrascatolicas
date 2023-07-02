import Link from 'next/link';
import styles from './share-modal.module.scss';
import { FacebookIcon } from '@components/icons/facebook-icon';
import { LinkedinIcon } from '@components/icons/linkedin-icon';
import { WhatsAppIcon } from '@components/icons/whatsapp-icon';

export function ShareModal(props: {
    description: string;
    url: string;
}) {
    // https://github.com/bradvin/social-share-urls
    const generateWhatsappLink = () => {
        return `https://api.whatsapp.com/send?text=${props.description}%20${props.url}`;
    }

    const generateLinkedinLink = () => {
        return `https://www.linkedin.com/sharing/share-offsite/?url=${props.url}`;
    }

    const generateFacebookLink = () => {
        return `https://www.facebook.com/sharer.php?u=${props.url}`;
    }

    return (
        <div className={styles.share}>
            <Link href={generateWhatsappLink()} rel="noreferrer" target="_blank" className={styles.social}>
                <span className={`${styles.icon} ${styles.iconWhatsapp}`}>
                    <WhatsAppIcon />
                </span>
                WhatsApp
            </Link>
            <Link href={generateFacebookLink()} rel="noreferrer" target="_blank" className={styles.social}>
                <span className={`${styles.icon} ${styles.iconFacebook}`}>
                    <FacebookIcon />
                </span>
                Facebook
            </Link>
            <Link href={generateLinkedinLink()} rel="noreferrer" target="_blank" className={styles.social}>
                <span className={`${styles.icon} ${styles.iconLinkedin}`}>
                    <LinkedinIcon />
                </span>
                Linkedin
            </Link>
        </div>
    )
}

ShareModal.defaultProps = {
};
