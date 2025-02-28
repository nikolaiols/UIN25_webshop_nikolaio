import React from 'react';

import {Route, Routes, Router, Link} from "react-router"

export default function Nav({ HtmlPage, CssPage, JavascriptPage, ReactPage, SanityPage }){
    return(
      <Router>
        <nav>
          <ul>
              <li><Link to="/html">HTML</Link></li>
              <li><Link to="/css">CSS</Link></li>
              <li><Link to="/javascript">JAVASCRIPT</Link></li>
              <li><Link to="/react">REACT</Link></li>
              <li><Link to="/sanity">SANITY & HEADLESS CMS</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/html" element={<HtmlPage />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/javascript" element={<JavascriptPage />} />
          <Route path="/react" element={<ReactPage />} />
          <Route path="/sanity" element={<SanityPage />} />
        </Routes>
      </Router> 
    );
}
