const requestURL = 'https://lewisssmith19.github.io/wdd230/js/data.json';
const company = document.querySelector('.company'); 
let prophets = null;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    companies = jsonObject.companies;
    companies.forEach(displayCompanies);  // temporary checking for valid response and data parsing
  });
  
  
  console.log(companies)

  

  function displayCompanies(companies) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let h4 = document.createElement('h4');
    let a = document.createElement('a')
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = companies.name;
    h4.textContent = companies.address;
    h4.textContent = companies.phone;
    a.textContent = companies.website;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', companies.imageurl);
    portrait.setAttribute('loading', 'lazy');
  
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