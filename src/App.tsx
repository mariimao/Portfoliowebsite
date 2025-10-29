import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveGrid } from './components/InteractiveGrid';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <InteractiveGrid />
        <CustomCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
