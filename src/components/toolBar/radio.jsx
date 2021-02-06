import React from 'react'

const Radio = ({ listView, listViewHandler }) => (
  <div className='ms-auto'>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        checked={listView}
        onChange={()=>listViewHandler()}
      />
      <label class="form-check-label" for="flexRadioDefault1">
        List View
      </label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        checked={!listView}
        onChange={()=>listViewHandler()}
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Table View
      </label>
    </div>
  </div>
)

export default Radio