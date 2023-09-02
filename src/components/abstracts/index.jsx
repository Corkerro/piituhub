import React from 'react';
import physics from '../../img/physics-svgrepo-com.svg';
import history from '../../img/history-svgrepo-com.svg';
import { Link } from 'react-router-dom';

export default function Abstracts() {
  return (
    <main className="page">
      <div className="abstracts">
        <div className="abstracts__container">
          <ul className="abstracts__top">
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>{'>'}</li>
            <li>
              <Link to="/abstracts">Конспекти</Link>
            </li>
          </ul>
          <div className="abstracts__grid">
            <Link to="/abstracts/physics" className="abstracts__subject">
              <div className="abstracts__subject-top">
                <img src={physics} alt="" />
              </div>
              <p>Фізика</p>
            </Link>
            <Link to="/abstracts/history" className="abstracts__subject">
              <div className="abstracts__subject-top">
                <img src={history} alt="" />
              </div>
              <p>Історія</p>
            </Link>
            <Link to="/abstracts/history" className="abstracts__subject">
              <div className="abstracts__subject-top">
                <img src={history} alt="" />
              </div>
              <p>Історія</p>
            </Link>
            <Link to="/abstracts/history" className="abstracts__subject">
              <div className="abstracts__subject-top">
                <img src={history} alt="" />
              </div>
              <p>Історія</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
