import React from 'react';
import Navbar from "./Navbar";
import Sider from "./Sider"
import Content from "./Content"
function Index(props) {
    return (
        <div>
            <Navbar />
            <div className="d-flex" style={{width:'100%'}}>
                <Sider />
                <Content />
            </div>

        </div>
    );
}

export default Index;