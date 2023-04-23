import styles from './bottom-sheet.module.scss'
import { CloseIcon } from '@components/icons/close-icon';
import { MouseEventHandler, ReactNode } from 'react';

export function BottomSheet(props: {
    isVisible: boolean;
    children: ReactNode[] | ReactNode;
    onClose: MouseEventHandler;
}) {
    return (
        <>
            {props.isVisible && <div className={styles.overlay}></div>}
            <div className={`${styles.bottomSheet} ${props.isVisible ? styles.isActive : ''}`}>
                <button type='button' className={styles.closeButton} onClick={props.onClose}>
                    <CloseIcon />
                </button>

                {props.children}
            </div>
        </>
    )
}
