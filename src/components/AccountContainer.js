import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // state={
  //   transactions: transactions
  // }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search 
        handleSearch={this.props.handleSearch}
        search={this.props.search}/>

        { this.props.transactions.map(transaction => {
          return  <TransactionsList
          key={transaction.id}
          transaction={transaction} />
        })}
      </div>
    )
  }
}

export default AccountContainer
