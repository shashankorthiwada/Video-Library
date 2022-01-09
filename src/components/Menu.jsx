export const Menu = () => {
  return (
    <nav className="sidebar" style={{ width: "17rem" }}>
      <div className="sidebar-content">
        <nav>
          <ul className="component-nav-list">
            <li className="list-item" style={{ margin: "2rem 2rem 2rem 0rem" }}>
              <i
                class="fas fa-home"
                style={{ padding: "0rem 0.5rem 0rem 3rem" }}
              ></i>
              Home
            </li>
            <li className="list-item" style={{ margin: "2rem 2rem 2rem 0rem" }}>
              <i
                class="fas fa-thumbs-up"
                style={{ padding: "0rem 0.5rem 0rem 3rem" }}
              ></i>
              Liked Videos
            </li>
            <li className="list-item" style={{ margin: "2rem 2rem 2rem 0rem" }}>
              <i
                class="fas fa-play-circle"
                style={{ padding: "0rem 0.5rem 0rem 3rem" }}
              ></i>
              Playlists
            </li>
            <li className="list-item" style={{ margin: "2rem 2rem 2rem 0rem" }}>
              <i
                class="fas fa-clock"
                style={{ padding: "0rem 0.5rem 0rem 3rem" }}
              ></i>
              Watch Later
            </li>
            <li className="list-item" style={{ margin: "2rem 2rem 2rem 0rem" }}>
              <i
                class="fas fa-history"
                style={{ padding: "0rem 0.5rem 0rem 3rem" }}
              ></i>
              History
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
