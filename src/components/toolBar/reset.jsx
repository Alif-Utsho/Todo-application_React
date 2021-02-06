import React from 'react'

const Reset = ({resetHandler, clearCompleted, clearSelected, filterHandler}) => {
    return (
      <div className="ms-auto">
        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              id="show-all-btn"
              onClick={clearSelected}
            >
              Clear Selected
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="show-running-btn"
              onClick={()=>clearCompleted()}
            >
              Clear Completed
            </button>
            <button
              type="button"
              className="btn btn-danger"
              id="show-completed-btn"
              onClick={()=>resetHandler()}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
}

export default Reset