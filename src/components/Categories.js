import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";

function Categories(props) {
  const categories = props.data;
  const handler = props.handler;
  const [searchString, setSearchString] = useState("");
  const [category, setCategory] = useState({});
  const onSearchEnter = (e) => {
    if (e.key === 'Enter') {
      changeCategory(category, e.target.value);
    }
  }
  function changeCategory(c, searchString){
    setCategory(c);
    setSearchString(searchString);
    handler(c, searchString);
  }

  return (
    <div className="sidebar-container d-none d-sm-block">
      <div className="sidebar" id="sidebar">
        <div className="overflow-auto">
          <div className="list-group list-group-flush overflow-auto">
            <div className="list-group-item pt-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><FaSistrix /></span>
                </div>
                <input type="text" className="form-control" placeholder="Search" onKeyUp={e => onSearchEnter(e)} onChange={e => setSearchString(e.target.value)} value={searchString} />
              </div>
            </div>
            {!categories.loading && categories.data.map(c => {
              return (
                <div key={c.id} onClick={() => changeCategory(c, searchString)} 
                  className={"list-group-item list-group-item-action" + (c.id === category.id ? " list-group-item-secondary" : "")}>{c.name}</div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;