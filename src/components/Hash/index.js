import React from 'react'

const Hash = props => (
  <span className="header__handler__hashes--hash">
    <div className="close">x</div>
    <div className="text">#{props.text}</div>
  </span>
)

export default Hash
