import { appContext } from "../../store";
import { getBooks } from "../../store/books";
import { default as call } from "../../store/call";

const InitializeProps = () => {
  const [state, dispatch] = appContext();
  const searchBooks = params => call(dispatch, getBooks({ params }));

  return { searchBooks };
};

export default InitializeProps;
