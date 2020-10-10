import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  static propTypes = {
    imgURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  handleCloseModal = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document
      .querySelector("#Modal")
      .addEventListener("click", this.handleCloseModal);
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    document
      .querySelector("#Modal")
      .removeEventListener("click", this.handleCloseModal);
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  render() {
    const { imgURL, description } = this.props;
    return (
      <div className="Overlay" id="Modal">
        <div className="Modal">
          <img src={imgURL} alt={description} />
        </div>
      </div>
    );
  }
}
