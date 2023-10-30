const titleAttribute = document.querySelectorAll('.important');

    titleAttribute.forEach((element) => {
    element.setAttribute("title", "This is an important item");
    });

const imgElements = document.querySelectorAll('img');

    imgElements.forEach((img) => {
      if (!img.classList.contains('important')) {
        img.style.display = 'none';
      }
    });

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    const className = paragraph.className;
    if (className) {
      console.log('Paragraph Element:', paragraph, '| Class Name:', className);
    } else {
      console.log('Paragraph Element:', paragraph);
    }
  });

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

  paragraphs.forEach(paragraph => {
    if (!paragraph.hasAttribute('class')) {
      const randomColor = getRandomColor();
      paragraph.style.color = randomColor;
    }
  });

  
