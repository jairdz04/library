import axios from "axios";

import { REQUEST_STATUSES } from "../constants";
import { createEntityTypes } from "../utils";

const executeCall = async (
  dispatch,
  { entityName, url, method = "GET", params = {}, payload = {} }
) => {

  /* START - generate types automatically */
  const [onFetchingType, onSuccessType, onErrorType] = createEntityTypes({
    entityName
  });

  /* END - generate types automatically */

  try {
    const fetchingData = {
      [entityName]: [],
      requestStatus: REQUEST_STATUSES.FETCHING,
      error: null
    };

    dispatch({ type: onFetchingType, ...fetchingData });
    const { data } = await axios.request({
      url,
      method,
      params,
      data: payload
    });
    const successData = {
      [entityName]: data,
      requestStatus: REQUEST_STATUSES.SUCCESSFUL,
      error: null
    };

    return dispatch({ type: onSuccessType, ...successData });
  } catch (error) {
    const errorData = {
      [entityName]: [],
      requestStatus: REQUEST_STATUSES.FAILED,
      error
    };

    return dispatch({ type: onErrorType, ...errorData });
  }
};

export default executeCall;
