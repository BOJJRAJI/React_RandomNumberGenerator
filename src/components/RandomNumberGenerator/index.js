import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
