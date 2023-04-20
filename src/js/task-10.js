function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const qantityBoxes = document.querySelector("#controls>input");
const containerBoxes = document.querySelector('#boxes');

const creatBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');

creatBoxesBtn.addEventListener('click', () => {
  if (!qantityBoxes.value) {
    alert('Задайте количество боксов!');
    return;
  } 
  creatBoxes(qantityBoxes.value);
})

destroyBoxesBtn.addEventListener('click', () => {
  if (!containerBoxes.children.length) {
    alert('Сначала необходимо создать боксы!');
    return;
  }
  destroyBoxes();
  qantityBoxes.value = '';
} )



function creatBoxes(amount) {
  const arrayBoxes = [];
  let sizeBoxes = 30;
  
  for (let i = 0; i < amount; i++) {
    arrayBoxes[i] = `<div style = "background-color:${getRandomHexColor()}; width:${sizeBoxes}px; height:${sizeBoxes}px;"></div>`;
    sizeBoxes += 10; 
  }


  containerBoxes.insertAdjacentHTML("afterbegin", arrayBoxes.join(''));


  
  
//   console.log(amount);
//   console.dir(arrayBoxes);
}

function destroyBoxes() {
  const childBoxes = document.querySelectorAll('#boxes div');

  childBoxes.forEach(element => {
    element.remove();
  });
  
  // childBoxes.map(item => { item.remove(); });
  // console.log(childBoxes);
  
}


//console.log(formControls);
//console.log(qantityBoxes);