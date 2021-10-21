import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { addItem, getAllItems, removeItem } from '../api/server_helper';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    useEffect(() => {
        (async () => {
            await getAllItems().then((items) => {
                setList(items);
            });
        })()

    }, [])


    const [list, setList] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        const id = uuidv4();
        addItem({ Id: id, Task: task }).then(() => {
            if (list) {
                const newList = list.concat({ Id: id, Task: task, IsSelected: false });
                setList(newList);
                setTask('');
            }
        }).catch(() => {
            console.log("Task can not added to the list");
        });
    }

    const handleListItemClick = (e) => {
        const newList = list && list.map((item, index) => {
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

    const taskList = list && list.map((item, index) => (
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

            <ul id="taskList">
                {taskList}
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))