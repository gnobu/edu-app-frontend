import { useEffect, useRef } from "react"

const Modal = ({ isVisible, onClose, children }: {
    isVisible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    children: JSX.Element, onClose?: React.ReactEventHandler<HTMLDialogElement>
}) => {

    const modal = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if (isVisible) {
            modal.current?.showModal()
        }

        return () => {
            modal.current?.close()
        }
    }, [isVisible])


    return (
        <dialog ref={modal} className="modal pos-rel"
            onClose={onClose}>
            <button className="small modal-close ghost col-white abs-top-r"
                onClick={() => { modal.current?.close() }}>
                close
            </button>
            {children}
        </dialog>
    )
}

export default Modal