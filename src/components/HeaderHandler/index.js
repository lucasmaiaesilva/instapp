import React from 'react'

import Form from '../Form'
import Hash from '../Hash'

const HashesResult = (closeHash, hashes, clickHash) => (
  hashes.map((hash, index) => <Hash key={hash + index} clickHash={clickHash} closeHash={closeHash} id={index} text={hash} />)
)

const HeaderHandler = props => (
  <div className="header__handler">
    <div className="header__handler__text">
      insert your hashtag here
    </div>
    <Form
      handleSubmit={props.handleSubmit}
      handleChange={props.handleChange}
      inputValue={props.inputValue}
      />
    <div className="header__handler__hashes">
      {HashesResult(props.closeHash, props.hashes, props.clickHash)}
    </div>
  </div>
)

export default HeaderHandler
