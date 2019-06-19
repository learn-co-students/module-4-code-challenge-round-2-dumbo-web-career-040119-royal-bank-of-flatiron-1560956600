import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  state = {
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  render() {
    const filteredTransactions = transactions.filter(transaction => {
      return (transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      || transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    })

    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
