import React from 'react'
import Logo from '../Logo'
import HeaderHandler from '../HeaderHandler'

const Header = props => (
  <header className="header">
    <Logo />
    <HeaderHandler
      closeHash={props.closeHash}
      handleSubmit={props.handleSubmit}
      hashes={props.hashes}
    />
  </header>
)

export default Header
