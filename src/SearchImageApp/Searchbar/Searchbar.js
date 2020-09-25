import React from "react";
import PropTypes from "prop-types";

export default class Searchbar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.props.onSubmit(this.state.inputValue.split(" ").join("+"));
      this.setState({ inputValue: "" });
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
            value={this.state.inputValue}
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
