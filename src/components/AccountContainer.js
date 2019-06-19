import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {


    state = {
      transactions: [],
      userInput: '',
    }



  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(response => response.json())
      .then(transactions => this.setState({
        transactions: transactions
      }))
  }


  handleChange(userInput) {
    this.setState({
      userInput: userInput
    })
  }

  filter = () => {
    return this.state.transactions.filter(transaction => {
      debugger
      return transaction.category.toLowerCase().includes(this.state.userInput.toLowerCase())
    })
  }



  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.filter()}/>
      </div>
    )
  }
}

export default AccountContainer
