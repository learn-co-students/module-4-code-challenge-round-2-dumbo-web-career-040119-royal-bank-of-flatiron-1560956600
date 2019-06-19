import React, { Component } from 'react'
// import Search from './Search'

class Search extends Component {

  state = {
    description: ""
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    this.props.handleChange(event.target.value)
  }



render() {

  return (

      <div className="ui huge fluid icon input">

        <input
          type="text"
          name="description"
          onChange={this.handleInput}
          placeholder={"Search your Recent Transactions"}
        />

        <i className="circular search link icon"></i>

      </div>
    )
  }
}

export default Search


// const Search = (props) => {
