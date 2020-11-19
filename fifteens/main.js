
let dimension = 4;
let previewSize = 300;
const tileSize = Math.floor(previewSize / dimension);

let startButton = document.querySelector("button");
let infoImg = document.querySelector('.info');
const tiles = [];
 class Tile {
 constructor(x,y){
   this.tileX = x;
   this.tileY = y;
   this.targetPosX = x;
   this.targetPosY = y;
 }
 };
const images = [
    {
      author: 'Иван Айвазовский',
      name: 'Девятый вал',
      year: '1850',
    },
    {
      author: 'Илья Репин',
      name: 'Бурлаки на Волге',
      year: '1873',
    },
    {
      author: 'Илья Репин',
      name: 'Не ждали',
      year: '1888',
    },
    {
      author: 'Илья Репин',
      name: 'Вечорници',
      year: '1881',
    },
    {
      author: 'Илья Репин',
      name: 'Проводы новобранца',
      year: '1879',
    },
    {
      author: 'Илья Репин',
      name: 'Крестный ход',
      year: '1883',
    },
    {
      author: 'Илья Репин',
      name: 'Иван Грозный и сын его Иван',
      year: '1885',
    },
    {
      author: 'Илья Репин',
      name: 'Садко',
      year: '1876',
    },
    {
      author: 'Илья Репин',
      name: 'Приготовление к экзамену',
      year: '1864',
    },
    {
      author: 'Илья Репин',
      name: 'Летний пейзаж',
      year: '1879',
    },
    {
      author: 'Илья Репин',
      name: 'Запорожцы',
      year: '1891',
    },
    {
      author: 'Иван Крамской',
      name: 'Неизвестная',
      year: '1883',
    },
    {
      author: 'Сандро Боттичелли',
      name: 'Рождение Венеры',
      year: '1486',
    },
    {
      author: 'Иван Шишкин',
      name: 'Утро в сосновом лесу',
      year: '1889',
    },
    {
      author: 'Рембрандт',
      name: 'Ночной дозор',
      year: '1642',
    },
    {
      author: 'Леонардо да Винчи',
      name: 'Тайная вечеря',
      year: '1498',
    },
    {
      author: 'Сальвадор Дали',
      name: 'Постоянство памяти',
      year: '1931',
    },
    {
      author: 'Поль Гоген',
      name: 'Откуда мы пришли? Кто мы? Куда мы идём?',
      year: '1898',
    },
    {
      author: 'Эжен Делакруа',
      name: 'Свобода, ведущая народ',
      year: '1830',
    },
    {
      author: 'Михаил Врубель',
      name: 'Демон сидящий',
      year: '1890',
    },
    {
      author: 'Эдуар Мане',
      name: 'Бар в «Фоли-Бержер»',
      year: '1882',
    },
    {
      author: 'Тициан',
      name: 'Любовь земная и Любовь небесная',
      year: '1516',
    },
    {
      author: 'Михаил Нестеров',
      name: 'Видение отроку Варфоломею',
      year: '1890',
    },
    {
      author: 'Питер Брейгель',
      name: 'Притча о слепых',
      year: '1568',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Аленушка',
      year: '1881',
    },
    {
      author: 'Карл Брюллов',
      name: 'Последний день Помпеи',
      year: '1833',
    },
    {
      author: 'Пабло Пикассо',
      name: 'Девочка на шаре',
      year: '1905',
    },
    {
      author: 'Эдгар Дега',
      name: 'Голубые танцовщицы',
      year: '1897',
    },
    {
      author: 'Леонардо да Винчи',
      name: 'Мона Лиза',
      year: '1505',
    },
    {
      author: 'Микеланджело',
      name: 'Сотворение Адама',
      year: '1511',
    },
    {
      author: 'Ян Вермеер',
      name: 'Девушка с жемчужной серёжкой',
      year: '1665',
    },
    {
      author: 'Василий Суриков',
      name: 'Боярыня Морозова',
      year: '1887',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Богатыри',
      year: '1898',
    },
    {
      author: 'Андрей Рублев',
      name: 'Троица',
      year: '1411',
    },
    {
      author: 'Пабло Пикассо',
      name: 'Герника',
      year: '1937',
    },
    {
      author: 'Иероним Босх',
      name: 'Сад земных наслаждений',
      year: '1510',
    },
    {
      author: 'Эдвард Мунк',
      name: 'Крик',
      year: '1893',
    },
    {
      author: 'Марк Шагал',
      name: 'Прогулка',
      year: '1918',
    },
    {
      author: 'Иванов Александр',
      name: 'Явление Христа народу',
      year: '1857',
    },
    {
      author: 'Федотов Павел',
      name: 'Сватовство майора',
      year: '1852',
    },
    {
      author: 'Василий Верещагин',
      name: 'Апофеоз войны',
      year: '1817',
    },
    {
      author: 'Джорджоне',
      name: 'Спящая Венера',
      year: '1510',
    },
    {
      author: 'Питер Брейгель',
      name: 'Охотники на снегу',
      year: '1565',
    },
    {
      author: 'Караваджо',
      name: 'Лютнист',
      year: '1596',
    },
    {
      author: 'Рембрандт',
      name: 'Даная',
      year: '1647',
    },
    {
      author: 'Джованни Беллини',
      name: 'Пир богов',
      year: '1514',
    },
    {
      author: 'Ян ван Эйк',
      name: 'Портрет четы Арнольфини',
      year: '1434',
    },
    {
      author: 'Сандро Боттичелли',
      name: 'Весна',
      year: '1482',
    },
    {
      author: 'Леонардо да Винчи',
      name: 'Благовещение',
      year: '1475',
    },
    {
      author: 'Леонардо да Винчи',
      name: 'Дама с горностаем',
      year: '1490',
    },
    {
      author: 'Леонардо да Винчи',
      name: 'Мадонна Литта',
      year: '1491',
    },
    {
      author: 'Рафаэль',
      name: 'Дама с единорогом',
      year: '1506',
    },
    {
      author: 'Рафаэль',
      name: 'Мадонна Бельведерская',
      year: '1506',
    },
    {
      author: 'Рафаэль',
      name: 'Сикстинская Мадонна',
      year: '1520',
    },
    {
      author: 'Тициан',
      name: 'Динарий Кесаря',
      year: '1516',
    },
    {
      author: 'Тициан',
      name: 'Кающаяся Марина Магдалина',
      year: '1565',
    },
    {
      author: 'Тициан',
      name: 'Вакханалия',
      year: '1526',
    },
    {
      author: 'Тициан',
      name: 'Венера Урбинская',
      year: '1534',
    },
    {
      author: 'Тициан',
      name: 'Конный портрет Карла V',
      year: '1548',
    },
    {
      author: 'Альбрехт Дюрер',
      name: 'Адам и Ева',
      year: '1507',
    },
    {
      author: 'Альбрехт Дюрер',
      name: 'Праздник четок',
      year: '1506',
    },
    {
      author: 'Веронезе',
      name: 'Марс и Венера',
      year: '1560',
    },
    {
      author: 'Веронезе',
      name: 'Пир в доме Левия',
      year: '1563',
    },
    {
      author: 'Эль Греко',
      name: 'Апостолы Петр и Павел',
      year: '1592',
    },
    {
      author: 'Рембрандт',
      name: 'Автопортрет с Саскией',
      year: '1635',
    },
    {
      author: 'Рембрандт',
      name: 'Христос и грешница',
      year: '1644',
    },
    {
      author: 'Веласкес',
      name: 'Бахус',
      year: '1628',
    },
    {
      author: 'Веласкес',
      name: 'Инфанта Маргарита',
      year: '1654',
    },
    {
      author: 'Веласкес',
      name: 'Поклонение волхвов',
      year: '1619',
    },
    {
      author: 'Веласкес',
      name: 'Вилла Медичи в Риме. Полдень',
      year: '1630',
    },
    {
      author: 'Веласкес',
      name: 'Венера с зеркалом',
      year: '1651',
    },
    {
      author: 'Веласкес',
      name: 'Кузница вулкана',
      year: '1630',
    },
    {
      author: 'Веласкес',
      name: 'Менины',
      year: '1656',
    },
    {
      author: 'Веласкес',
      name: 'Сдача Бреды',
      year: '1635',
    },
    {
      author: 'Бартоломео Мурильо',
      name: 'Мадонна с четками',
      year: '1655',
    },
    {
      author: 'Бартоломео Мурильо',
      name: 'Явление и дар Богородицы',
      year: '1655',
    },
    {
      author: 'Бартоломео Мурильо',
      name: 'Мальчик с собакой',
      year: '1650',
    },
    {
      author: 'Бартоломео Мурильо',
      name: 'Непорочное зачатие',
      year: '1678',
    },
    {
      author: 'Никола Пуссен',
      name: 'Пейзаж с Полифемом',
      year: '1649',
    },
    {
      author: 'Ян Вермеер "Служанка с кувшином молока',
      name: 'Молочница',
      year: '1660',
    },
    {
      author: 'Жан Этьен Лиотар',
      name: 'Шоколадница',
      year: '1745',
    },
    {
      author: 'Жан Фрагонар',
      name: 'Качели',
      year: '1767',
    },
    {
      author: 'Жан Фрагонар',
      name: 'Поцелуй украдкой',
      year: '1788',
    },
    {
      author: 'Гейнсборо',
      name: 'Дама в голубом',
      year: '1780',
    },
    {
      author: 'Жан Батист Грёз',
      name: 'Избалованное дитя',
      year: '1765',
    },
    {
      author: 'Жан Батист Грёз',
      name: 'Деревенская помолвка',
      year: '1761',
    },
    {
      author: 'Владимир Боровиковский',
      name: 'Портрет Лопухиной',
      year: '1797',
    },
    {
      author: 'Джон Констебл',
      name: 'Вид на собор в Солсбери из епископского сада',
      year: '1823',
    },
    {
      author: 'Василий Тропинин',
      name: 'Кружевница',
      year: '1823',
    },
    {
      author: 'Алексей Венецианов',
      name: 'На жатве. Лето',
      year: '1827',
    },
    {
      author: 'Алексей Венециановн',
      name: 'Спящий пастушок',
      year: '1826',
    },
    {
      author: 'Алексей Венецианов',
      name: 'На пашне. Весна',
      year: '1820',
    },
    {
      author: 'Карл Брюллов',
      name: 'Итальянский полдень',
      year: '1827',
    },
    {
      author: 'Карл Брюллов',
      name: 'Всадница',
      year: '1832',
    },
    {
      author: 'Василий Перов',
      name: 'Приезд гувернантки в купеческий дом',
      year: '1866',
    },
    {
      author: 'Василий Перов',
      name: 'Тройка',
      year: '1866',
    },
    {
      author: 'Василий Перов',
      name: 'Сельский крестный ход на Пасхе',
      year: '1861',
    },
    {
      author: 'Василий Перов',
      name: 'Птицелов',
      year: '1870',
    },
    {
      author: 'Василий Перов',
      name: 'Охотники на привале',
      year: '1871',
    },
    {
      author: 'Алексей Саврасов',
      name: 'Грачи прилетели',
      year: '1871',
    },
    {
      author: 'Фёдор Васильев',
      name: 'Мокрый луг',
      year: '1872',
    },
    {
      author: 'Константин Маковский',
      name: 'Дети, бегущие от грозы',
      year: '1872',
    },
    {
      author: 'Константин Маковский',
      name: 'Боярский свадебный пир',
      year: '1883',
    },
    {
      author: 'Константин Маковский',
      name: 'Гадание',
      year: '1890',
    },
    {
      author: 'Константин Маковский',
      name: 'Портрет графини Софьи',
      year: '1890',
    },
    {
      author: 'Константин Маковский',
      name: 'Перемещение ковра Мухаммеда из Мекки в Каир',
      year: '1875',
    },
    {
      author: 'Василий Поленов',
      name: 'Деревня Окулова гора',
      year: '1860',
    },
    {
      author: 'Василий Поленов',
      name: 'Переправа через реку',
      year: '1872',
    },
    {
      author: 'Василий Поленов',
      name: 'В парке',
      year: '1874',
    },
    {
      author: 'Василий Поленов',
      name: 'Московский дворик',
      year: '1877',
    },
    {
      author: 'Василий Поленов',
      name: 'Бабушкин сад',
      year: '1878',
    },
    {
      author: 'Огюст Ренуар',
      name: 'Мост в Шату',
      year: '1875',
    },
    {
      author: 'Огюст Ренуар',
      name: 'Прогулка в Булонском лесу',
      year: '1873',
    },
    {
      author: 'Огюст Ренуар',
      name: 'Портрет Жанны Самари',
      year: '1877',
    },
    {
      author: 'Огюст Ренуар',
      name: 'Завтрак гребцов',
      year: '1881',
    },
    {
      author: 'Огюст Ренуар',
      name: 'Зонтики',
      year: '1886',
    },
    {
      author: 'Архип Куинджи',
      name: 'На острове Валааме',
      year: '1873',
    },
    {
      author: 'Архип Куинджи',
      name: 'Украинская ночь',
      year: '1876',
    },
    {
      author: 'Архип Куинджи',
      name: 'Берёзовая роща',
      year: '1879',
    },
    {
      author: 'Архип Куинджи',
      name: 'Лунная ночь на Днепре',
      year: '1880',
    },
    {
      author: 'Василий Суриков',
      name: 'Утро стрелецкой казни',
      year: '1881',
    },
    {
      author: 'Василий Суриков',
      name: 'Взятие снежного городка',
      year: '1891',
    },
    {
      author: 'Василий Суриков',
      name: 'Покорение Сибири Ермаком Тимофеевичем',
      year: '1895',
    },
    {
      author: 'Василий Суриков',
      name: 'Переход Суворова через Альпы',
      year: '1899',
    },
    {
      author: 'Валентин Серов',
      name: 'Девочка с персиками',
      year: '1887',
    },
    {
      author: 'Исаак Левитан',
      name: 'Над вечным покоем',
      year: '1894',
    },
    {
      author: 'Исаак Левитан',
      name: 'Март',
      year: '1895',
    },
    {
      author: 'Исаак Левитан',
      name: 'Золотая осень',
      year: '1895',
    },
    {
      author: 'Иван Шишкин',
      name: 'Ручей в берёзовом лесу',
      year: '1883',
    },
    {
      author: 'Иван Шишкин',
      name: 'Рожь',
      year: '1878',
    },
    {
      author: 'Иван Шишкин',
      name: 'Корабельная роща',
      year: '1898',
    },
    {
      author: 'Александра Маковский',
      name: 'Надоела',
      year: '1897',
    },
    {
      author: 'Франсуа Буше',
      name: 'Четыре сезона - Весна',
      year: '1755',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Витязь на распутье',
      year: '1878',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Ковер-самолёт',
      year: '1880',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Три царевны подземного царства',
      year: '1884',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Иван-царевич на Сером Волке',
      year: '1888',
    },
    {
      author: 'Виктор Васнецов',
      name: 'Царь Иван Васильевич Грозный',
      year: '1896',
    },
    {
      author: 'Николай Богданов-Бельский',
      name: 'Устный счёт',
      year: '1895',
    },
    {
      author: 'Николай Богданов-Бельский',
      name: 'У дверей школы',
      year: '1897',
    },
    {
      author: 'Эдуард Мане',
      name: 'Женщина с кувшином',
      year: '1858',
    },
    {
      author: 'Клод Лоррен',
      name: 'Отплытие святой Урсулы',
      year: '1614',
    },
    {
      author: 'Карл Лемох',
      name: 'Варька',
      year: '1893',
    },
    {
      author: 'Василий тропинин',
      name: 'Девушка с горшком роз',
      year: '1850',
    },
    {
      author: 'Гюстав Курбе',
      name: 'Мастерская художника',
      year: '1855',
    },
    {
      author: 'Иван Богданов',
      name: 'За расчётом',
      year: '1890',
    },
    {
      author: 'Иван Богданов',
      name: 'Новичок',
      year: '1893',
    },
    {
      author: 'Рене Магритт',
      name: 'Сын человеческий',
      year: '1964',
    },
    {
      author: 'Сальвадор Дали',
      name: 'Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения',
      year: '1944',
    },
    {
      author: 'Казимир Малевич',
      name: 'Черный квадрат',
      year: '1915',
    },
  ];
  



