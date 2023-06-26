import Hero from "../component/Hero";
import ImageSlider from "../component/ImageSlider";
import Navbar from "../component/Navbar";

function Nation() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://e1.pxfuel.com/desktop-wallpaper/72/672/desktop-wallpaper-genshin-impact-1-6-adds-a-new-character-and-a-touch-of-wind-waker-new-region-teased-genshin-impact-landscape.jpg"
        title="Nations"
        text="MOnstadt||Liyue||Inazuma||Sumeru||Fontain||Natlan||Sheznaya"
      />
      <br></br>
      <ImageSlider />
    </>
  );
}

export default Nation;
