import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const Chart = ({ sickTitle, meetTitle, patientTitle, sickStat, meetStat, patientStat }) => {
    const labels = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            }
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: sickTitle,
                data: sickStat,
                backgroundColor: "#1e1d3d"
            },
            {
                label: meetTitle,
                data: meetStat,
                backgroundColor: "#ea5353"
            },
            {
                label: patientTitle,
                data: patientStat,
                backgroundColor: "#5a2483"
            }
        ]
    };
    return <Bar data={data} options={options} />;
};

export default Chart;