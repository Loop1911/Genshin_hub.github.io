import Explore from "../component/Explore";
import Hero from "../component/Hero";
import Info from "../component/Moreinfo";
import Navbar from "../component/Navbar";
import ImageSlider from "../component/ImageSlider";
import Footer from "../component/Footer";
import withToastify from "../component/withToastify";

function Home(props) {
  const showToast = () => {
    props.showToast("Join the server ");
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc9ad748-d794-4d43-a097-341c2abd86cb/dee3p6i-bfa52749-8c76-4f50-b482-33b44f7d0a53.jpg/v1/fill/w_1192,h_670,q_70,strp/genshin_impact_blessing_of_moon_wallpaper_4k_by_n3m0sa55_dee3p6i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmM5YWQ3NDgtZDc5NC00ZDQzLWEwOTctMzQxYzJhYmQ4NmNiXC9kZWUzcDZpLWJmYTUyNzQ5LThjNzYtNGY1MC1iNDgyLTMzYjQ0ZjdkMGE1My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O8OdGuD7Q1IdVxn-fyAHG7ByS08DwiJtyRYnkWd0ar0"
        title="Your Experience Traveler's Journey"
        text="Explore Tevyat with Us "
      />

      <Explore />
      <Info />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default withToastify(Home);