const getImgUrl = function(){
    let base = './assets/images/';
    let rndNum = Math.floor(Math.random()*151);
    console.log(rndNum,base+rndNum,images[rndNum-1] );
    infoImg.innerHTML = `${images[rndNum-1].author} "${images[rndNum-1].name}"`;
    return `${base}${rndNum}.jpg`;
} 

const drawImagePart = function (ctx, img, i, j, tileSize, ratio, margin){
  ctx.drawImage(img,
    i * tileSize * ratio,     // image-x
    j * tileSize * ratio,     // image-y
    tileSize * ratio,         // image-width
    tileSize * ratio,         // image-height
    i * tileSize + margin,    // canvas-x
    j * tileSize + margin,    // canvas-y
    tileSize - (margin * 2),  // canvas-width
    tileSize - (margin * 2),  // canvas-height
  );
};
    

const createTiles = function(){

  for(let i=0; i<dimension; i++){
    for(let j=0; j<dimension;j++){
      console.log(i,j);
      tiles.push(new Tile(i,j));
      
      
 
    }
  }


}

const startGame = function(){
let canvas = document.querySelector("#game-board");
let ctx = canvas.getContext('2d');
canvas.width = previewSize;
canvas.height = previewSize;
ctx.fillRect(0,0,canvas.width,canvas.width);
const img = new Image();
img.src = getImgUrl();
img.addEventListener('load', ()=>{ 
let ratio = img.width / previewSize;
for(let i=0; i<dimension; i++){
  for(let j=0; j<dimension;j++){
    console.log(i,j);
    tiles.push(new Tile(i,j));
    drawImagePart(ctx, img, i, j, tileSize, ratio, 3);
    

  }
}
 

 //ctx.drawImage(img,0,0,img.width,img.width,0,0,canvas.width, canvas.width);

}) 
}








startButton.addEventListener('click',startGame);