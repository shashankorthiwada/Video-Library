import { videosList } from "../dto/data";
import { Card } from "../components/Card";

export const VideoListing = () => {
  return (
    <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
      {videosList.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
};
