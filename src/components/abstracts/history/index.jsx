import React from 'react';
import { Link } from 'react-router-dom';

export default function History() {
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
              <Link to="/abstracts/history">Історія</Link>
            </li>
          </ul>
          <div className="abstracts__grid">
            <Link to="/abstracts/history/02-09" className="abstracts__abstract-card">
              <h3>02.09</h3>
              <p>Предмет дисципліни</p>
              <p>Історія та культура України</p>
            </Link>
            <Link to="/abstracts/history/04-09" className="abstracts__abstract-card">
              <h3>04.09</h3>
              <p>Архаїчна доба на теренах України, витоки укр культури</p>
              <p>Кам'яний вік</p>
              <p>Мідно-кам'яний вік (енеоліт) </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
