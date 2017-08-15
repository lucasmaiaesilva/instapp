import React, { Component } from 'react'

import Hash from './Hash'
import Header from './Header'
import Content from './Content'
import result from '../data'

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: 'snow',
      hashes: ['snow', 'findChuckNorris'],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.closeHash = this.closeHash.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    const newArr = this.state.hashes.push(this.state.inputValue)
    this.setState({ inputValue: '' })
  }
  handleChange (e) {
    this.setState({ inputValue: e.target.value })
  }
  closeHash (e) {
    let arrHashes = this.state.hashes
    arrHashes.splice(e.target.id, 1)
    this.setState({ hashes: arrHashes })
  }
  render () {
    // console.log(result.data.map((item) => item.images.standard_resolution.url))
    return (
      <div className="instapp">
        <Header
          closeHash={this.closeHash}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          hashes={this.state.hashes}
          inputValue={this.state.inputValue}
        />
        <Content />
      </div>
    )
  }
}

export default App
