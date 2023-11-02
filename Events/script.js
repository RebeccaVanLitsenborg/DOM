const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


const actionsquareWrapper = document.querySelector(".actionsquare-wrapper");
const displaySquareWrapper = document.querySelector(".displayedsquare-wrapper");

actionsquareWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("actionsquare")) {
    // Get the background color of the clicked square
    const bgColor = window.getComputedStyle(event.target).getPropertyValue("background-color");

    // Create a new .displayedsquare div
    const displayedSquare = document.createElement("div");
    displayedSquare.classList.add("displayedsquare");
    displayedSquare.style.backgroundColor = bgColor;

    // Append the new .displayedsquare to the .displayedsquare-wrapper
    displaySquareWrapper.appendChild(displayedSquare);

    const color = getSquareColorName(event.target); // Get the color name
    logAction(color);
  }
});

function getSquareColorName(square) {
  const bgColor = window.getComputedStyle(square).getPropertyValue("background-color");
  const colorMap = {
    "rgb(0, 255, 0)": "green",
    "rgb(255, 0, 255)": "violet",
    "rgb(255, 165, 0)": "orange"
  };
  return colorMap[bgColor] || "unknown color";
}

function logAction(color) {
  const actionLogItem = document.createElement("li");
  actionLogItem.textContent = `[${getElapsedTime()}] Created a new ${color} square`;

  // Append the new log item to the first <ul> found in the document
  
  const actionLogLists = document.querySelectorAll('ul');
  if (actionLogLists.length > 0) {
    actionLogLists[0].appendChild(actionLogItem);
  }
}

  const getRandomColor = () => {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  };

  function logKeyAction(action) {
    const actionLog = document.querySelector('ul');
    const actionLogKeyItem = document.createElement('li');
    actionLogKeyItem.textContent = action;
  
    actionLog.appendChild(actionLogKeyItem);
  }

  document.body.addEventListener('keyup', function(event) {
    if (event.key === ' ') { // Log when the spacebar is pressed
      logKeyAction(`[${getElapsedTime()}] Used the spacebar`);
      
      // Change the background color when the spacebar is pressed
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    }
  });

  let isSKeyPressed = false;
  let isLKeyPressed = false;
  actionLog = document.querySelector('ul');
  displayedSquare = document.querySelector('.displaySquareWrapper');
  
  document.body.addEventListener('keydown', function (event) {
    if (event.code === 'KeyL' && !isLKeyPressed) {
      isLKeyPressed = true;
      actionLog.innerHTML = ''; // Clear the entire log
    } else if (event.code === 'KeyS' && !isSKeyPressed) {
        isSKeyPressed = true;
        while (displaySquareWrapper.firstChild) {
          displaySquareWrapper.removeChild(displaySquareWrapper.firstChild);
        }
    }
  });
  
  document.body.addEventListener('keyup', function (event) {
    if (event.code === 'KeyL') {
      isLKeyPressed = false;
    } else if (event.code === 'KeyS') {
      isSKeyPressed = false;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const displaySquareWrapper = document.querySelector(".displayedsquare-wrapper");


    displaySquareWrapper.addEventListener("click", function (event) {
        if (event.target.classList.contains("displayedsquare")) {
            const color = window.getComputedStyle(event.target).getPropertyValue("background-color");
            alert(`The color of this square is:${color}`);
        }
    });
});





  
  
  
  
  
  
  
 
  
  
  
  
  
  
  

