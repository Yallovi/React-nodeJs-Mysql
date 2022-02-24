import React from 'react'
import './modal.css'

const Modal = ({activeModal, setActiveModal, children}) => {
  return (
    <div className={activeModal? "modal active": "modal"} onClick={()=> setActiveModal(false)}>
        <div className={activeModal? "modal__content active": "modal__content"} onClick ={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal