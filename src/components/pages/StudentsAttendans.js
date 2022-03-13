import React, {useState} from 'react';
import Layout from "../layout/Layout";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

function StudentsAttendans(props) {
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
                        <div className="text-header">
                            <div className="page-title">
                                Bizda o’qiydigan talabalar davomati
                            </div>
                            <div className="addpage-button">
                                <img src="/imga/pluss.png" alt=""/>
                                <div className="center-title">
                                    Guruh qo'shish
                                </div>
                            </div>
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
                                        Guruhlarning hammasi
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
                                        Frontend 1
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
                                        Frontend 2
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
                                        Backend 1
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
                                        SMM
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '6'})}
                                    onClick={() => {
                                        toggle('6');
                                    }}
                                >
                                    <div className="circle">
                                        Web desigin
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '10'})}
                                    onClick={() => {
                                        toggle('10');
                                    }}
                                >
                                    <div className="circle">
                                        Java Backend
                                    </div>
                                </NavLink>
                            </NavItem>

                        </Nav>
                        <div className="tab-body">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <div className="tab-detail">
                                        <div className="check-item">
                                           <div className="sec-4">
                                               Fronted 1 Guruhi Dars beruvchi: Azim aka
                                           </div>
                                            <div className="sec-5">
                                                <img src="/imga/plus.png" alt=""/>
                                                <div className="title">
                                                   Keyingisini yaratish
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
                                            <div className="item-check_1">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                            <div className="item-he-header">
                                                Ism Familyasi
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>
                                            <div className="item-he-D">
                                                06-06-2022
                                            </div>

                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check_1">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                            <div className="item-he-header">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>

                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check_1">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                            <div className="item-he-header">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>

                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check_1">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                            <div className="item-he-header">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>

                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check_1">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                            <div className="item-he-header">
                                                Otaqulov Sherzod
                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

                                            </div>
                                            <div className="item-he-D">

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

export default StudentsAttendans;