import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./components/home";
import Scheme from './components/schemes';
import Grievance from './components/grievance';
import Blogs from './components/blogs';
import Chat from './components/chat';
import Jobs from './components/jobs';
import Footer from "./components/footer";
import BlogPost from "./components/blog_post";
import Login from "./components/login";
import Register from "./components/register";
import Start from "./components/start";
import Resume from "./components/resume";
import background from './assets/bg.jpg';



function App() {
  return (
    <>
    
    <Router>
      <div className="container ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/start" element={<Start />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
