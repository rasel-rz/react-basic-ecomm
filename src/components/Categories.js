import React, { Component } from 'react';
import { FaSistrix } from "react-icons/fa";


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      category: {},
    }
  }

  searchInputChange = (e) => {
    this.setState({ searchString: e.target.value });
  }

  onSearchEnter = (e) => {
    if (e.key === 'Enter') {
      this.changeCategory(this.state.category, this.state.searchString);
    }
  }

  changeCategory = (category, searchString) => {
    this.setState({ category: category });
    this.props.handler(category, searchString);
  }

  render() {
    const categories = this.props.data;
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
                  <input type="text" className="form-control" placeholder="Search" onKeyUp={this.onSearchEnter} onChange={this.searchInputChange} value={this.props.searchString} />
                </div>
              </div>
              {!categories.loading && categories.data.map(category => {
                return (
                  <div onClick={this.changeCategory.bind(this, category, this.state.searchString)} key={category.id} 
                    className={"list-group-item list-group-item-action" + (category.id === this.state.category.id ? " list-group-item-secondary":"")}>{category.name}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;