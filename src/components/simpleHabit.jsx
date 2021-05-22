import React from 'react';

/*
  클래스형 컴포넌트는 처음 클래스를 생성할 때
  생성자나 메소드를 생성하여 계속 가지고 있음.
  state, props 가 변경될 때마다 render()만 호출됨

  그러나, 함수형 컴포넌트는
  state, props 가 변경될 때마다 
  함수형 컴포넌트에 정의된 모든 것들이 다시 생성된다.
  -> 리액트 Hooks APIs - useState를 사용할 경우 동일한 값을 메모리에 저장해 놓기 때문에
    계속 동일한 값을 기억할 수 있음.
 */


const SimpleHabit = (props) => {
  // hooks
  const [count, setCount] = useState(0);  // count = 0

  const handleIncrement = () => {
    setCount(count +1);
  };

  return(
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{this.state.count}</span>
      <button
        className="habit-button habit-increase"
        onClick={this.handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;