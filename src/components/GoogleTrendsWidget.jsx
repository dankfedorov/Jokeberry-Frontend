import React, { useEffect } from 'react';

const GoogleTrendsWidget = () => {
  useEffect(() => {
    // Создаем элемент <script> для загрузки embed_loader.js
    const script = document.createElement('script');
    script.src = 'https://ssl.gstatic.com/trends_nrtr/3994_RC01/embed_loader.js';
    script.async = true;

    // Обработчик для выполнения кода после загрузки скрипта
    script.onload = () => {
      // Инициализация виджета Google Trends
      window.trends.embed.renderExploreWidget(
        'TIMESERIES',
        {
          comparisonItem: [
            { keyword: 'react', geo: '', time: 'today 12-m' },
            { keyword: 'vue', geo: '', time: 'today 12-m' },
            { keyword: 'angular', geo: '', time: 'today 12-m' },
          ],
          category: 0,
          property: '',
        },
        {
          exploreQuery: 'q=react,vue,angular&hl=ru&date=today 12-m,today 12-m,today 12-m',
          guestPath: 'https://trends.google.com:443/trends/embed/',
        }
      );
    };

    // Добавляем скрипт в DOM
    document.body.appendChild(script);

    // Удаляем скрипт при размонтировании компонента (опционально)
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  return (
    <div>
      <h1>График популярности React, Vue и Angular</h1>
      <div id="trends-widget"></div>
    </div>
  );
};

export default GoogleTrendsWidget;