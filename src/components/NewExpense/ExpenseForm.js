import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = ({ onSaveExpenseData, setToggle }) => {
	const [formData, setForm] = useState({
		title: "",
		amount: "",
		date: "",
	})

	const changeHandler = (event) => {
		const name = event.target.name
		const value = event.target.value
		setForm((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			...formData,
			date: new Date(formData.date),
			amount: +formData.amount,
		}
		onSaveExpenseData(expenseData)
		console.log(expenseData)
		setForm({ title: "", amount: "", date: "" })
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={changeHandler}
						name="title"
						value={formData.title}
						id=""
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						onChange={changeHandler}
						min="0.01"
						step="0.01"
						name="amount"
						value={formData.amount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2024-12-31"
						onChange={changeHandler}
						name="date"
						value={formData.date}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="reset" onClick={() => setToggle(false)}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
