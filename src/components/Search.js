import React from 'react'

const Search = (props) => {
  console.log(props.searchTerm);
  return (
    <div className="ui huge fluid icon input">
      <input
        value={props.searchTerm}
        onChange={props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
