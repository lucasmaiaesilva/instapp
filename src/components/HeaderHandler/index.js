import React from 'react'

import Form from '../Form'
import Hash from '../Hash'

const HashesResult = (hashes) => (
  hashes.map((hash) => <Hash text={hash} />)
)

const HeaderHandler = props => (
  <div className="header__handler">
    <div className="header__handler__text">
      insert your hashtag here
    </div>
    <Form handleSubmit={props.handleSubmit} />
    <div className="header__handler__hashes">
      {HashesResult(props.hashes)}
    </div>
  </div>
)

export default HeaderHandler
