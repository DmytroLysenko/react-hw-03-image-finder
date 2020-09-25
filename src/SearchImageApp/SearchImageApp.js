import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

import FetchAPI from "./services/FetchAPI";

export default class SearchImageApp extends React.Component {
  state = {
    imgList: [],
    searchQuery: null,
    page: 1,
    error: null,
    isLoading: false,
    largeURL: null,
    alt: null,
    isModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }

    if (
      prevState.imgList.length !== 0 &&
      prevState.imgList.length < this.state.imgList.length
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleCloseModal = () => {
    this.setState({ isModal: false });
  };

  handleNewSearchSubmit = (query) => {
    if (query === this.state.searchQuery) {
      return;
    }

    this.setState({
      searchQuery: query,
      page: 1,
      imgList: [],
    });
  };

  handleClickLoadMore = () => {
    this.fetchData();
  };

  handleClickImg = (largeURL, alt) => {
    this.setState({
      largeURL,
      alt,
      isModal: true,
    });
  };

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { searchQuery, page } = this.state;
    try {
      const data = await FetchAPI.getData(searchQuery, page);
      this.setState((state) => {
        return {
          page: state.page + 1,
          imgList: [...state.imgList, ...data],
        };
      });
    } catch (e) {
      this.setState({ error: e });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { imgList, isLoading, largeURL, alt } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleNewSearchSubmit} />
        <ImageGallery
          list={imgList}
          isLoading={isLoading}
          onClickLoadMore={this.handleClickLoadMore}
          onClickImg={this.handleClickImg}
        />
        {this.state.isModal && (
          <Modal
            largeURL={largeURL}
            alt={alt}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
