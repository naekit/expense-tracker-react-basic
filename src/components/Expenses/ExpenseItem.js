import { useState } from "react"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = ({ title, amount, date }) => {
	const [stateTitle, setTitle] = useState(title)
	const handleClick = () => {
		setTitle("Hello")
	}

	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{stateTitle}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={handleClick}>Change Title</button>
		</Card>
	)
}

export default ExpenseItem
