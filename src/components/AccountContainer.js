import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: transactions,
      filter: ""
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


  filterDescription = (description) => {
    this.setState({
      filter: description
    })
  }


  handleChange(event) {
    // your code here
    // this.state.transactions.map(transaction => <TransactionsList /> )

  }


  


  render() {

    console.log(this.state.transactions);

    return (
      <div>
        <Search filter={this.state.filter} handleChange={this.handleChange()}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
