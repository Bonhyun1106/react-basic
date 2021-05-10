import './app.css';
import React, {Component} from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  // 데이터를 가지고 있는 컴포넌트에서 해당 데이터 제어 로직을 갖는다.
  state = {
    habits : [
        {id : 1, name : 'Reading', count : 0},
        {id : 2, name : 'Running', count : 0},
        {id : 3, name : 'meditating', count : 0},
    ]
  }

  increaseCount = (habit)=>{
      // 직접 state를 수정하는것은 좋지 않다.
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits[index].count++;
      this.setState({habits:habits});
  };
  decreaseCount = (habit)=>{
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count -1 ;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({habits:habits});
  };
  deleteHabit = (habit)=>{
      const habits = this.state.habits.filter( item => item.id !== habit.id);
      this.setState({habits:habits});
  };

  totalCnt = (habits) => {
    console.log(`call totla`);
  }

  render(){
    return(
      <React.Fragment>
        <Navbar 
          habits={this.state.habits}
          totalCnt={this.totalCnt}
        />
        <Habits 
          habits={this.state.habits}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
          deleteHabit={this.deleteHabit}
        />
        <button className="habit-button">Reset All</button>
      </React.Fragment>
    );
  }
}

export default App;
