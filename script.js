document.addEventListener('DOMContentLoaded', function() {
  const mercedesData = [
    {
      name: 'HONDA',
      image: 'fe0cef19b79a5c43b1227f4e4874eaf689339e4e.PNG', // Замените URL
      description:' японская транснациональная корпорация, основанная в 1948 году изобретателем и предпринимателем Соитиро Хондой и финансистом Такэо Фудзисавой, производитель автомобилей и мотоциклов.',
    },
    {
      name: 'TOYOTA',
      image: 'smart_crop_516x290.PNG', // Замените URL
      description: 'Компания основана в 1937 году Киитиро Тоёдой, сыном известного японского инженера Сакичи Тоёды. Первым автомобилем, выпущенным компанией, стал легковой автомобиль Model AA в 1936 году.',
    },
    {
      name: 'NISSAN',
      image: 'scale_1200.PNG', // Замените URL
      description: 'Компания основана 26 декабря 1933 года в результате слияния компаний «Тобата имоно» и «Нихон сангё». С 1 июня 1934 года носит название «Ниссан мотор» (по первым слогам названия компании «Нихон сангё» — «японская промышленность»).',
    },{
      name: 'MAZDA',
      image: '9d33ee7466307b3bd0546aa30c084159.PNG', // Замените URL
      description: 'В 1931 году компания начала выпускать автомобили — трёхколёсные грузовики Mazda-Go. Название Mazda появилось в честь верховного зороастрийского бога Ахура-Мазды, созвучное с фамилией основателя.',
    },{
      name: 'MITSUBISHI',
      image: 'mitsubishi-lancer-lancer-evolution-8-evolution-evo-red-road.PNG', // Замените URL
      description: 'Компания основана в 1870 году предпринимателем Ятаро Ивасаки как судоходная фирма Tsukumo Shokai. В 1873 году её переименовали в Mitsubishi Shokai. ',
    },{
      name: 'LEXUS',
      image: '755580032577680.PNG', // Замените URL
      description: 'В 1989 году было представлено первое серийное авто — Lexus LS 400. Название бренда часто относят к комбинации слов luxury («роскошь») и elegance («элегантность»), но официально утверждается, что слово lexus передаёт имидж роскоши и технологичности.',
    },

    
  ];

  const contentDiv = document.getElementById('content');

  // Функция для создания элемента модели Mercedes
  function createMercedesModel(model) {
    const modelDiv = document.createElement('div');
    
    modelDiv.classList.add('mercedes-model');

    const image = document.createElement('img');
    image.src = model.image;
    image.alt = model.name;
    image.classList.add('model-image');
    modelDiv.appendChild(image);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('model-description');

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = model.name;
    descriptionDiv.appendChild(nameHeading);

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = model.description;
    descriptionDiv.appendChild(descriptionParagraph);

    modelDiv.appendChild(descriptionDiv);

    return modelDiv;
  }

  // Отображение моделей Mercedes
  mercedesData.forEach(model => {
    const modelElement = createMercedesModel(model);
    contentDiv.appendChild(modelElement);
  });
});
