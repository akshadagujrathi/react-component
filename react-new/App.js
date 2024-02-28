import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service"
import Contact from "./Pages/Contact";
import Blogs from './Pages/Blogs';
import BlogList from './Components/Blog_Com/BlogList';
import SingleBlog from './Components/Blog_Com/SingleBlog';
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
 

 
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="/" element={<BlogList />} />
        <Route path="/newblog/:blogId" element={<SingleBlog />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Contact" element={<Contact />} />
       
        
       
      </Routes>
       <Footer />
      {/* <a href="/">Home</a>
    <a href="/About">About</a> */}
 
      {/* <Home /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
