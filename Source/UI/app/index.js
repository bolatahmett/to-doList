import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

    const [list, setList] = useState([]);
    const [message, setMessage] = useState('');

    return (
        <>
            <input
                type="text"
                id="taskMessage"
                value={message}
                onChange={(val) => { setMessage(val.target.value) }} />

            <button id="addButton" onClick={() => {
                const newList = list.concat({ Message: message, IsSelected: false });
                setList(newList);
                setMessage('');
            }}> Add Button
            </button>

            <button id="removeButton" onClick={() => {
                const newList = list.filter((item) => !item.IsSelected);
                setList(newList);
            }}> Remove Button
            </button>

            <ul id="taskList">
                {list.map((item, index) => (
                    <li className={item.IsSelected ? "selected-task-item" : "task-item"}
                        data-index={index}
                        key={index}
                        onClick={(e) => {

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
                        }}
                    >{item.Message}</li>
                ))}
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))