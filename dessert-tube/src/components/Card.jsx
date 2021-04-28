export const Card = ({ video }) => {
  const { id, title, url } = video;
  return (
    <div
      style={{
        height: "17rem",
        width: "17rem",
        cursor: "pointer",
        margin: "1rem",
      }}
    >
      <div style={{ height: "4rem" }}>
        <img style={{ width: "9.9rem" }} src={url} />
      </div>
      <div styleName={{ margin: "1rem", width: "2rem" }}>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dicta
          doloremque.
        </p>
      </div>
    </div>
  );
};
