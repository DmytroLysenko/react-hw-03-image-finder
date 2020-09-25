import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  static propTypes = {
    largeURL: PropTypes.string,
    alt: PropTypes.string,
    closeModal: PropTypes.func,
  };

  handleClickCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document
      .querySelector("#Modal")
      .addEventListener("click", this.handleClickCloseModal);
    window.addEventListener("keydown", this.handleKeyCloseModal);
  }

  componentWillUnmount() {
    document
      .querySelector("#Modal")
      .removeEventListener("click", this.handleClickCloseModal);
    window.removeEventListener("keydown", this.handleKeyCloseModal);
  }

  render() {
    const { largeURL, alt } = this.props;
    return (
      <div className="Overlay" id="Modal">
        <div className="Modal">
          <img src={largeURL} alt={alt} />
        </div>
      </div>
    );
  }
}
