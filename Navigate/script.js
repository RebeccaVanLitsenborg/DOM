const olElement = document.querySelector('section:first-of-type ol');

if (olElement) {
  const lastListItem = olElement.lastElementChild;
  olElement.insertBefore(lastListItem, olElement.firstElementChild);
}

const secondH2 = document.querySelector('section:nth-of-type(2) h2');
const thirdH2 = document.querySelector('section:nth-of-type(3) h2');

if (secondH2 && thirdH2) {
  const tempText = secondH2.textContent;
  secondH2.textContent = thirdH2.textContent;
  thirdH2.textContent = tempText;
}


