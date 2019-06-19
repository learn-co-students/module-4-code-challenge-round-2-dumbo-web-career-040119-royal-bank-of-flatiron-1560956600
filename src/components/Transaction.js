import React from 'react'

export default class Transaction extends React.Component {
  
  render() { 
    return (
    <tr>
      <td>{this.props.transaction.posted_at}</td>
      <td>{this.props.transaction.description}</td>
      <td>{this.props.transaction.category}</td>
      <td>{this.props.transaction.amount}</td>
    </tr>
  )
}
}
