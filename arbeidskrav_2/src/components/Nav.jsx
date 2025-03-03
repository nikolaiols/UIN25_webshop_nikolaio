import React from 'react';

import {Route, Routes, Link} from "react-router-dom"

export default function Nav({ HtmlPage, CssPage, JavascriptPage, ReactPage, SanityPage }){
    return(
    
      <>
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
        </>
      
    );
}
