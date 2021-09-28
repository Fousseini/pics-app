import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    //console.log(e.target.value);
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              name="searchTerm"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
