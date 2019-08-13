import React from 'react'
import exp from '../asset/img/hg.jpg'
function Count (props){
    return <div>
        喀什酱豆腐：{props.name}
        <img style={sty.imgSize} src={exp} alt=""/>
        </div>
}

const sty = {
    imgSize: {
        width: 100,
        height: 200
    }
}
export default Count