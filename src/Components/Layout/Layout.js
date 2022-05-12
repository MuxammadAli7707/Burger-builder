import React from 'react'
import Aux from '../../hoc/Auxs'
import './Layout.css'

function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, SideBar, Backdrop</div>
      <main className='Content'>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout
