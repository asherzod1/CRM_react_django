import React from 'react';
import {ProgressBar} from "react-bootstrap";

function SimpleProgress(props) {
    return (
        <div className='simple-progress'>
            <h3>Holati bo'yicha analiz</h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Guruhga qo’shildi</h4>
                            <h4>60%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={60} className='item-progress'/>
                    </div>
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Ketib qoldi</h4>
                            <h4>1%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={1} className='item-progress'/>
                    </div>
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Ko’tarmadi</h4>
                            <h4>1%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={1} className='item-progress'/>
                    </div>
                </div>
                <div className="col-md-3 offset-1">
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>O'ylab ko'radi</h4>
                            <h4>60%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={60} className='item-progress'/>
                    </div>
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Probniga keladi</h4>
                            <h4>1%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={1} className='item-progress'/>
                    </div>
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Rad qildi</h4>
                            <h4>1%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={1} className='item-progress'/>
                    </div>
                </div>
                <div className="col-md-3 offset-1">
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Raqam xato</h4>
                            <h4>60%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={60} className='item-progress'/>
                    </div>
                    <div className="simple-progress__item">
                        <div className='d-flex justify-content-between'>
                            <h4>Tel qilish kerak</h4>
                            <h4>1%</h4>
                        </div>
                        <ProgressBar color={'#fff'} now={1} className='item-progress'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleProgress;