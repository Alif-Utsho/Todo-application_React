import React from 'react'

import TableItem from './tableDesign/tableItem'

const Table = ({ todos, completeHandler, checkHandler }) => {
  return (
    <div className="mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Time</th>
            <th scope="col">Todo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return <TableItem
              todo={todo}
              completeHandler={completeHandler}
              checkHandler={checkHandler}
            />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table