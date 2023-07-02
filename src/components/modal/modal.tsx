import { ReactNode, useEffect } from 'react'
import styles from './modal.module.scss'
import { CloseIcon } from '@components/icons/close-icon'
import { createRoot } from 'react-dom/client';
import { Section } from '@components/section/section';

export function Modal(
    props: {
        title: string,
        description: string,
        onClose: Function,
        children: ReactNode,
        style: string,
    }
) {
    const idModalContainer = 'modalContainer';
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', idModalContainer);

    if (!modalContainer()) {
        document.body.appendChild(divContainer);
    } else {
        // Exibir apenas 1 modal
        modalContainer().innerHTML = '';
    }

    const container = modalContainer().appendChild(
        document.createElement('span')
    );
    const root = createRoot(container!);

    useEffect(() => {
        const body = document.body.classList;
        root.render(template());
        body.add(styles.scrollHidden);

        return () => {
            body.remove(styles.scrollHidden);
        };
    });

    function close(): void {
        props.onClose();
        modalContainer().innerHTML = '';
        root.unmount();
    }

    function modalContainer(): HTMLElement {
        return (document.querySelector(`#${idModalContainer}`) as HTMLElement);
    }

    function template(): ReactNode {
        return (
            <>
                <div className={`${styles.modal} ${props.style ? props.style : ''}`}>
                    <button
                        type="button"
                        className={styles.buttonClose}
                        onClick={close}
                    >
                        <CloseIcon fill="#838383" height={18} width={18} />
                    </button>

                    <Section>
                        <div className={styles.body}>
                            {props.title ?
                                <h2
                                    className={`${styles.title} ${!props.description ? styles.titleMargin : ''}`}
                                    dangerouslySetInnerHTML={{ __html: props.title }} />
                                : null}

                            {props.description ?
                                <p className={styles.description}>
                                    {props.description}
                                </p> : null}

                            {props.children}
                        </div>
                    </Section>
                </div>

                <div className={styles.overlay} onClick={close}></div>
            </>
        );
    }

    return (
        <></>
    )
}

Modal.defaultProps = {
    title: '',
    description: '',
    style: ''
};
