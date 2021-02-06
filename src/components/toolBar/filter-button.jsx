import React from 'react'

const Filter = ({todos, filterHandler}) => {
    return (
      <div>
        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-secondary"
              id="show-all-btn"
              onClick={() => filterHandler('all')}
            >
              All <span class="badge bg-primary rounded-pill ms-1">{todos.length}</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="show-running-btn"
              onClick={()=>filterHandler('running')}
            >
              Running
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="show-completed-btn"
              onClick={()=>filterHandler('completed')}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    );
}

export default Filter