import { useState } from "react"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

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
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	)
}

export default Expenses
