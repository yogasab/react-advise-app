import React, { Component } from 'react'
import Axios from 'axios';
import './App.css'

class App extends Component {
  state = {
    advice: ''
  }

  componentDidMount(){
    this.fetchAdvise();
  }

  fetchAdvise = () => {
    Axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        this.setState({advice: advice})
      })
      .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvise}>
            <span>GIVE ME ADVICE!!!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;