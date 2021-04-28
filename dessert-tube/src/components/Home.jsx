import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { VideoListing } from "./VideoListing";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <section className="container">
        <Menu />
        <VideoListing />
      </section>
    </div>
  );
};
