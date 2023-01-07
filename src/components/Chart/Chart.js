import React from "react"
import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = ({ dataPoints }) => {
	const dataValues = dataPoints.map((point) => point.value)
	const totalMaximum = Math.max(...dataValues)

	return (
		<div className="chart">
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					max={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
