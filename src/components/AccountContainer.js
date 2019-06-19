import React, { useState, useEffect } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

function AccountContainer () {

  const [transactions, settransactions] = useState([])
  const [filter, setfilter] = useState("")

  useEffect(() => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(transactions =>
      settransactions(transactions)
    })
  }, [])



  const = () => handleChange(input) {
    setfilter(input)
  }


    const transactionsToShow = this.state.transactions.filter( (transaction => transaction.category.includes(this.state.filter) || transaction.description.includes(this.state.filter)) )

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transactionsToShow} />
      </div>
    )
  }


export default AccountContainer
