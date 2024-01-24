import Header from "./components/header";
import "./App.css";
import Herosection from "./components/Hero-section";
import Companies from "./components/companies";
import Conversion from "./components/conversion";
import Testimonies from "./components/Testimonies";
import Faq from "./components/faq";
import Onboard from "./components/onboard";
import Overview from "./components/overview";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="main-section">
        <Header />
        <Herosection />
      </div>
      <Companies />
      <Conversion />
      <Testimonies />
      <Faq />
      <Onboard />
      <Overview />
      <Footer />
    </>
  );
}

export default App;
