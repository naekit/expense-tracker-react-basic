import { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ expenses }) => {
	const [filter, setFilter] = useState("2022")
	const filterDate = (filterDate) => {
		setFilter(filterDate)
	}

	const filteredExpenses = expenses.filter(
		(expense) => expense.date.getFullYear() === +filter
	)

	return (
		<Card className="expenses">
			<ExpensesFilter originalDate={filter} filterDate={filterDate} />
			{filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	)
}

export default Expenses
