import React from "react";

import ListItem from "./listDesign/listItem";

const List = ({ todos, completeHandler, checkHandler }) => {
  return (
    <div className="mt-4">
      <ul class="list-group">
        {todos.map(todo => {
          return (
            <ListItem
              todo={todo}
              completeHandler={completeHandler}
              checkHandler={checkHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
