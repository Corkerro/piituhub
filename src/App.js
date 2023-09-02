import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Physics0209 from './components/abstracts/physics/02-09';
import Physics from './components/abstracts/physics/Index';
import Abstracts from './components/abstracts';
import History from './components/abstracts/history';
import History0209 from './components/abstracts/history/02-09';
import MainPage from './components/Main/MainPage';

function App() {
  const [themeColor, setThemeColor] = useState(localStorage.getItem('themeColor') || 'dark');
  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    document.querySelector('body').classList.add(localStorage.getItem('themeColor'));
  }, [themeColor]);

  // Функция для изменения themeColor
  const toggleTheme = () => {
    // Если текущий themeColor - "dark", установите его в "white", и наоборот
    document.querySelector('body').classList.remove(themeColor);
    setThemeColor(themeColor === 'dark' ? 'white' : 'dark');
    document.querySelector('body').classList.add(themeColor === 'dark' ? 'white' : 'dark');
  };

  return (
    <Router>
      <div className={`wrapper ${themeColor}`}>
        <Header themeColor={themeColor} />
        <div className="abstracts__switch" onClick={toggleTheme}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2.29V4.414C10.566 4.661 11.086 5.014 11.536 5.464C12.48 6.408 13 7.664 13 9C13 10.336 12.48 11.591 11.536 12.536C10.592 13.48 9.33602 14 8.00002 14C6.66402 14 5.40902 13.48 4.46402 12.536C3.52002 11.592 3.00002 10.336 3.00002 9C3.00002 7.664 3.52002 6.409 4.46402 5.464C4.91402 5.014 5.43402 4.661 6.00002 4.414V2.29C4.38869 2.7704 3.00412 3.81475 2.09948 5.23208C1.19485 6.6494 0.830604 8.34499 1.07335 10.0088C1.3161 11.6726 2.14961 13.1934 3.42149 14.2932C4.69336 15.393 6.3186 15.9982 8.00002 15.9982C9.68143 15.9982 11.3067 15.393 12.5785 14.2932C13.8504 13.1934 14.6839 11.6726 14.9267 10.0088C15.1694 8.34499 14.8052 6.6494 13.9005 5.23208C12.9959 3.81475 11.6113 2.7704 10 2.29ZM7.00002 0H9.00002V8H7.00002V0Z"
              fill="#CB0102"
            />
          </svg>
        </div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/abstracts" element={<Abstracts />} />
          <Route path="/abstracts/physics" element={<Physics />} />
          <Route path="/abstracts/history" element={<History />} />
          <Route path="/abstracts/physics/02-09" element={<Physics0209 />} />
          <Route path="/abstracts/history/02-09" element={<History0209 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
