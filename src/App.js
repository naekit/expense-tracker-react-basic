import Expenses from "./components/Expenses/Expenses"

const App = () => {
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
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App
