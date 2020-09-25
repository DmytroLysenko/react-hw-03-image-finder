import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ item, onClickImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={item.webformatURL}
        alt={item.tags}
        className="ImageGalleryItem-image"
        onClick={() => onClickImg(item.webformatURL, item.tags)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  item: {
    webformatURL:
      "https://lh3.googleusercontent.com/proxy/iW2AJeBfDYYaEzF0OksrTmE3ZrkYjNeOY-lGP70ln4s4ILkhNk9LK1-zqE911gxfi5mTstEiJa6G6v-zE4Vy15Vc1lAKmbVbvrBd8iGNojydRL74geS1JmPJUHzM",
    tags: "unknow",
  },
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
