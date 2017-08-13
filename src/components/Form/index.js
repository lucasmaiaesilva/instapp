import React from 'react'

const Form = props => (
  <form onSubmit={props.handleSubmit} className="header__handler__form">
    <input type="text" className="header__handler__input" />
    <button type="submit" className="header__handler__submit">
      +
    </button>
  </form>
)

export default Form
