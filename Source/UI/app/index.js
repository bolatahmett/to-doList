import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

    const [list, setList] = useState([]);
    const [message, setMessage] = useState('');

    const addTask = () => {
        const newList = list.concat({ Message: message, IsSelected: false });
        setList(newList);
        setMessage('');
    }

    const removeTask = () => {
        const newList = list.filter((item) => !item.IsSelected);
        setList(newList);
    }

    const handleListItemClick = (e) => {
        const newList = list.map((item, index) => {
            if (index.toString() === e.target.getAttribute("data-index")) {
                const updatedItem = {
                    ...item,
                    IsSelected: !item.IsSelected,
                };

                return updatedItem;
            }

            return item;
        });

        setList(newList);
    }

    const taskList = list.map((item, index) => (
        <li className={item.IsSelected ? "selected-task-item" : "task-item"}
            data-index={index}
            key={index}
            onClick={handleListItemClick}
        >
            {item.Message}
        </li>
    ));

    return (
        <>
            <input
                type="text"
                id="taskMessage"
                value={message}
                onChange={(val) => { setMessage(val.target.value) }} />

            <button id="addButton" onClick={addTask}> Add Button </button>

            <button id="removeButton" onClick={removeTask}> Remove Button </button>

            <ul id="taskList">
                {taskList}
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))