import React, { Component } from 'react'

class Search extends Component {

  state = {
    userInput: '',
  }

  handleInput= (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  handleChange = () => {
    console.log("hehehehehshetnes", this.state.userInput)
    this.props.handleChange(this.state.userInput)
  }

  render() {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={this.handleChange}
        name="userInput"
      />
      <i className="circular search link icon"></i>
    </div>
  )
  }
}


export default Search
