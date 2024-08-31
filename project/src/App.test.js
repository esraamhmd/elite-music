import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Main/Header';
import TitleSection from './components/Main/TitleSection';
import Sidebar from './components/Sidebar/Sidebar';
import TrendingSection from './components/TrendingSection/TrendingSection';
import Footer from './components/Footer/Footer';
import './components/Sidebar/Sidebar.css';
import './components/Main/Main.css';
import './components/TrendingSection/TrendingSection.css';
import './components/Footer/Footer.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="title-section">
          <TitleSection />
        </div>
        <div className="trending-section">
          <TrendingSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
