import avatarImage from "../Images/avatar.svg";

export const Navigation = () => {
  return (
    <nav style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        className="input-div"
        style={{ marginLeft: "20rem", marginTop: "0.7rem" }}
      >
        <input
          type="text"
          className="input"
          style={{ width: "40rem" }}
          placeholder="Search"
        />
        <i className="fas fa-search" style={{ left: "38rem" }}></i>
      </div>
      <div className="avatar-div" style={{ marginLeft: "15rem" }}>
        <img className="avatar medium" src={avatarImage} />
      </div>
    </nav>
  );
};
