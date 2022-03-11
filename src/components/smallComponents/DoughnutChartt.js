import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../style/smallComponents.scss'
ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChartt(props) {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        let info_datas = [props.info.map((item)=> {
            return item.quantity
        })]
        setDatas(...info_datas)
    },[])
    const info = props.info
    let quantity = props.info.reduce((total,item)=>{
        return total+item.quantity
    },0)

    console.log(datas)
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: datas,
                backgroundColor: [
                    'rgba(85, 185, 99, 1)',
                    'rgba(141, 124, 193, 1)',
                    'rgba(204, 64, 37, 1)',
                    'rgba(255, 202, 38, 1)',
                    'rgba(255, 175, 175, 1)',
                    'rgba(57, 72, 93, 1)',
                    'rgba(196, 196, 196, 1)'
                ],
                borderColor: [
                    'rgba(85, 185, 99, 1)',
                    'rgba(141, 124, 193, 1)',
                    'rgba(204, 64, 37, 1)',
                    'rgba(255, 202, 38, 1)',
                    'rgba(255, 175, 175, 1)',
                    'rgba(57, 72, 93, 1)',
                    'rgba(196, 196, 196, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
    const plugins = [{
        beforeDraw: function(chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = `${quantity} ta`,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2 ;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
    return (
        <div>
            <div className="chart">
                <div className="chart__header">
                    <div className="chart__item">
                        <Doughnut data={data} plugins={plugins}/>
                    </div>
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div className="chart__info">
                    {info.map((item,index) => {
                        return (
                            <div key={index} className="d-flex justify-content-between chart__info__item" style={{color:`${data.datasets[0].backgroundColor[index]}`}}>
                                <p>
                                    {item.title}
                                </p>
                                <p>
                                    {item.quantity}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DoughnutChartt;