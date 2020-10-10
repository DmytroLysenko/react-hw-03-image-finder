const BASE_URL = "https://pixabay.com/api/?";
const KEY = "16887620-e991db8737f2bb3a88bca8c81";

const getData = (query, page = 1, per_page = 6) => {
  return fetch(
    `${BASE_URL}key=${KEY}&q=${query}&page=${page}&per_page=${per_page}`
  )
    .then((_) => _.json())
    .then((data) => data.hits);
};

export default { getData };
