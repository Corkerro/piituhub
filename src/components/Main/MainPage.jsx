import React from 'react';
import Img from '../../img/mainHero.png';

export default function MainPage() {
  return (
    <main className="page">
      <div className="main">
        <div className="main__container">
          <div className="main__left">
            <h1>Запиши своє ім'я у світі Інновацій</h1>
            <p>
              Ми віримо в потужний вплив інновацій на те, як ми живемо та працюємо. Тому ми створили
              цей хаб, де творці, вчені та мрійники знаходяться разом, щоб реалізувати навіть
              найнезвичайніші ідеї. Тут ми ростемо разом, використовуючи взаємодію як інструмент для
              розвитку, де кожен учасник приносить свій внесок у формуванні світових трендів
            </p>
            <div className="main__buttons">
              <a href="" className="button _fill">
                Доєднатись
              </a>
              <div></div>
              <a href="" className="button _stroke">
                Абітурієнту
              </a>
            </div>
          </div>
          <img src={Img} alt="" className="main__img" />
        </div>
      </div>
    </main>
  );
}
