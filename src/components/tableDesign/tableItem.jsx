import React from "react";

const TableItem = ({ todo, completeHandler, checkHandler }) => {
    return (
        <tr>
            <th className='my-auto'>
                <input
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelected}
                    onChange={() => checkHandler(todo.id)}
                />
            </th>
            <td>{todo.time.toDateString()}</td>
            <td>{todo.tittle}</td>
            <td>
                <button
                    className={todo.isCompleted ? 'btn btn-danger' : 'btn btn-success'}
                    onClick={() => completeHandler(todo.id)}
                >
                    {todo.isCompleted ? 'Completed' : 'Running'}
                </button>

            </td>
        </tr>
    );
}

export default TableItem
