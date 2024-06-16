import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Announcements from "./components/Announcements";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Announcements />
      <ImageSlider />
      <Footer />
    </div>
  );
};

export default App;
