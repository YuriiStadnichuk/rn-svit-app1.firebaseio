import React, { useReducer, useEffect } from "react";
import { DateContext } from "./dateContext";
import { dateReducer } from "./dateReducer";
import { TODAY_DATE } from "../types";

export const DateState = ({ children }) => {
  const initialState = {
    //  dates: new Date()
    dates: [{ id: Date.now(), title: Date.now() }]
  };
  const [state, dispatch] = useReducer(dateReducer, initialState);

  const todayDate = (title, id) => {
    dispatch({ type: TODAY_DATE, title, id });
  };

  return (
    <DateContext.Provider
      value={{
        todayDate,
        dates: state.dates
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
