const newArticle = document.querySelector('article');
const textContents = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", 
"Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", 
"Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

textContents.forEach(content => {
  const newSection = document.createElement('section');
  const newParagraph = document.createElement('p');
  newParagraph.appendChild(document.createTextNode(content));
  newSection.appendChild(newParagraph);
  newArticle.appendChild(newSection);
});
