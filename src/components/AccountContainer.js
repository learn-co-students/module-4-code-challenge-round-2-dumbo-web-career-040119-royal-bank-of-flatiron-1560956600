import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    state = {
      transactions: transactions,
      search: "",
    }

    componentDidMount(){
      fetch("https://boiling-brook-94902.herokuapp.com/transactions")
        .then(res => res.json())
        .then(data => this.setState({
          transactions: data
        }))
    }


  handleChange = (event) => {
    // your code here
    this.setState({
      search: event.target.value
    })
  }

  render() {
    console.log(this.state.search)
    return (
      <div>
        <Search search={this.state.search} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase()))} />
      </div>
    )
  }
}

export default AccountContainer
