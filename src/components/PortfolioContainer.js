import React, { useState, useEffect, lazy, Suspense } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Footer';
import '../Styles/Home.css';
const Gallery = lazy(() => import('./pages/gallery'));
const Contact = lazy(() => import('./pages/Contact'));

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState('/');
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  

  
  useEffect(() => {
    const preload = () => {
      if (document.getElementById('calendly-script')) return;
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(css);
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    };
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preload);
    } else {
      setTimeout(preload, 1500);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavTabs {...data} />
      <Suspense fallback={null}>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
      </Suspense>
      <Route path='*' exact/>
      <Redirect to="/" />
      
      {/* <Route path="/Resume" exact component={Resume} /> */}
      {/* <Route path="/Contact" exact component={Contact} /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default PortfolioContainer;
