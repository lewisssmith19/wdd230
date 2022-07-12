const requestURL = 'https://lewisssmith19.github.io/wdd230/js/data.json';
let companies = document.querySelector('.companies'); 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companys = jsonObject['companies'];
    companys.forEach(displayCompanies); 
  });
  

  

  function displayCompanies(company) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let address = document.createElement('address');
    let phone = document.createElement('phone');
    let a = document.createElement('a');
    let portrait = document.createElement('img');
  
    
    h2.textContent = company.name;
    address.textContent = company.address; 
    phone.textContent = company.phone;
    a.textContent = company.website;
    a.setAttribute('target', '_blank');
   
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('alt', 'images');
    card.appendChild(h2);
    card.appendChild(portrait);
  
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(a);
   
    companies.appendChild(card);

  }

  // intViewportWidth = parseInt(visualViewport.width);
