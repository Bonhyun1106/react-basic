import React, {Component} from 'react';

export default class Navbar extends Component {
    render(){
        return(
            <nav>
                <span className="logo"><i className="fas fa-history"></i></span>
                <span className="title">Habit Tracker</span>
                <span className="habit-count tatalCnt">{this.props.totalCnt}</span>
            </nav>
        );
    }    
}