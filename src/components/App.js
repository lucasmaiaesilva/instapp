import React, { Component } from 'react'

import Hash from './Hash'
import Header from './Header'
import Content from './Content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      hashes: ['GaloDoido', 'LoveGolden'],
      result: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeHash = this.closeHash.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log('submited')
  }
  closeHash (e) {
    console.log(e.target.id)
  }
  render () {
    return (
      <div className="instapp">
        <Header
          closeHash={this.closeHash}
          handleSubmit={this.handleSubmit}
          hashes={this.state.hashes}
        />
        <Content />
      </div>
    )
  }
}

export default App
