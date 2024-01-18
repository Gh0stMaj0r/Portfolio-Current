//https://www.figma.com/community/file/1118248748041249031
//https://www.figma.com/community/file/1191026033275812161
//https://www.behance.net/gallery/176332383/Hi-Dev-Web-Developer-portfolio-landing-page?tracking_source=search_projects&l=11
//https://www.behance.net/gallery/157781767/Design-a-cool-portfolio-for-a-web-developer?tracking_source=search_projects&l=2

import React from 'react';
import './App.scss';
import './Colors/Colors.scss';

import Home from './Homepage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
