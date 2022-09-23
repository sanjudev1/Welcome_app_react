// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: true}

  onStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <div>{this.onStatus}</div>
        {status && (
          <button className="button" type="button" onClick={this.onStatus}>
            Subscribe
          </button>
        )}
        {!status && (
          <button className="button" type="button" onClick={this.onStatus}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
