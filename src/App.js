import "./style.css";
import withToastify from "./component/withToastify";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import Nation from "./Routes/Nation";

import SignUpForm from "./component/SignUpForm";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact us" element={<Contact />} />
        <Route path="/Nations" element={<Nation />} />
        <Route path="/signupform" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default withToastify(App);
