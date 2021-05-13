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

  // 직접 state를 수정하는것은 좋지 않다.
  increaseCount = (habit)=>{
      const habits = this.state.habits.map(item =>{
        if(item.id === habit.id){
          // 기존에 등록된 habit id라면 기존 객체를 복사하여 값을 업데이트한다
          return {...habit, count : habit.count+1};
        }
        return item;
      })
      this.setState({habits});
  };

  decreaseCount = (habit)=>{
      const habits = this.state.habits.map(item =>{
        if(item.id === habit.id){
          const count = item.count -1;
          return {...habit, count : count < 0 ? 0 : count};
        }
        return item;
      });
      this.setState({habits:habits});
  };

  deleteHabit = (habit)=>{
      const habits = this.state.habits.filter( item => item.id !== habit.id);
      this.setState({habits:habits});
  };

  handleAdd = (name) =>{
    const habits = [...this.state.habits, {id : Date.now(), name : name, count : 0}];
    this.setState({habits});
  }

  handleReset = ()=>{
    const habits = this.state.habits.map(item => {
      if(item.count !== 0){
        return {...item, count:0}
      }
      return item;
    });
    this.setState({habits});
  }

  render(){
    return(
      <React.Fragment>
        <Navbar 
          totalCnt={this.state.habits.filter((habit)=>habit.count > 0).length}
        />
        <Habits 
          habits={this.state.habits}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
          deleteHabit={this.deleteHabit}
          onAdd={this.handleAdd}
          handleReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
