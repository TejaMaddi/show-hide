// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstAction = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  onSecondAction = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="h1">Show/Hide</h1>
        <div className="card">
          <div className="card1">
            <button onClick={this.onFirstAction} className="btn1" type="button">
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="Inner">
                <p className="p1">Joe</p>
              </div>
            ) : null}
          </div>
          <div className="card1">
            <button
              onClick={this.onSecondAction}
              className="btn1 btn2"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="Inner Inner1">
                <p className="p1">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
