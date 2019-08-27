export const getBooks = (params) => ({
  entityName: "books",
  url: "http://localhost:3001/books",
  ...params
});
