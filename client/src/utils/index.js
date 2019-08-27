import { REQUEST_STATUSES } from "../constants";

export const createEntityTypes = ({ entityName }) => {
  return [
    `${REQUEST_STATUSES.FETCHING.toUpperCase()}/${entityName.toUpperCase()}`,
    `${REQUEST_STATUSES.SUCCESSFUL.toUpperCase()}/${entityName.toUpperCase()}`,
    `${REQUEST_STATUSES.FAILED.toUpperCase()}/${entityName.toUpperCase()}`
  ];
};
