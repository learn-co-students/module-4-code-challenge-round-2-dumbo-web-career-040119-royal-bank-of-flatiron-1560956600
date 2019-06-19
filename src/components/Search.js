import React, { Component } from 'react';

class Search extends Component {



  handleChange = (event) => {
    this.props.handleSearch(event.target.value)
  }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder={"Search your Recent Transactions"}
          />
        <i className="circular search link icon"></i>
      </div>
    );
  }

}

export default Search;




//
// return (
//   <div className="ui huge fluid icon input">
//     <input
//
//       type="text"
//       placeholder={"Search your Recent Transactions"}
//       />
//     <i className="circular search link icon"></i>
//   </div>
// )
// }
