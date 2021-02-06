import React from 'react'

const Search = ({ searchHandler }) => {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Enter search items"
        onChange={e => searchHandler(e.target.value)}
      />
      <div>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="btn btn-warning ms-1"
        >
          New
          </button>
      </div>
    </div>
  );
}

export default Search