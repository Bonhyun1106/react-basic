import React, {Component} from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

/**
 * 데이터와 UI 분리
 * habits.jsx : Datas
 * habit.jsx  : UI template
 */
class Habits extends Component {
    render(){
        const props = this.props;
        return(
            <React.Fragment>
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    {
                        props.habits.map((habit)=>(
                        <Habit key={habit.id} habit={habit} 
                                increaseCount={props.increaseCount}
                                decreaseCount={props.decreaseCount}
                                deleteHabit={props.deleteHabit}
                        />
                        ))
                    }
                </ul>
                <button className="habits-reset" onClick={props.handleReset}>Reset All</button>
            </React.Fragment>
        );
    }
}

export default Habits;