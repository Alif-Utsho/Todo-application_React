import React from "react";

const ListItem = ({ todo, completeHandler, checkHandler }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex">
                <div className="me-5 my-auto">
                    <input
                        type="checkbox"
                        id={todo.id}
                        checked={ todo.isSelected }
                        onChange={()=>checkHandler(todo.id)}
                    />
                </div>
                <div>
                    <div>
                        <h6>{todo.tittle}</h6>
                        <p>{todo.time.toDateString()}</p>
                    </div>
                </div>
                <div className="ms-auto my-auto">
                    <button
                        className= {todo.isCompleted ? 'btn btn-danger' : 'btn btn-success'}
                        onClick={()=>completeHandler(todo.id)}
                    >
                        {todo.isCompleted ? 'Completed' : 'Running'}
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ListItem;
