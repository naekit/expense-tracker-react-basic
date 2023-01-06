import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = ({ setExpense }) => {
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={setExpense} />
		</div>
	)
}

export default NewExpense
