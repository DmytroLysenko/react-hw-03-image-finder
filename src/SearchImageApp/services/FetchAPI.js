class FetchAPI {
  options = {
    BASE_URL: "https://pixabay.com/api/?",
    KEY: "16887620-e991db8737f2bb3a88bca8c81",
  };

  getData = (searchQuery, page = 1, per_page = 6) => {
    const { BASE_URL, KEY } = this.options;
    return fetch(
      `${BASE_URL}key=${KEY}&q=${searchQuery}&page=${page}&per_page=${per_page}`
    )
      .then((_) => _.json())
      .then((data) => data.hits);
  };
}

export default new FetchAPI();
