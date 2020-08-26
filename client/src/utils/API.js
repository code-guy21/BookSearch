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
  saveBook: (body) => {
    return axios.post(`/api/books`, body);
  },
  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  },
  findBook: (id) => {
    return axios.get(`/api/books/${id}`);
  },
};
