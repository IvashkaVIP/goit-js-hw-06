const itemEl = document.querySelectorAll('li.item');
console.log('Number of categories: ',itemEl.length);
console.log('');
itemEl.forEach(element => { 
    console.log('Category: ',element.firstElementChild.textContent);
    console.log('Elements: ',element.lastElementChild.children.length);
    console.log('');
});
