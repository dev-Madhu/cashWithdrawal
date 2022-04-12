// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, updateBalance} = props
  const {value} = item

  const onUpdateButton = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button className="button" type="button" onClick={onUpdateButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
