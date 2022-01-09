import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/data-reducer";
import { useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    videoList: [],
    likedVideos: [],
    history: [],
    playlist: [],
    searchValue: "",
  });

  useEffect(() => {
    (async () => {
      const {
        data: { videos },
      } = await axios.get("http://localhost:3002/videos");
      console.log("videos: ", JSON.stringify(videos));
      dispatch({ type: "SHOW_VIDEOS", payload: videos });
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
