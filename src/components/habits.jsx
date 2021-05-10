import React, {Component} from 'react';
import Habit from './habit';

/**
 * 데이터와 UI 분리
 * habits.jsx : Datas
 * habit.jsx  : UI template
 */
class Habits extends Component {
    render(){
        const props = this.props;
        return(
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
        );
    }
}

export default Habits;