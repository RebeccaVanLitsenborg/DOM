const newArticle = document.querySelector('article');
const textContents = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", 
"Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", 
"Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

  function isLight(backgroundColor) {
    // Calculate the brightness of the background color
    const rgb = backgroundColor.match(/\d+/g);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 128;
  }

textContents.forEach(content => {
  const newSection = document.createElement('section');
  const newParagraph = document.createElement('p');
  const randomBackgroundColor = getRandomColor();

  newParagraph.style.backgroundColor = randomBackgroundColor;

  if (isLight(randomBackgroundColor)) {
    newParagraph.style.color = 'black';
  } else {
    newParagraph.style.color = 'white';
  }

  newParagraph.appendChild(document.createTextNode(content));
  newSection.appendChild(newParagraph);
  newArticle.appendChild(newSection);
});


