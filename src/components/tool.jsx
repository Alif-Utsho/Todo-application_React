import React from 'react'

import Filter from './toolBar/filter-button'
import Radio from './toolBar/radio'
import Reset from './toolBar/reset'

const Tool = ({ todos, listView, listViewHandler, resetHandler, clearCompleted, clearSelected, filterHandler }) => {
  return (
    <div className='d-flex'>
      <Filter
        todos={todos}
        filterHandler={filterHandler}
      />
      <Radio
        listView={listView}
        listViewHandler={listViewHandler}
      />
      <Reset
        resetHandler={resetHandler}
        clearCompleted={clearCompleted}
        clearSelected={clearSelected}
      />
    </div>
  );
}

export default Tool