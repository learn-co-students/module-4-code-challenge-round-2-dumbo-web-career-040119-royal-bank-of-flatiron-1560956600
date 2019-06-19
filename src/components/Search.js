import React from 'react'

export default class Search extends React.Component{

  render(){

    

    return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={event => this.props.onSearchChange(event)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
}

