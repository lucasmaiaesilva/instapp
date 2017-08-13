import React from 'react'

import Form from '../Form'
import Hash from '../Hash'

const HashesResult = (closeHash, hashes) => (
  hashes.map((hash, index) => <Hash key={hash+index} closeHash={closeHash} id={index} text={hash} />)
)

const HeaderHandler = props => (
  <div className="header__handler">
    <div className="header__handler__text">
      insert your hashtag here
    </div>
    <Form handleSubmit={props.handleSubmit} />
    <div className="header__handler__hashes">
      {HashesResult(props.closeHash, props.hashes)}
    </div>
  </div>
)

export default HeaderHandler
