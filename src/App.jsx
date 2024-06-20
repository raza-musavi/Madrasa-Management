import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
