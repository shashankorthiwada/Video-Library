import { Card } from "../components/Card";
import { useData } from "../context/data-context";

export const VideoListing = () => {
  const {
    state: { videoList },
  } = useData();

  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "0rem 1.5rem 1.5rem 0rem",
        height: "30rem",
      }}
    >
      {videoList.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
};
