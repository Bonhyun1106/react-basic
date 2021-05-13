import React, {PureComponent} from 'react';

/**
 * UI Template
 */
class Habit extends PureComponent {
    render(){
        const props = this.props;
        const habit = this.props.habit;

        return(
            <li className="habit">
                <span className="habit-name">{habit.name}</span>
                <span className="habit-count">{habit.count}</span>
                <button className="habit-button habit-increase" 
                    onClick={()=>props.increaseCount(habit)}
                ><i className="fas fa-plus-square"></i></button>
                <button className="habit-button habit-decrease"
                    onClick={()=>props.decreaseCount(habit)}
                ><i className="fas fa-minus-square"></i></button>
                <button className="habit-button habit-delete"
                    onClick={()=>props.deleteHabit(habit)}
                ><i className="far fa-trash-alt"></i></button>
            </li>
        );
    }
}

export default Habit;