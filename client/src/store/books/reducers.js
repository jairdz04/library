import { createEntityTypes } from "../../utils";
import { REQUEST_STATUSES } from "../../constants";

const [booksFetching, booksSuccess, booksError] = createEntityTypes({
  entityName: "books"
});

const initialState = {
  requestStatus: REQUEST_STATUSES.NOT_FETCHED
};

const reducer = (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case booksFetching:
    case booksSuccess:
    case booksError:
      return rest;
    default:
      return state;
  }
};

export default reducer;
