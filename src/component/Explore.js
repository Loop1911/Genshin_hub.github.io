import Genshin1 from "../assets/Raiden_Inno.jpg";
import Genshin2 from "../assets/1240579.jpg";
import "./ExploreStyle.css";

const Explore = () => {
  return (
    <div className="Explore">
      <h1>Design Insights</h1>
      <p>Ruler of Eternity</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Raiden Shogun</h2>
          <p>
            The Raiden Shogun is unique as she is comprised of two beings in one
            body: Ei, the current Electro Archon of Inazuma; and the Shogun, the
            puppet created by Ei to act as the ruler of Inazuma in her stead,
            which also serves as her vessel.
          </p>
        </div>
        <div className="image">
          <img alt="img1" src={Genshin1} />
          <img alt="img1" src={Genshin2} />
        </div>
      </div>
    </div>
  );
};
export default Explore;
