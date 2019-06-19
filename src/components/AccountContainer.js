import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
  }

  state = {
    allTransactions: [],
    searchTerm: "",
    filteredTransactions: []
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(allTransactions => {
      this.setState({
        allTransactions: allTransactions
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filterTransactions()
  }


  filterTransactions = () => {
    let filteredTransactions = this.state.allTransactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm) || transaction.category.includes(this.state.searchTerm.toLowerCase())
    })
    this.setState({
      // allTransactions: filteredTransactions,
      filteredTransactions: filteredTransactions
    })
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.allTransactions} filteredTransactions={this.state.filteredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
