import React from 'react'

import headerCss from './header.js'
const cHeader = require('./cHeader.scss')
console.log(cHeader);

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={headerCss.header1}>
                <h1 style={headerCss.h1}>我是头部</h1>
                <hr/>
                <div className={cHeader.content}>
                    是扩大解放空手道解放东方科技
                     <div className={cHeader.aa}>sdlfkfsldkf</div>   
                </div>
                <span className='tt'>肯德基发生口角地方的空间福克斯的</span>
            </div>
        )
    }
}