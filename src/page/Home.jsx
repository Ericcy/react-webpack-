import React from 'react';

import Count from './Count.jsx'
import Header from './header/Header.jsx'
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1 style={{backgroundColor:'red'}}>homekdfksdjf</h1>
                <h2 style={styles.font}>我是文字</h2>
                <hr/>
                <Count name={'我是父组件传过来的'}></Count>
            </div>
        )
    }

}

const styles  = {
    font:{
        fontSize: 24
    }
}