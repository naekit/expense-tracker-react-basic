import { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ expenses }) => {
	const [filter, setFilter] = useState("2022")
	const filterDate = (filterDate) => {
		console.log(filterDate)
		setFilter(filterDate)
	}

	return (
		<Card className="expenses">
			<ExpensesFilter originalDate={filter} filterDate={filterDate} />
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
		</Card>
	)
}

export default Expenses
