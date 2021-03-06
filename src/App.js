import React from "react";
import axios from "axios"
import "./index.css"


class App extends React.Component {
  state = {
    advice : ""
  }
  componentDidMount() {
      this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
          const { advice } = response.data.slip
          
          this.setState({
            advice : advice
          })
      })
      .catch((error) => {
          console.log(error)
      })
  }
  render() {
    return (
    <div className = "App">
        <div className = "card">
        <h1 className = "header">{this.state.advice}</h1>
        <button className = "button" onClick = {this.fetchAdvice}>
          <span>Give me an Advice!</span>
        </button>
        </div>
    </div>
    )
  }
}

export default App;