import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/data-reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    videoList: [],
    likedVideos: [],
    history: [],
    playlist: [],
    searchValue: "",
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
