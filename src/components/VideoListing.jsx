import { videosList } from "../dto/data";
import { Card } from "../components/Card";
import { useData } from "../context/data-context";
import { useEffect } from "react";
import axios from "axios";

export const VideoListing = () => {
  const {
    state: { videoList },
    dispatch,
  } = useData();

  useEffect(() => {
    (async () => {
      const {
        data: { videos },
      } = await axios.get("http://localhost:3004/videos");
      console.log("videos: ", JSON.stringify(videos));
      dispatch({ type: "SHOW_VIDEOS", payload: videos });
    })();
  }, []);

  return (
    <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
      {videoList.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
};
