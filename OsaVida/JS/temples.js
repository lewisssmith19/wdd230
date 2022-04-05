const requestURL = 'https://lewisssmith19.github.io/wdd230/OsaVida/JS/osa.json';
let temples = document.querySelector('.temples'); 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temple = jsonObject['temples'];
    temple.forEach(displayTemples); 
  });
  

  

  function displayTemples(temple) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let address = document.createElement('address');
    let phone = document.createElement('phone');
    let email = document.createElement('email');
    let services = document.createElement('services');
    let history = document.createElement('history');
    let ordinanceSchedule = document.createElement('ordinanceSchedule');
    let closures = document.createElement('closures');
    let a = document.createElement('a');
    let portrait = document.createElement('img');
  
    
    h2.textContent = temple.name;
    address.textContent = temple.address; 
    phone.textContent = temple.phone;
    email.textContent = temple.email;
    services.textContent = temple.services;
    history.textContent = temple.history;
    ordinanceSchedule.textContent = temple.ordinanceSchedule;
    closures.textContent = temple.closures;
    a.setAttribute('target', '_blank');
  
    
    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('alt', 'images');
    card.appendChild(h2);
    card.appendChild(portrait);
    card.append("Email:" + email);
    card.append(services);
    card.append(history);
    card.append(ordinanceSchedule);
    card.append(closures);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(a);
   

  
    temples.appendChild(card);

  }
