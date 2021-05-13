import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event)=>{
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);     // 상위 컴포넌트로 전달하기
        formRef.current.reset();
    }

    return (
        <form className="add-form" onSubmit={onSubmit} ref={formRef}>
            <input ref={inputRef} type="text" className="add-input" placeholder="습관을 적어보세요"/>
            <button className="add-button">Add</button>
        </form>
    );
    
})
export default HabitAddForm;