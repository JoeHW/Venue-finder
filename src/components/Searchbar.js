import React from 'react';

const Searchbar = ({searchInput}) =>

<form className="input-group">
  <input placeholder="Seacrh for a venue..."
         className="form-control"
         onChange={searchInput}  />
   <span className="input-group-btn">
    <button type="submit" className="btn btn-primary">Search</button>
  </span>
</form>

export default Searchbar;
