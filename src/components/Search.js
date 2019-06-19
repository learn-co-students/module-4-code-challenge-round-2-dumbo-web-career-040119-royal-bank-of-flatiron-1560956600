import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input onChange={props.handleChange}
        type="text"
        value={props.searchFilter}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
