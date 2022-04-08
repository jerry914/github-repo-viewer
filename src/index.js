import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRepo from './components/ListRepo';
import RepoData from './components/RepoData';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/github-repo-viewer/" element={<App />} />
      <Route path="/github-repo-viewer/users/:username/repos" element={<ListRepo />} />
      <Route path="/github-repo-viewer/users/:username/repos/:repo" element={<RepoData />} />
    </Routes>
  </BrowserRouter>
)