import React, {useState} from 'react';
import Layout from "../layout/Layout";
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import '../../style/courses.scss'
function GroupsPage(props) {
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

                        <div className="category_add">
                            <div className="row">
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card">
                                        <img src="/imga/vue.png" alt=""/>
                                        <div className="group-name">
                                            Vue g26
                                        </div>
                                        <div className="group-items">
                                            15 guruh
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card">
                                        <img src="/imga/react.png" alt=""/>
                                        <div className="group-name">
                                            Vue g26
                                        </div>
                                        <div className="group-items">
                                            15 guruh
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card">
                                        <img src="/imga/react.png" alt=""/>
                                        <div className="group-name">
                                            Vue g26
                                        </div>
                                        <div className="group-items">
                                            15 guruh
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card">
                                        <img src="/imga/robo.png" alt=""/>
                                        <div className="group-name">
                                            Vue g26
                                        </div>
                                        <div className="group-items">
                                            15 guruh
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card">
                                        <img src="/imga/robo.png" alt=""/>
                                        <div className="group-name">
                                            Vue g26
                                        </div>
                                        <div className="group-items">
                                            15 guruh
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3 col-sm-6 col-12">
                                    <div className="cat-card-add">
                                        <div className="center-page">
                                            <img src="/imga/pluss.png" alt=""/>
                                            <div className='title'>
                                                Yangi category
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="title">
                            Bizning guruhlarimiz
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
                                        Offline kusrlar
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
                                        Online kusrlar
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
                                            <div className="item-he-G">
                                                Guruhlar
                                            </div>
                                            <div className="item-he-G">
                                                Dars vaqti
                                            </div>
                                            <div className="item-he-G">
                                                Start time
                                            </div>
                                            <div className="item-he-G">
                                                O'quvchilar soni
                                            </div>
                                            <div className="item-check">

                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
                                            </div>
                                            <div className="item-check">
                                                <img src="/imga/ttt.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="sec-header">
                                            <div className="item-check">
                                                <input type="checkbox"/>
                                            </div>
                                            <div className="item-G">
                                                Vuej g2 guruhi
                                            </div>
                                            <div className="item-G">
                                                13:00:00
                                            </div>
                                            <div className="item-G">
                                                2021-08-14
                                            </div>
                                            <div className="item-G">
                                                30+ ta o’quvchi
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

export default GroupsPage;