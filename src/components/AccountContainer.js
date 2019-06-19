import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state={
      purchases: [],
      search: ""
    }

  }
    componentDidMount() {
      fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          purchases: data
        })
      })
    }

  handleChange(input) {
    console.log(input);
    this.setState({
      search: input
    })
  }

  render() {
    console.log(this.state.search);
    return (
      <div>
        <Search search={this.handleChange}/>
        <TransactionsList items={this.state.purchases.filter((item) =>  item.description.toLowerCase().includes(this.state.search.toLowerCase()))}/>
      </div>
    )
  }
}

export default AccountContainer
