import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


class AccountContainer extends Component {

  state = {
    transactions: [],
    searchFilter: "",
  }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    componentDidMount() {
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
          this.setState({
            transactions: data
          })
      })
    }

  // handleChange = (event, { value }) => {
  //   // console.log(event.target)
  //   this.setState({
  //     searchFilter: value
  //   }, () => console.log(this.state.searchFilter))
  // }

  handleChange = (event) => {
     this.setState({
       searchFilter: event.target.value
     })
   }

   // filterChange = () => {
   //   let array = this.state.transactions
   //   let filteredlist = array.filter(list => list.description.toLowerCase().includes(this.state.searchFilter))
   //   return filteredlist
   // }

  render() {
    console.log(this.state.searchFilter)
    return (
      <div>
        <Search
         searchFilter={this.state.searchFilter}
         handleChange={this.handleChange}
         />
        <TransactionsList
         transactions={this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchFilter.toLowerCase()))}/>
      </div>
    )
  }
}

export default AccountContainer
