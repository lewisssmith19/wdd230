const requestURL = 'https://lewisssmith19.github.io/wdd230/js/data.json';
let companies = document.querySelector('.companies'); 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companys = jsonObject['companies'];
    companys.forEach(displayCompanies);  // temporary checking for valid response and data parsing
  });
  

  

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    // let p = document.createElement('p');
    let address = document.createElement('address');
    let phone = document.createElement('phone');
    let a = document.createElement('a');
    let portrait = document.createElement('img');
    let portraitContainer = document.createElement('h2');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    
    h2.textContent = company.name;
    address.textContent = company.address; 
    phone.textContent = company.phone;
    a.textContent = company.website;
    a.setAttribute('target', '_blank');
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('alt', 'images');
    portraitContainer.appendChild(portrait);
    portraitContainer.setAttribute('class', 'portraitContainer');
    card.appendChild(portraitContainer);
    // Add/append the section(card) with the h2 element
    card.appendChild(phone);
    // company.appendChild(p);
    card.appendChild(address);
    card.appendChild(a);
   

  
    // Add/append the existing HTML div with the cards class with the section(card)
    companies.appendChild(card);

    // for (let i=0; i < lastname.length; i++) {
    //     lastname[i] = lastname [i] + "!";
    // }
  }