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

const data = {
    labels: ["Du", "Se", "Chor", "Pay", "Juma", "Shan"],
    datasets: [
        {
            label: "Telegram",
            data: [1, 2, 7, 8, 10],
            backgroundColor: 'rgba(141, 124, 193, 1)',
            barPercentage:1,
            categoryPercentage:0.3,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: 'bottom',

        },
        {
            label: "Instagram",
            data: [1, 2, 4, 8, 20],
            backgroundColor: 'rgba(255, 175, 175, 1)',
            barPercentage:1,
            categoryPercentage:0.3,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: 'bottom',
        }
    ]
};

const options = {
    responsive: true,
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                    drawBorder: false,
                    borderDash: [1, 1],
                    zeroLineColor: "blue",

                },
                categoryPercentage: 0,
                barPercentage: 0,
                ticks: {
                    beginAtZero: true
                }
            }
        ],
        yAxes: [
            {
                display: false,
                gridLines: {
                    display: false,
                    zeroLineColor: "transparent"
                },
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};
function VerticalChartt(props) {
    return (
        <div className="vertical-chart">
            <div className="header">
                <h3>Kuzatuvchilar</h3>
                <select name="k_hafta" id="k_hafta" className='select-hafta'>
                    <option value="1">shu hafta</option>
                    <option value="2">keyingi hafta</option>
                    <option value="3">o'tgan hafta</option>
                </select>
            </div>
            <div>
                <Bar className='v-chart' data={data} options={options} />
            </div>
        </div>
    );
}

export default VerticalChartt;