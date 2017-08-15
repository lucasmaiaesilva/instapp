import React from 'react'
import PropTypes from 'prop-types'

const Form = props => (
  <form onSubmit={props.handleSubmit} className="header__handler__form">
    <input
      onChange={props.handleChange}
      type="text"
      className="header__handler__input"
      value={props.inputValue}
      />
    <button type="submit" className="header__handler__submit">
      +
    </button>
  </form>
)

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
}

export default Form
