import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";

const ImageGallery = ({ images, onLoadMore, isLoading, onOpenModal }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map((item) => (
          <ImageGalleryItem
            image={item}
            key={item.id}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
      {images.length > 0 && !isLoading && (
        <div className="btnContainer">
          <button type="button" className="Button" onClick={onLoadMore}>
            Load more
          </button>
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
