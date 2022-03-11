import React from 'react';
import '../../style/content.scss'
function Content(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    );
}

export default Content;