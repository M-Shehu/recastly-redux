import React from 'react';
 
var Search = ({ handleSearchInputChange }) => {


  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={() => handleSearchInputChange($('.form-control').val())}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
  
}

export default Search;
