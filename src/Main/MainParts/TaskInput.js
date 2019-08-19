import React from 'react';

const Task = (props) => {
    return (
        <input
            type='text'
            value={props.taskValue}
            onChange={props.handleOnChangeTask}
            placeholder="task name"
            style={{
                textAlign: 'center',
                width: '51%',
                height: '3em',
                borderRadius: '20px',
                border: '1px solid dodgerblue',
                outline: 'none'
            }}
        />);
}

export default Task;