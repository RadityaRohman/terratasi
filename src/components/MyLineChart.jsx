import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const MyLineChart = () => {
	const labels = ["2019", "2020", "2021", "2022", "2023"];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Timbulan Sampah",
				data: [27618401, 27593066, 28459222, 37571666, 19517172],
				fill: true,
				borderColor: "#82DF85",
				borderWidth: 5,
				pointRadius: 10,
				pointHoverRadius: 15,
				pointBackgroundColor: "#82DF85",
				pointBorderColor: "#1D4735",
				pointBorderWidth: 3,
				pointHoverBackgroundColor: "#1D4735",
				pointHoverBorderColor: "#82DF85",
				pointHoverBorderWidth: 3,
				tension: 0.1,
			},
		],
	};

	const options = {
    scales: {
      x: {
        grid: {
          color: 'white', 
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          color: 'white', 
        },
        beginAtZero: true,
        max: 45000000 
      }
    }
  };


	return (
		<div>
			<Line data={data} options={options} />
            <p className="font-semibold font-poppins md:text-4xl text-2xl text-center text-color-1"><u><em> Rata-rata Timbulan Sampah di Indonesia 28.151.905 </em></u> <br /> Dan masih Belum Di Kelola Dengan Baik</p>
		</div>
	);
};


export default MyLineChart;
