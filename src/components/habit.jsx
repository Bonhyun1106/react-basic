import React, {Component} from 'react';

/**
 * UI Template
 */
class Habit extends Component {
    increaseCount = ()=>{
        this.props.increaseCount(this.props.habit);
    };
    decreaseCount = ()=>{
        this.props.decreaseCount(this.props.habit);
    };
    deleteHabit = ()=>{
        this.props.deleteHabit(this.props.habit);
    };

    render(){
        const {name, count} = this.props.habit;

        return(
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase"
                    onClick={this.increaseCount}
                ><i className="fas fa-plus-square"></i></button>
                <button className="habit-button habit-decrease"
                    onClick={this.decreaseCount}
                ><i className="fas fa-minus-square"></i></button>
                <button className="habit-button habit-delete"
                    onClick={this.deleteHabit}
                ><i className="far fa-trash-alt"></i></button>
            </li>
        );
    }
}

Habit.propTypes = {
    habit : []
}

export default Habit;