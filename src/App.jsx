// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/About.jsx';
import Consulting from './pages/Consulting.jsx';
// import Blog from "./components/blogs/Blog.js";
// import BlogPage from './components/blogs/BlogPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/consulting-physiotherapy' element={<Consulting />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/:slug" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;