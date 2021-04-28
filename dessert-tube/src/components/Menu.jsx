export const Menu = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <nav>
          <ul className="component-nav-list">
            <li className="list-item">
              <i class="fas fa-home" style={{ margin: "1rem" }}></i>Home
            </li>
            <li className="list-item">
              <i class="fas fa-thumbs-up" style={{ margin: "1rem" }}></i>Liked
              Videos
            </li>
            <li className="list-item">
              <i class="fas fa-play-circle" style={{ margin: "1rem" }}></i>
              Playlists
            </li>
            <li className="list-item">
              <i class="fas fa-clock" style={{ margin: "1rem" }}></i>Watch Later
            </li>
            <li className="list-item">
              <i class="fas fa-history" style={{ margin: "1rem" }}></i>History
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
