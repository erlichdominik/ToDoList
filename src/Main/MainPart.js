import React, { Component } from 'react';

import './MainPart.css';

import Task from './MainParts/TaskInput';
import Description from './MainParts/DescInput';
import ButtonSubmit from './MainParts/SubmitButton';
import TaskList from './MainParts/TaskList';

class Main extends Component {
    state = {
        taskValue: "",
        descValue: "",
        newtoDo: [],
    }

    handleOnChangeTask = event => {
        this.setState({
            taskValue: event.target.value
        })
    }

    handleOnChangeDesc = event => {
        this.setState({
            descValue: event.target.value
        })
    }

    handleDeleteEl = (event, index) => {
        console.log(event)
        let newData = this.props.toDoDatas.slice();
        newData.splice(index, 1);
        this.setState({ newtoDo: newData },
            () => { this.props.refreshData(this.state.newtoDo) })
    }

    handleSubmitButton = (event) => {

        event.preventDefault();

        let oldDatas = {
            taskValue: this.state.taskValue,
            descValue: this.state.descValue,
        };

        let newDatas = [...this.state.newtoDo, oldDatas];
        this.setState({ newtoDo: newDatas },
            () => { this.props.refreshData(this.state.newtoDo) })
    }

    render() {
        let added = this.props.toDoDatas.map((el, index) => {
            return <TaskList
                key={index}
                taskValue={el.taskValue}
                descValue={el.descValue}
                clicked={() => this.handleDeleteEl(el, index)}
            />
        });
        return (
            <>
                <div className='main-cnt'
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '70%',
                        margin: '0 auto',
                        justifyContent: 'center',
                    }}
                >
                    <Task
                        taskValue={this.state.taskValue}
                        handleOnChangeTask={this.handleOnChangeTask} />

                    <Description
                        descValue={this.state.descValue}
                        handleOnChangeDesc={this.handleOnChangeDesc} />

                    <ButtonSubmit
                        handleSubmitButton={this.handleSubmitButton} />

                    {added}

                </div>
            </>
        );
    }
}

export default Main;
