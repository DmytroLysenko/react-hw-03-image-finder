import React from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";

import FetchAPI from "./utils/FetchAPI";

export default class SearchImageApp extends React.Component {
  state = {
    images: [],
    query: null,
    page: 1,
    error: null,
    isLoading: false,
    modal: {
      isModal: false,
      imgURL: null,
      description: null,
    },
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
    // Activation scrollTo - nedd refactoring
    if (
      prevState.images.length !== 0 &&
      prevState.images.length < this.state.images.length
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleOpenModal = (imgURL, description) => {
    this.setState({
      modal: {
        imgURL,
        description,
        isModal: true,
      },
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: {
        imgURL: null,
        description: null,
        isModal: false,
      },
    });
  };

  handleNewQuery = (query) => {
    if (query === this.state.query) {
      return;
    }

    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.fetchData();
  };

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;
    try {
      const data = await FetchAPI.getData(query, page);
      this.setState((state) => {
        return {
          page: state.page + 1,
          images: [...state.images, ...data],
        };
      });
    } catch (e) {
      this.setState({ error: e });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      images,
      isLoading,
      modal: { imgURL, description, isModal },
    } = this.state;

    return (
      <div>
        <Searchbar onNewQuery={this.handleNewQuery} />
        <ImageGallery
          images={images}
          isLoading={isLoading}
          onLoadMore={this.handleLoadMore}
          onOpenModal={this.handleOpenModal}
        />
        {isModal && (
          <Modal
            imgURL={imgURL}
            description={description}
            closeModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
