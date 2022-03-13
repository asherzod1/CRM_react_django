import React, {useState} from 'react';
import Layout from "../layout/Layout";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

function SchedulePage(props) {
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState('1');
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    return (
        <div>
            <Layout>
                <div className="page-header">
                    <div className="container">
                        <div className="title">
                            Dars jadvali
                        </div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '1'})}
                                    onClick={() => {
                                        toggle('1');
                                    }}
                                >
                                    <div className="circle">
                                        Juft kunlari
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '2'})}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    <div className="circle">
                                        Toq kunlari
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '3'})}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    <div className="circle">

                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '4'})}
                                    onClick={() => {
                                        toggle('4');
                                    }}
                                >
                                    <div className="circle">

                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '5'})}
                                    onClick={() => {
                                        toggle('5');
                                    }}
                                >
                                    <div className="circle">

                                    </div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className="tab-body">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <div className="tab-detail">
                                        <div className="check-item">
                                            <div className="sec">
                                                <input type="checkbox"/>
                                                <div className="title-check">
                                                    4 ta tanlangan
                                                </div>
                                            </div>
                                            <div className="sec-1">
                                                <img src="/imga/delet.png" alt=""/>
                                                <div className="title">
                                                    O'chirish
                                                </div>
                                            </div>
                                            <div className="sec-2">
                                                <img src="/imga/plus.png" alt=""/>
                                                <div className="title">
                                                    Qo'shish
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-item-sec">
                                            <div className="sec-3">
                                                <img src="/imga/cal.png" alt=""/>
                                                <div className="title">
                                                    11-08-22
                                                </div>
                                            </div>
                                            <div className="text">
                                                To
                                            </div>
                                            <div className="sec-3">
                                                <img src="/imga/cal.png" alt=""/>
                                                <div className="title">
                                                    11-08-22
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-sec-body">
                                        <div className="sec-header">
                                            <div className="item-check">

                                            </div>
                                            <div className="item-he">
                                                Dars soati
                                            </div>
                                            <div className="item-he">
                                                Fani
                                            </div>
                                            <div className="item-he">
                                                Ustozi
                                            </div>
                                            <div className="item-he">
                                                Probni
                                            </div>
                                            <div className="item-he">
                                                O'quvchilar soni
                                            </div>
                                            <div className="item-he">
                                                Dars soni
                                            </div>
                                            <div className="item-check">

                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item">
                                                07:00-09:00
                                            </div>
                                            <div className="item">
                                                Biologiya
                                            </div>
                                            <div className="item">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item">
                                                40ta
                                            </div>
                                            <div className="item">
                                                10tadan 8ta keldi
                                            </div>
                                            <div className="item">
                                                10ta haftasiga
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item">
                                                07:00-09:00
                                            </div>
                                            <div className="item">
                                                Biologiya
                                            </div>
                                            <div className="item">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item">
                                                40ta
                                            </div>
                                            <div className="item">
                                                10tadan 8ta keldi
                                            </div>
                                            <div className="item">
                                                10ta haftasiga
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item">
                                                07:00-09:00
                                            </div>
                                            <div className="item">
                                                Biologiya
                                            </div>
                                            <div className="item">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item">
                                                40ta
                                            </div>
                                            <div className="item">
                                                10tadan 8ta keldi
                                            </div>
                                            <div className="item">
                                                10ta haftasiga
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item">
                                                07:00-09:00
                                            </div>
                                            <div className="item">
                                                Biologiya
                                            </div>
                                            <div className="item">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item">
                                                40ta
                                            </div>
                                            <div className="item">
                                                10tadan 8ta keldi
                                            </div>
                                            <div className="item">
                                                10ta haftasiga
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item">
                                                07:00-09:00
                                            </div>
                                            <div className="item">
                                                Biologiya
                                            </div>
                                            <div className="item">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item">
                                                40ta
                                            </div>
                                            <div className="item">
                                                10tadan 8ta keldi
                                            </div>
                                            <div className="item">
                                                10ta haftasiga
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>

                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="tab-section">
                                        Android Devoloper
                                    </div>
                                    <div className="tab-ul">
                                        <ul>
                                            <li> Shu sohada 2 yillik tajriba</li>
                                            <li> Shu sohada 2 yillik tajriba</li>
                                            <li> Shu sohada 2 yillik tajriba</li>
                                            <li> Shu sohada 2 yillik tajriba</li>
                                            <li> Redux / Mobx / RxJS arxitekturasini ishlash tajribasi va
                                                tushunchasi (kamida 2 yil)
                                            </li>
                                            <li> Shu sohada 2 yillik tajriba</li>
                                        </ul>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>

                    </div>
                </div>

            </Layout>
        </div>
    );
}

export default SchedulePage;