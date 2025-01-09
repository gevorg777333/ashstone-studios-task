import React, {Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState} from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import styles from './styles.module.css';
import closeIcon from '../../../assets/close.svg'

interface IModal {
    isModalOpen: boolean;
    closeModal: Dispatch<SetStateAction<boolean>>;
    children: ReactNode
}
function Modal ({ isModalOpen, closeModal, children }: IModal){
    const modalRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);


    useClickOutside(modalRef, closeModal);

    return (
        <>
            {isModalOpen &&
                <div className={styles.wrapper}>
                    <div ref={modalRef} className={styles.body}>
                        <div className={styles.closeWrapper}>
                            <img src={closeIcon} alt='close-icon' onClick={() => closeModal(false)}/>
                        </div>
                        { children }
                    </div>
                </div>
            }
        </>
    );
}

export { Modal };
