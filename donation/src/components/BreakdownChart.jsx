import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getBreakdown } from "../lib/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export function BreakdownChart() {
	// Placeholder chart that will be displayed while data is loading
	const placeholderChartData = {
		labels: [
			'loading...',
		],
		datasets: [
			{ 
				data: [1],
			}
		]
	}

	// Chart customisation options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: "bottom"
		  },
		},
	};

	// Creating chart data with default styling
    const [chartData, setChartData] = useState(placeholderChartData);

	// Error flag
	const [error, setError] = useState(false);

	function populateWithData() {
		getBreakdown()
			.then(({ total, disbursed, balance }) => {
				// Format the data correctly
				const chartData = {
					labels: [
						`Disbursed NGN ${disbursed}`,
						`Balance NGN ${balance}`,
						`Total NGN ${total}`
					],
					datasets: [
						{
							data: [disbursed, balance, 0],
							backgroundColor: [
								'rgb(243, 114, 44)', 
								'rgb(45, 156, 219)',
								'rgb(0, 0, 0)'
							]
						}
					]
				} 
				setChartData(chartData);
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			})
	}

	useEffect(populateWithData, []);

	if (error) {
		return <div>Something went wrong</div>;
	}

	else {
		return ( 
			<div className="mx-auto w-64 py-6">
				<Doughnut data={chartData} options={options}/>
			</div>
		)
	}
}