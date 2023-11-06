const heading = document.createElement('h1');
heading.textContent = "Becca's Top Movie & Series Collection";

const paragraph = document.createElement('p');
paragraph.textContent = "Explore some of my all time favourite movies and series! Here are some examples that I could happily binge watch over and over again without getting bored.";
paragraph.classList.add('intro-paragraph');

const collection = [
    {
      name: 'Top Gun',
      director: 'Tony Scott',
      releaseYear: 1986,
      picture: 'images/top-gun.jpg',
      genre: ['Action', 'Drama'],
      cast: ['Tom Cruise', 'Kelly McGillis', 'Val Kilmer', 'Anthony Edwards', 'Tom Skerritt'],
      description: "After losing his best friend, top pilot Maverick is given another chance to redeem himself. He struggles to be at his best, both as a pilot and as a person. In the midst of this, he finds himself in a passionate and complex relationship with his civilian instructor, Charlie.",
      link: 'https://youtu.be/xa_z57UatDY?si=eonffzQN-dibfa9S',
    },

    {
        name: 'Top Gun: Maverick',
        director: 'Joseph Kosinski',
        releaseYear: 2022,
        picture: 'images/top-gun-maverick.jpg',
        genre: ['Action', 'Drama'],
        cast: ['Tom Cruise', 'Miles Teller', 'Val Kilmer', 'Glen Powell', 'Jennifer Connely'],
        description: "In this sequel to the 1986 classic 'Top Gun', Maverick (Tom Cruise) The story centres on Maverick, an instructor mentoring a new generation of pilots, including Goose's son. The film explores modern aerial combat and Maverick's legacy while delivering intense action sequences.",
        link: 'https://youtu.be/giXco2jaZ_4?si=dzO-4oKIal4u0W-U',
      },

      {
        name: 'Gladiator',
        director: 'Ridley Scott',
        releaseYear: 2000,
        picture: 'images/gladiator.jpg',
        genre: ['History', 'Drama', 'Adventure', 'Action'],
        cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Oliver Reed', 'Richard Harris'],
        description: "Gladiator is a 2000 epic film starring Russell Crowe as Maximus, a Roman general betrayed and enslaved, who seeks vengeance against the corrupt Emperor Commodus (Joaquin Phoenix). It's a tale of revenge, honour, and the fight for justice in ancient Rome.",
        link: 'https://youtu.be/P5ieIbInFpg?si=Fp2w5gdF7vMSenfF',
      },

      {
        name: 'King Arthur',
        director: 'Antoine Fuqua',
        releaseYear: 2004,
        picture: 'images/king-arthur.jpeg',
        genre: ['Adventure', 'Drama', 'History', 'War'],
        cast: ['Clive Owen', 'Ioan Gruffudd',  'Keira Knightly', 'Mads Mikkelson', 'Joel Edgerton'],
        description: "The 2004 film 'King Arthur,' directed by Antoine Fuqua, reimagines the Arthurian legend. Clive Owen plays Arthur, a Roman commander leading a diverse group against Saxon invaders. It's a gritty, historical take on the myth, emphasizing loyalty and sacrifice.",
        link: 'https://youtu.be/4M4D8vyK1mA?si=2sbVhQ2DeDAE_nTt',
      },

      {
        name: 'Spirited Away',
        director: 'Hayao Miyazaki',
        releaseYear: 2002,
        picture: 'images/spirited-away.jpg',
        genre: ['Fantasy', 'Animation', 'Adventure'],
        cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki', 'Takashi Naito', 'Yasuko Sawaguchi'],
        description: "Spirited Away is a renowned 2001 Studio Ghibli anime film. It follows Chihiro, a young girl trapped in a magical realm. To rescue her parents, she works at a bathhouse for spirits, encountering various otherworldly creatures in a surreal, enchanting, and coming-of-age adventure.",
        link: 'https://youtu.be/ByXuk9QqQkk?si=GhUauClXifxKqnk3',
      },

      {
        name: 'Howls Moving Castle',
        director: 'Hayao Miyazaki',
        releaseYear: 2005,
        picture: 'images/howls-moving-castle.jpg',
        genre: ['Animation', 'Adventure', 'Family'],
        cast: ['Christian Bale', 'Emily Mortimer', 'Jean Simmons', 'Lauren Bacall', 'Billy Crystal'],
        description: "'Howl's Moving Castle,' a Studio Ghibli animated film, follows Sophie, a young woman cursed into an old age by a witch. She seeks refuge in the enigmatic Howl's moving castle, embarking on a magical adventure filled with love, friendship, and self-discovery.",
        link: 'https://youtu.be/fVJT5D3WPv8?si=68eNwqWlSgvk1GoM',
      },

      {
        name: 'My Neighbor Totoro',
        director: 'Hayao Miyazaki',
        releaseYear: 1990,
        picture: 'images/my-neighbor-totoro.jpg',
        genre: ['Animation', 'Adventure', 'Family'],
        cast: ['Dakota Fanning', 'Elle Fanning', 'Tim Daly', 'Pat Carroll', 'Frank Welker'],
        description: "'My Neighbour Totoro,' a Studio Ghibli classic, tells the story of two sisters, Satsuki and Mei, who move to the countryside and befriend friendly forest spirits, including the iconic Totoro. It's a heartwarming tale of childhood wonder and nature's magic.",
        link: 'https://youtu.be/92a7Hj0ijLs?si=Jc8vV7tHjaDenWHX',
      },

      {
        name: 'Poldark',
        director: 'Debbie Horsfield',
        releaseYear: 2015,
        picture: 'images/poldark.jpg',
        genre: ['History', 'Drama'],
        cast: ['Aidan Turner', 'Eleanor Tomlinson', 'Heida Reed', 'Jack Farthing', 'Beatie Edney'],
        description: "'Poldark' is a British historical drama series set in 18th-century Cornwall. It follows Ross Poldark's return from the American Revolutionary War, his struggles with love, business, the class divide, and the tumultuous events of the era's societal and political upheaval.",
        link: 'https://youtu.be/7A0U6kQNCN0?si=GfOa8SOybM7scKef',
      },
  
      {
        name: 'Outlander',
        director: 'Ronald D. Moore',
        releaseYear: 2014,
        picture: 'images/outlander.jpg',
        genre: ['History', 'Drama', 'Fantasy'],
        cast: ['Sam Heughan', 'Caitriona Balfe', 'Tobias Menzies', 'Duncan Lacroix', 'Graham McTavish'],
        description: "'Outlander' is a captivating TV series following Claire Randall, a nurse who time-travels from the 1940s to 18th-century Scotland. Amid conflict, she navigates love, survival, and complex historical events, entwining romance and adventure across two centuries.",
        link: 'https://youtu.be/YnaqypyJDHs?si=q8fBEGR4ix5Eegnk',
      },

      {
        name: 'The Witcher',
        director: 'Marc Jobst',
        releaseYear: 2019,
        picture: 'images/the-witcher.jpg',
        genre: ['Fantasy', 'Drama', 'Adventure'],
        cast: ['Henry Cavill', 'Anya Chalotra', 'Freya Allan', 'Joey Batey', 'MyAnna Buring'],
        description: "'The Witcher' follows Geralt of Rivia, a monster hunter in a medieval-inspired world. The series weaves a complex narrative of destiny, magic, and politics, as Geralt, Yennefer, and Ciri's fates become intertwined in a world filled with monsters and moral ambiguity.",
        link: 'https://youtu.be/jz9Bu5KMcng?si=Yo9anTAJJb_Xksga',
      },
  ]

  // Get the movie list container
