document.body.addEventListener('keyup', (event) => {
    if (event.key === 'r') {
      shuffleListWithFastAndFurious();
    } else if (event.key === 'd') {
      cloneFastAndFuriousElement();
    }
  });
  
  function shuffleListWithFastAndFurious() {
    const ul = document.querySelector('ul');
    const listItems = Array.from(ul.querySelectorAll('li'));
  
    let fastAndFuriousElement = listItems.find(item => item.textContent.includes("Fast and Furious"));
  
    if (fastAndFuriousElement) {
      ul.removeChild(fastAndFuriousElement);
  
      const otherItems = listItems.filter(item => item !== fastAndFuriousElement);
  
      for (let i = otherItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherItems[i], otherItems[j]] = [otherItems[j], otherItems[i]];
      }
  
      ul.appendChild(fastAndFuriousElement);
      otherItems.forEach(item => ul.appendChild(item));
    }
  }
  function cloneFastAndFuriousElement() {
    const ul = document.querySelector('ul');
    const selectNewElement = newDiv.querySelector('select');
    const selectedOption = selectNewElement.value;
  
    if (selectedOption === 'important') {
      const listItems = Array.from(ul.querySelectorAll('li'));
      let fastAndFuriousElement = listItems.find(item => item.textContent.includes("Fast and Furious"));
  
      if (fastAndFuriousElement) {
        fastAndFuriousElement.classList.add('important');
        const clone = fastAndFuriousElement.cloneNode(true);
        ul.insertBefore(clone, ul.firstElementChild); 
      }
    }
  }
  
const ul = document.querySelector('ul');

for (let i = 0; i < ul.childNodes.length; i++) {
  const child = ul.childNodes[i];

  if (child.nodeType === 1) {
    console.log(child.textContent);
  }
}

const listItems = ul.childNodes;

let fastAndFuriousElement = null;
for (let i = 0; i < listItems.length; i++) {
  const child = listItems[i];
  if (child.nodeType === 1 && child.textContent.includes("Fast and Furious")) {
    fastAndFuriousElement = child;
    break;
  }
}

listItems.forEach(item => {
    if (item.nodeType === 1) {
      item.addEventListener('click', () => {
        if (item === fastAndFuriousElement) {
          alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars, it's about family.");
        } else {
          alert(item.textContent);
        }
      });
    }
  });

if (fastAndFuriousElement) {
  fastAndFuriousElement.classList.add('important');

  if (fastAndFuriousElement !== ul.firstElementChild) {
    ul.insertBefore(fastAndFuriousElement, ul.firstElementChild);
  }
}

const newDiv = document.createElement('div');

ul.parentElement.insertBefore(newDiv, ul);

const selectElement = document.createElement('select');

// Create and append the "important franchises" option
const importantOption = document.createElement('option');
importantOption.value = "important";
importantOption.text = "Important franchises";
selectElement.appendChild(importantOption);

// Create and append the "normal franchises" option
const normalOption = document.createElement('option');
normalOption.value = "normal";
normalOption.text = "Normal franchises";
selectElement.appendChild(normalOption);

// Append the <select> to the <div>
newDiv.appendChild(selectElement);

// Insert the new <div> before the list
ul.parentElement.insertBefore(newDiv, ul);



const selectNewElement = newDiv.querySelector('select');
const newListItems = ul.querySelectorAll('li');
const importantItems = ul.querySelectorAll('li.important');

selectNewElement.addEventListener('change', function () {
    const selectedOption = selectNewElement.value;
  
    newListItems.forEach(item => {
      if (selectedOption === 'all') {
        item.style.display = 'block';
      } else if (selectedOption === 'important' && item.classList.contains('important')) {
        item.style.display = 'block';
      } else if (selectedOption === 'normal' && !item.classList.contains('important')) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })

    const cloneButton = document.querySelector('#clone-button');
  cloneButton.style.display = (selectedOption === 'normal') ? 'none' : 'block';
});


// Set the initial visibility when the page loads
newListItems.forEach(item => {
  item.style.display = 'none';
});

// Show "Fast and Furious" with the class "important" by default when "important franchises" is selected
if (selectNewElement.value === 'important') {
  importantItems.forEach(item => {
    item.style.display = 'block';
  });
}















  
  
  
  
  
  






