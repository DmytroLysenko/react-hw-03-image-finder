import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";

const ImageGallery = ({ list, onClickLoadMore, isLoading, onClickImg }) => {
  return (
    <>
      <ul className="ImageGallery">
        {list.map((item) => (
          <ImageGalleryItem item={item} key={item.id} onClickImg={onClickImg} />
        ))}
      </ul>
      {list.length > 0 && !isLoading && (
        <div className="btnContainer">
          <button type="button" className="Button" onClick={onClickLoadMore}>
            Load more
          </button>
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  list: [],
};

ImageGallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onClickLoadMore: PropTypes.func,
  isLoading: PropTypes.bool,
  onClickImg: PropTypes.func,
};
