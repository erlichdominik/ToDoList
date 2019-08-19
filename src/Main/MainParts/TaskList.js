import React from 'react';

const TaskList = (props) => {

    return (
        props.toDoDatas.map((el, index) => {
            return (
                <div key={index}
                    onClick={() => props.clicked(index)}
                    className="data-cnt">

                    <p className="task-value">{el.taskValue}</p>
                    <p className="desc-value">{el.descValue}</p>

                </div>
            );
        }));
}

export default TaskList;