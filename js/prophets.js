const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards'); 
let prophets = null;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    prophets = jsonObject.prophets;
    prophets.forEach(displayProphets);  // temporary checking for valid response and data parsing
  });
  
  
  console.log(prophets)

  

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let h4 = document.createElement('h4');
    let portrait = document.createElement('img');
  
    prophet.order
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    p.textContent = 'Birth Date:' + ' ' + prophet.birthdate;
    h4.textContent = 'Death Date' + ' ' + prophet.death;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');
    let order = ``;
    if (prophet.order === 1) {
      order = `${prophet.order}st`;
    } else if (prophet.order === 2) {
      order = `${prophet.order}nd`;
    } else if (prophet.order === 3) {
      order = `${prophet.order}rd`;
    } else {
      order = `${prophet.order}th`;
    }

  

    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(h4);

    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);

    // for (let i=0; i < lastname.length; i++) {
    //     lastname[i] = lastname [i] + "!";
    // }
  }
  