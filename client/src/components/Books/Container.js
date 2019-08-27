import { useEffect } from "react";
import { appContext } from "../../store";
import { getBooks } from "../../store/books";
import { default as call } from "../../store/call";
import { REQUEST_STATUSES } from "../../constants";

const InitializeProps = () => {
  const [state, dispatch] = appContext();
  const books = state.books;
  useEffect(() => {
    if (books.requestStatus === REQUEST_STATUSES.NOT_FETCHED) {
      call(dispatch, getBooks({}));
    }
  }, [state.books]);

  return books;
};

export default InitializeProps;
