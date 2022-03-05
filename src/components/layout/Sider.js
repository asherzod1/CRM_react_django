import React from 'react';
import '../../style/sider.scss'
import { RiDashboardFill, RiGroupFill, RiTableLine } from 'react-icons/ri'
import {IoMdDocument} from 'react-icons/io'
import {AiFillEdit} from 'react-icons/ai'
import {VscGraphLine} from 'react-icons/vsc'
import {MdPayment} from 'react-icons/md'
function Sider(props) {
    return (
        <div className="sider">
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <RiDashboardFill />
                    <h3>Dashboard</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <IoMdDocument />
                    <h3>Kurslar</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <RiGroupFill />
                    <h3>Guruhlar</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <RiTableLine />
                    <h3>Dars jadvali</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <AiFillEdit />
                    <h3>Talabalar</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <VscGraphLine />
                    <h3>Davomat</h3>
                </div>
            </div>
            <div className="sider__menu">
                <div className="sider__menu__item">
                    <MdPayment />
                    <h3>To'lovlar</h3>
                </div>
            </div>
        </div>
    );
}

export default Sider;