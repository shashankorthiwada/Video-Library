import { useLocation } from "react-router";
import ReactPlayer from "react-player/youtube";

export const VideoWatch = () => {
  const {
    state: {
      videoMatch: { vid },
    },
  } = useLocation();
  console.log("props: ", vid);
  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "53rem",
        height: "31rem",
        paddingLeft:"2rem"
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${vid}`}
        controls={true}
        playing={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};
