import axios from "axios";

export default {
  getBooks: () => {
    return axios.get("/api/books");
  },
  searchBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: query,
        key: process.env.GOOGLE_KEY,
      },
    });
  },
};
