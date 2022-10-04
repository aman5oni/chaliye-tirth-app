import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { themeSliceReducer } from "./slice/themeSlice";

const reducer = combineReducers({
  theme: themeSliceReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const stor = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        thunk
      },
      immutableCheck: false,
      serializableCheck: false
    })
});

export default store;
