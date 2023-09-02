import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

export default function Header({ themeColor }) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  // Функция, которая будет срабатывать при смене ссылки
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const [isWidth550, setWidth550] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth550(window.innerWidth >= 500);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояния ширины окна
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('lock');
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
      setTimeout(() => {
        document.documentElement.classList.remove('lock');
      }, 300);
    }
  }, [isMenuOpen]);

  const color = themeColor === 'dark' ? 'fff' : '011F3D';

  const buttons = (
    <>
      <a href="#" className="button _stroke">
        Зареєструватись
      </a>
      <a href="#" className="button _fill">
        Увійти
      </a>
    </>
  );

  return (
    <header className="header">
      <div className="header__container">
        <a href="" className="header__logo">
          <svg
            width="146"
            height="25"
            viewBox="0 0 146 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 24.537V1.38889H10.1949C12.2338 1.38889 13.9861 1.7306 15.4516 2.41402C16.9383 3.09744 18.0853 4.08951 18.8923 5.39021C19.6994 6.66887 20.103 8.19004 20.103 9.95371C20.103 11.6953 19.6994 13.2055 18.8923 14.4841C18.0853 15.7628 16.9383 16.7549 15.4516 17.4603C13.9861 18.1437 12.2338 18.4854 10.1949 18.4854H3.50448L6.30807 15.6415V24.537H0ZM6.30807 16.336L3.50448 13.3267H9.81255C11.1294 13.3267 12.1064 13.0291 12.7436 12.4339C13.402 11.8386 13.7312 11.0119 13.7312 9.95371C13.7312 8.87346 13.402 8.03571 12.7436 7.44048C12.1064 6.84524 11.1294 6.54762 9.81255 6.54762H3.50448L6.30807 3.53836V16.336Z"
              fill={`#${color}`}
            />
            <path
              d="M39.0431 24.537V6.58069H32.1934V1.38889H52.169V6.58069H45.3512V24.537H39.0431Z"
              fill={`#${color}`}
            />
            <path
              d="M64.4673 25C61.1752 25 58.6052 24.0631 56.7574 22.1892C54.9096 20.3153 53.9857 17.6587 53.9857 14.2196V1.38889H60.2938V14.0212C60.2938 16.0053 60.6654 17.4272 61.4088 18.287C62.1734 19.1468 63.2142 19.5767 64.531 19.5767C65.8478 19.5767 66.8779 19.1468 67.6213 18.287C68.3647 17.4272 68.7364 16.0053 68.7364 14.0212V1.38889H74.9489V14.2196C74.9489 17.6587 74.025 20.3153 72.1771 22.1892C70.3293 24.0631 67.7594 25 64.4673 25Z"
              fill={`#${color}`}
            />
            <path
              d="M94.1322 1.38889H100.44V24.537H94.1322V1.38889ZM85.5303 24.537H79.2222V1.38889H85.5303V24.537ZM94.5782 15.5093H85.0842V10.086H94.5782V15.5093Z"
              fill={`#${color}`}
            />
            <path
              d="M111.867 24.8347C110.465 24.8347 109.201 24.5481 108.076 23.9749C106.971 23.4017 106.1 22.5088 105.463 21.2963C104.847 20.0617 104.539 18.5075 104.539 16.6336V6.61376H110.593V15.6085C110.593 16.9974 110.837 17.9894 111.325 18.5847C111.835 19.1799 112.547 19.4775 113.46 19.4775C114.055 19.4775 114.596 19.3342 115.085 19.0476C115.573 18.761 115.966 18.3091 116.263 17.6918C116.561 17.0525 116.709 16.2368 116.709 15.2447V6.61376H122.763V24.537H116.996V19.4775L118.111 20.8995C117.517 22.2222 116.656 23.2143 115.531 23.8757C114.405 24.515 113.184 24.8347 111.867 24.8347Z"
              fill={`#${color}`}
            />
            <path
              d="M137.526 24.8347C135.975 24.8347 134.679 24.504 133.639 23.8426C132.619 23.1812 131.855 22.1671 131.345 20.8003C130.835 19.4334 130.58 17.6808 130.58 15.5423C130.58 13.448 130.846 11.7174 131.377 10.3505C131.929 8.98369 132.725 7.96958 133.766 7.3082C134.807 6.64683 136.06 6.31614 137.526 6.31614C139.097 6.31614 140.52 6.69092 141.795 7.44048C143.09 8.19004 144.11 9.25926 144.853 10.6481C145.618 12.015 146 13.6464 146 15.5423C146 17.4603 145.618 19.1138 144.853 20.5026C144.11 21.8695 143.09 22.9387 141.795 23.7103C140.52 24.4599 139.097 24.8347 137.526 24.8347ZM126.662 24.537V0H132.715V9.62302L132.396 15.5423L132.428 21.4616V24.537H126.662ZM136.251 19.8413C136.931 19.8413 137.536 19.6759 138.067 19.3452C138.619 19.0146 139.055 18.5295 139.373 17.8902C139.713 17.2288 139.883 16.4462 139.883 15.5423C139.883 14.6384 139.713 13.8779 139.373 13.2606C139.055 12.6213 138.619 12.1362 138.067 11.8056C137.536 11.4749 136.931 11.3095 136.251 11.3095C135.572 11.3095 134.956 11.4749 134.403 11.8056C133.872 12.1362 133.437 12.6213 133.097 13.2606C132.779 13.8779 132.619 14.6384 132.619 15.5423C132.619 16.4462 132.779 17.2288 133.097 17.8902C133.437 18.5295 133.872 19.0146 134.403 19.3452C134.956 19.6759 135.572 19.8413 136.251 19.8413Z"
              fill={`#${color}`}
            />
            <path
              d="M21 3.86553C21 1.33887 21.0115 1.13345 21.1558 1.07033C21.2463 1.03075 22.0186 1.00133 22.9965 1.00012C24.4419 0.998386 24.7046 1.01383 24.8442 1.10878C25.1391 1.30911 25.0409 1.5731 24.3292 2.49438C23.9563 2.97702 23.5721 3.47717 23.4751 3.60589C23.3783 3.73461 23.1878 3.97532 23.0518 4.14082C22.9158 4.30631 22.6025 4.71252 22.3554 5.04351C21.3941 6.33128 21.1123 6.67691 21.0572 6.63552C21.0257 6.61192 21 5.3654 21 3.86553Z"
              fill={`#${color}`}
            />
            <path
              d="M21.1629 24.5C21.0069 24.394 21 24.0657 21 16.7423V9.09523L22.9813 9.11321L24.9626 9.1312L24.9852 16.7484C25.006 23.7648 24.9962 24.3752 24.8601 24.4881C24.7267 24.5988 24.548 24.6107 23.019 24.6107C21.5683 24.6107 21.3023 24.5948 21.1629 24.5Z"
              fill={`#${color}`}
            />
            <path
              d="M28.9154 4.07705C26.9458 1.56912 26.833 1.38024 27.1505 1.12229C27.2859 1.01224 27.4689 1 28.9842 1C30.423 1 30.6916 1.01605 30.8337 1.11065C30.9896 1.21435 31 1.39087 31 3.93217C31 5.60689 30.9676 6.61875 30.9154 6.57951C30.8688 6.54461 29.9688 5.41847 28.9154 4.07705Z"
              fill="#FB0102"
            />
            <path
              d="M27 16.6898C27 12.5094 27.0273 9.06907 27.0606 9.0446C27.0939 9.02006 27.9939 9 29.0606 9H31V16.6335C31 23.6428 30.9877 24.2771 30.8495 24.3893C30.7141 24.4994 30.5311 24.5116 29.0158 24.5116C27.577 24.5116 27.3084 24.4956 27.1663 24.401C27.0071 24.295 27 23.9681 27 16.6898Z"
              fill="#FB0102"
            />
          </svg>
        </a>
        <div className="header__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/abstracts" className="menu__link">
                  Конспекти
                </Link>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Викладачі
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Освітні програми
                </a>
              </li>
              {isWidth550 ? '' : buttons}
            </ul>
          </nav>
        </div>
        <div className="header__buttons">
          {isWidth550 ? buttons : ''}
          <button
            type="button"
            className="menu__icon icon-menu"
            onClick={() => setMenuOpen(!isMenuOpen)}>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
