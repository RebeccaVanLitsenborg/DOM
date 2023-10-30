document.title = "Modifying the DOM"

/*
document.body.style.backgroundColor = "#FF69B4";
*/

const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  document.body.style.backgroundColor = getRandomColor();

const collection = document.body.children;
for(let i=0; i < collection.length; i++) {
    console.log(collection[i]);
}





