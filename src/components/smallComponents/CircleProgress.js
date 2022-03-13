import React from 'react';
import { CircularProgressbarWithChildren     } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function CircleProgress(props) {
    let value = 60
    return (
        <div className='circle-chart'>
            <div className='circle-chart__left'>
                <h3>
                    2022 yil
                </h3>
                <p>
                    Odam soni ko’payishi
                </p>
                <div className="circle-chart__left__bottom">
                    <h2>
                        4000
                    </h2>
                    <div>
                        <img src="imga/progress_s.png" alt=""/>
                        <span style={{background:'#55B963'}}>
                            7 %
                        </span>
                    </div>
                </div>
            </div>
            <div className='circle-chart__right'>
                <div style={{width:'102px', height:'102px'}}>
                    <CircularProgressbarWithChildren
                        value={value}
                        strokeWidth={6}
                        styles={{
                            path: {
                                // Path color
                                stroke: `rgba(85, 185, 99, 1)`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                // Rotate the path
                                transformOrigin: 'center center',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                                // Trail color
                                stroke: 'rgba(85, 185, 99, 0.3)',
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Rotate the trail
                                transformOrigin: 'center center',
                            },
                            // Customize the text
                            text: {
                                // Text color
                                fill: '#f88',
                                // Text size
                                fontSize: '16px',
                            },
                            // Customize background - only used when the `background` prop is true
                            background: {
                                fill: '#3e98c7',
                            },
                        }}
                        >
                        <h3 style={{fontSize:'22px', fontFamily:'Inter', lineHeight:'22px', fontWeight:'600'}}>60%</h3>
                        <div style={{ fontSize: '10px', marginTop: '-5px',fontFamily:'Inter' }}>
                            Yangi kelganlar
                        </div>
                    </CircularProgressbarWithChildren >
                </div>
            </div>

        </div>
    );
}

export default CircleProgress;