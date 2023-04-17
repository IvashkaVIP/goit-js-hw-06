const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
    // функция создания разметки для одного элемента li из одного элемента массива
const makeImageItem = ({ url, alt }) => {
  return `
    <li>
      <img src="${url}" alt="${alt}">
    </li>
  `;
};
    // функция создания разметки для всех элементов массива + делаем одной строкой    
const makeImagesList = images.map(makeImageItem).join('');
    // выбираем селектор для вставки
const imagesListContainer = document.querySelector('.gallery');
    // вставляем внутрь селектора в конец
imagesListContainer.insertAdjacentHTML('beforeend', makeImagesList);

// console.log(makeImageItem(images[0]))
// console.log(makeImagesList);
