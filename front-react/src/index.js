// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import BlogDetail from './pages/Detalhes';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Edicao from './pages/Edicao';
import CategoriaBlog from './pages/CategoriaBlog';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* The Home component will be rendered when the path is '/' */}
          <Route index element={<Home />} />

          {/* The BlogDetail component will be rendered when the path matches '/blog/:id' */}
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/categoria/blogs/:id" element={<CategoriaBlog />} />

          <Route path="/admin/cadastro" element={<Cadastro />} />
          <Route path="/admin/listagem" element={<Listagem />} />
          <Route path="/admin/edicao/:id" element={< Edicao/>} />

          {/* Add more routes for additional pages */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
