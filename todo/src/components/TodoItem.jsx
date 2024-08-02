import React from "react";

const TodoItem = (props) => {
    return(
        <li className="todo-list">
            <span>
            {props.completed ? <></> : <input type="checkbox" />}
            <span className="todo-item-text">{props.title}</span>
            </span>
            <p>...</p>
        </li>
    )
}

export default TodoItem