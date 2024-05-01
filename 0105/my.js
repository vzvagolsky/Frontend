fetch('http://universities.hipolabs.com/search?country=Kazakhstan')
  .then(response => response.json())

  .then(data => {

    console.log('Информация о университетах в Казахстане:');
    data.forEach(university => {
      console.log('Университет:', university.name);
      console.log('Страна:', university.country);
      console.log('Веб-сайт:', university.web_pages[0]);
      console.log('------------------------------------');
    });
  })
  .catch(error => console.error('Ошибка:', error));