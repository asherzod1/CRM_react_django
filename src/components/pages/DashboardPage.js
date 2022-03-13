import React from 'react';
import Layout from "../layout/Layout";
import DoughnutChartt from "../smallComponents/DoughnutChartt";
import CircleProgress from "../smallComponents/CircleProgress";
import CircleProgressRed from "../smallComponents/CircleProgressRed";
import CircleProgressWarning from "../smallComponents/CircleProgressWarning";
import VerticalChartt from "../smallComponents/VerticalChartt";
import SimpleProgress from "../smallComponents/SimpleProgress";


function DashboardPage(props) {
    return (
        <div>
            <Layout>
                <div className="dashboard">
                    <div className="row" style={{marginBottom:'20px'}}>
                        <div className="col-md-4">
                            <div>
                                <CircleProgress />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <CircleProgressRed />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <CircleProgressWarning />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom:'20px'}}>
                        <div className="col-md-8">
                            <div>
                                <SimpleProgress />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <VerticalChartt />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div >
                                <DoughnutChartt
                                    title={"To’lov bo’yicha analiz"}
                                    info={
                                        [
                                            {
                                                'title': "To'lov qildi",
                                                'quantity': 100
                                            },
                                            {
                                                'title': "To'lov qilmadi",
                                                'quantity': 25
                                            },
                                            {
                                                'title': "Hali ulgurmaganlar",
                                                'quantity': 2
                                            },
                                            {
                                                'title': "Tekin o’qidiganlar",
                                                'quantity': 20
                                            },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div >
                                <DoughnutChartt
                                    title={"Yo’nalish bo’yicha analiz"}
                                    info={
                                        [
                                            {
                                                'title': "Abyutrientlar uchun",
                                                'quantity': 30
                                            },
                                            {
                                                'title': "Arab tili",
                                                'quantity': 25
                                            },
                                            {
                                                'title': "Bolalar uchun",
                                                'quantity': 2
                                            },
                                            {
                                                'title': "Bolalar uchun qo’shimcha",
                                                'quantity': 20
                                            },
                                            {
                                                'title': "Informations T",
                                                'quantity': 20
                                            },
                                            {
                                                'title': "Matematika",
                                                'quantity': 20
                                            },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div >
                                <DoughnutChartt
                                    title={"Bizni qayerdan topgan"}
                                    info={
                                        [
                                            {
                                                'title': "Banner orqali",
                                                'quantity': 10
                                            },
                                            {
                                                'title': "Flayer orqali",
                                                'quantity': 44
                                            },
                                            {
                                                'title': "Instagramdan",
                                                'quantity': 4
                                            },
                                            {
                                                'title': "Qiziqib kirganlar",
                                                'quantity': 101
                                            },
                                            {
                                                'title': "Tanish orqali",
                                                'quantity': 39
                                            },

                                        ]
                                    }
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>
        </div>
    );
}

export default DashboardPage;