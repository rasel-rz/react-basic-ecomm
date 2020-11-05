import React, { Component } from 'react';


class Categories extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: '',
      category: {},
    }
  }

  searchInputChange = (e) => {
    this.setState({searchString: e.target.value});
  }

  onSearchEnter = (e) => {
    if (e.key === 'Enter') {
      this.changeCategory(this.state.category, this.state.searchString);
    }
  }

  changeCategory = (category, searchString) => {
    this.setState({category: category});
    this.props.handler(category, searchString);
  }

  render(){
    const categories = this.props.data;
    return (
      <div>
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">
            <input type="text" placeholder="Search" onKeyUp={this.onSearchEnter} onChange={this.searchInputChange} value={this.props.searchString} />
          </div>
          <div className="list-group list-group-flush">
            {categories.map(category => {
              return (
                <div onClick={this.changeCategory.bind(this, category, this.state.searchString)} key={category.id} className="list-group-item list-group-item-action bg-light pointer">{category.name}</div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Categories;