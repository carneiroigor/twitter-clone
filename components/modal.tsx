import { useCallback } from 'react';

interface modalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

export const Modal: React.FC<modalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,

}) => {

    const handleClose = useCallback (() => {
        if (disabled) {
            return;
        }

        onClose();

    }, [disabled, onClose]);

    const handleSubmit = useCallback (() => {
        if (disabled) {
            return;
        }

        onSubmit();

    }, [disabled, onSubmit]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixes
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800
                bg-opacity-70
            ">

            </div>
        </>
    )
}