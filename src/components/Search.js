import React from 'react'

const Search = (props) => {

  const handleInput =(event) => {
    props.search(event.target.value)
  }
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={handleInput}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
