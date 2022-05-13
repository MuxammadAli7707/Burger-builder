import React from 'react'
import Aux from '../../../hoc/Auxs'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

function Modals(props) {
  return (
    <Aux>
      <Backdrop show={props.show} cliced={props.modalClose} />
      <div className="Modal" 
        style={{
          transition: 'all .5s ease',
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >

        {props.children}
      </div>
    </Aux>
  )
} 

export default Modals