const movieListContainer = document.getElementById('movie-list');
movieListContainer.insertAdjacentElement('beforebegin', heading);
movieListContainer.insertAdjacentElement('beforebegin', paragraph);

collection.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
  
    movieElement.innerHTML = `
      <img src="${movie.picture}" alt="${movie.name}">
      <p><span class="genre">Genre:</span> ${movie.genre.join(', ')}</p>
      <h2><span class="label">Movie Name:</span> ${movie.name} (${movie.releaseYear})</h2>
      <p><span class="label">Director:</span> ${movie.director}</p>
      <p><span class="label">Cast:</span> ${movie.cast.join(', ')}</p>
      <p><span class="label">Description:</span> ${movie.description}</p>
      <a href="${movie.link}" target="_blank" class="youtube-link">
        <img src="images/yt.png" alt="Link to YouTube trailer" class="youtube-image">
        <span class="youtube-text">Watch Trailer</span>
      </a>
      
    `;
    movieListContainer.appendChild(movieElement);
  });

  // Add an event listener to each YouTube image
const youtubeImages = document.querySelectorAll('.youtube-image');

youtubeImages.forEach(youtubeImage => {
  youtubeImage.addEventListener('mouseover', () => {
    // Show the text when hovering
    const youtubeText = youtubeImage.nextElementSibling;
    youtubeText.style.display = 'block';
  });

  youtubeImage.addEventListener('mouseout', () => {
    // Hide the text when not hovering
    const youtubeText = youtubeImage.nextElementSibling;
    youtubeText.style.display = 'none';
  });
});

  



