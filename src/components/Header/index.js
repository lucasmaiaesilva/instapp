import React from 'react'
import Logo from '../Logo'
import HeaderHandler from '../HeaderHandler'

const Header = props => (
  <header className="header">
    <Logo />
    <HeaderHandler
      closeHash={props.closeHash}
      clickHash={props.clickHash}
      handleSubmit={props.handleSubmit}
      handleChange={props.handleChange}
      hashes={props.hashes}
      inputValue={props.inputValue}
    />
  </header>
)

export default Header
