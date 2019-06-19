import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state = {
    transactions : [],
    search: ''
  }
  
  getAllTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  componentDidMount(){
    this.getAllTransactions()
  }

  handleChange = (event) => {
    // debugger
    this.setState({
      search : event.target.value
    })
   
  }

  render() {

    return (
      <div>
        <Search onSearchChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions.filter(transaction => transaction.description.includes(this.state.search))} />
      </div>
    )
  }
}

export default AccountContainer
