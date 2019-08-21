import React from 'react';

const TaskList = (props) => {

    return (
        <div className="data-cnt">
            <button
                type='button'
                className='dlt-btn'
                onClick={props.clicked}
            >delete
            </button>
            <button
                type='button'
                className='edt-btn'
                onClick={props.edit}>edit</button>
            <p className="task-value" onDoubleClick={props.edit} contentEditable={props.editable}>{props.taskValue}</p>
            <p className="desc-value" contentEditable={props.editable}>Description: {props.descValue}</p>
        </div>
    );
};


export default TaskList;