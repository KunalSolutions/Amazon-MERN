import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import SubHeader from "./Component/SubHeader";
import Homepage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail"; 
import MultipleCard from "./Pages/HomePage/MultipleCard";
const App = () => {
  return (
    <Router>
      <Header />
      <SubHeader />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Individual Product Page */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
