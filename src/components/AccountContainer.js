import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  

  state = {
    transactions : []
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions : data
      })
    })
  }

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search />
        <TransactionsList accountTransactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
