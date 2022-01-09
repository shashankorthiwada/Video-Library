import { getImage } from "../utils/video.util";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useData } from "../context/data-context";

export const Card = ({ video }) => {
  const {
    state: { videoList },
  } = useData();

  const { vid, title, createdby, description } = video;

  const videoMatch = videoList.find((record) => record.vid === vid);
  const navigate = useNavigate();

  return (
    <>
      <Link
        to={`/video/${vid}`}
        state={{ videoMatch }}
        style={{
          height: "20rem",
          cursor: "pointer",
        }}
      >
        <div
          className="blog-card-div"
          style={{ margin: "1rem", height: "100%" }}
        >
          <div className="blog-image-div">
            <img
              className="blog-image"
              src={getImage(vid)}
              style={{ height: "14rem" }}
            />
          </div>
          <div className="blog-description-div" style={{ height: "0.8rem" }}>
            <h4>{title}</h4>
          </div>
        </div>
      </Link>
    </>
  );
};
