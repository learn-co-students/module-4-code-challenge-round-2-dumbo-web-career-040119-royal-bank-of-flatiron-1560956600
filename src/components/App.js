import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

class App extends Component {

  state={
    transactions: [],
    newArr: []
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(transactions => this.setState({
      transactions: transactions
    }))
  }

  handleSearch = (searchInput) => {
    // let copyArr = [...this.state.transactions]
    let filteredValues = this.state.transactions.filter(transaction => {
      return transaction.category.toLowerCase().includes(searchInput.toLowerCase())
    })

    this.setState({
      newArr: filteredValues
    })
  }

  render() {
    // console.log(this.state.newArr);
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer handleSearch={this.handleSearch} transactions={this.state.transactions} newArr={this.state.newArr} />

      </div>
    )
  }
}

export default App
