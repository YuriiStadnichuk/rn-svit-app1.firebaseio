import { TODAY_DATE } from "../types";

const handlers = {
  [TODAY_DATE]: (state, {dates}) => ({...state, dates}),
  DEFAULT: state => state
}
export const dateReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
