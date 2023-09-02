import React from 'react';
import { Link } from 'react-router-dom';

export default function Physics() {
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
            <li>{'>'}</li>
            <li>
              <Link to="/abstracts/physics">Фізика</Link>
            </li>
          </ul>
          <div className="abstracts__grid">
            <Link to="/abstracts/physics/02-09" className="abstracts__abstract-card">
              <h3>02.09</h3>
              <p>Електростатика у вакуумі</p>
              <p>Закон Кулона</p>
              <p>Напруженість електричного поля</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
