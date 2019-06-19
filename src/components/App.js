import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  state={
    transactions: [], 
    search: ""
  }

  handleSearch = (event) =>{
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount(){
    let url = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(url)
    .then(resp=>resp.json())
    .then(transaction => {
      this.setState({
        transactions: transaction
      })
    })
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        
      <AccountContainer 
        search={this.state.search}
        handleSearch={this.handleSearch}
        transactions={this.state.transactions.filter(transaction => {
          return transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase())
        })}/>
      </div>
    )
  }
}

export default App
