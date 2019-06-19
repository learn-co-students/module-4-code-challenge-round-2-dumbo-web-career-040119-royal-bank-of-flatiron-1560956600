import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.listOfTransactions.map(transaction => transaction.posted_at)}</td>
      <td>{props.listOfTransactions.map(transaction => transaction.description)}</td>
      <td>{props.listOfTransactions.map(transaction => transaction.category)}</td>
      <td>{props.listOfTransactions.map(transaction => transaction.amount)}</td>
    </tr>
  )
}

export default Transaction

// {props.accountTransactions.map(transaction => transaction.posted_at)} 
        
//         {props.accountTransactions.map(transaction => transaction.description)} 

//         {props.accountTransactions.map(transaction => transaction.category)} 


//         {props.accountTransactions.map(transaction => transaction.amount)} 
