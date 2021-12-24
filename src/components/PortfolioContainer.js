import React, { useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';
import Footer from './Footer';
import '../Styles/Home.css';
import 'materialize-css';
const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('/');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  

  
  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Route path="/" exact component={Home} />
      <Route path="/Projects" exact component={Projects} />
      {/* <Route path="/Resume" exact component={Resume} /> */}
      {/* <Route path="/Contact" exact component={Contact} /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default PortfolioContainer;
