import React from 'react'

import Form from '../Form'
import Hash from '../Hash'

const HeaderHandler = () => (
  <div className="header__handler">
    <div className="header__handler__text">
      insert your hashtag here
    </div>
    <Form />
    <div className="header__handler__hashes">
      <Hash text="LoveGolden" />
    </div>
  </div>
)

export default HeaderHandler
