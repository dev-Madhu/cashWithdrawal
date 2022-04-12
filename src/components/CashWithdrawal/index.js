// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="main-container">
        <div className="calculator-container">
          <div className="list-item">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="description">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="box-container">
            {denominationsList.map(eachVal => (
              <DenominationItem
                item={eachVal}
                key={eachVal.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
