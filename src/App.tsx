import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Header />
        <Routes>
          {/* Redirect root to about us page */}
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;