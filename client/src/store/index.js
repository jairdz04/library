import combineReducers from "./Context/CombineReducers";

/** START Import reducers  */
import Context, { useGlobalContext } from "./Context";
import books from "./books/reducers";
/** END Import reducers  */

export const globalContext = Context;
export const appContext = useGlobalContext;
const reducer = combineReducers({
  books
});

export default reducer;

