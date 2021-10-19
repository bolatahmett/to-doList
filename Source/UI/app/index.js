import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { addItem, getAllItems, removeItem } from '../api/server_helper';
import './index.css';

const App = () => {


    useEffect(() => {

    });

    useEffect(() => {
        (async () => {
            var items = await getAllItems();
            setList(items);
        })()

    }, [])


    const [list, setList] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        const newList = list.concat({ Task: task, IsSelected: false });
        setList(newList);
        setTask('');
        // addItem({ "Id": newId, "Task": task });
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
            {item.Task}
        </li>
    ));

    return (
        <>
            <input
                type="text"
                id="taskMessage"
                value={task}
                onChange={(val) => { setTask(val.target.value) }} />

            <button id="addButton" onClick={addTask}> Add Button </button>

            <button id="removeButton" onClick={removeTask}> Remove Button </button>

            <ul id="taskList">
                {taskList}
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))