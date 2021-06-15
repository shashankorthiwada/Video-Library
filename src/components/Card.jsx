import { getImage } from "../utils/video.util";

export const Card = ({ video }) => {
  const { vid, title, createdby, description } = video;
  return (
    <div className="blog-card-div m-1rem">
      <div className="blog-image-div">
        <img className="blog-image" src={getImage(vid)} />
      </div>
      <div className="blog-description-div">
        <h4>{title}</h4>
      </div>
    </div>
  );
};
