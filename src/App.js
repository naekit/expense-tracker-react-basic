import ExpenseItem from "./components/ExpenseItem"

function App() {
	const expenses = [
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2022, 2, 12),
		},
		{ id: "e3", title: "Rent", amount: 1200, date: new Date(2022, 10, 12) },
		{
			id: "e4",
			title: "Gold Tooth",
			amount: 200,
			date: new Date(2022, 11, 2),
		},
		{
			id: "e5",
			title: "Cat Food",
			amount: 40.99,
			date: new Date(2023, 0, 6),
		},
	]

	return (
		<div>
			<h2>Let's get started!</h2>
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
		</div>
	)
}

export default App
