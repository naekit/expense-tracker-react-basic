import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = ({ setExpense, toggle, setToggle }) => {
	return (
		<div className="new-expense">
			{!toggle ? (
				<button onClick={() => setToggle(!toggle)}>
					Add New Expense
				</button>
			) : (
				<ExpenseForm
					setToggle={setToggle}
					onSaveExpenseData={setExpense}
				/>
			)}
		</div>
	)
}

export default NewExpense
