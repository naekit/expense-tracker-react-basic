import { useState } from "react"
import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart"
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
			<ExpensesChart filteredExpenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	)
}

export default Expenses
