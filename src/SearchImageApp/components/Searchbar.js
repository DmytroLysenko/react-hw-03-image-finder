import React from "react";
import PropTypes from "prop-types";

export default class Searchbar extends React.Component {
  static propTypes = {
    onNewQuery: PropTypes.func.isRequired,
  };

  state = {
    keyword: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { keyword } = this.state;
    if (keyword) {
      this.props.onNewQuery(keyword.split(" ").join("+"));
      this.setState({ keyword: "" });
    }
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="keyword"
            value={this.state.keyword}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
