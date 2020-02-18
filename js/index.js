const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('a');
navBar.forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i+1}`]
});

let headAwesome = document.getElementsByTagName("h1");
headAwesome[0].textContent = `${siteContent["cta"]["h1"]}`

let buttonOne = document.getElementsByTagName("button");
buttonOne[0].textContent = `${siteContent["cta"]["img-src"]}`

let head4 = document.querySelectorAll('.main-content h4');

let mainText = document.querySelectorAll('.text-content p');

let featuresTitle = head4[0];
featuresTitle.textContent = siteContent['main-content']['features-h4'];

let featuresText = mainText[0];
featuresText.textContent = siteContent['main-content']['features-content'];

let aboutTitle = head4[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutText = mainText[1];
aboutText.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesTitle = head4[2];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesText = mainText[2];
servicesText.textContent = siteContent['main-content']['services-content'];

let productTitle = head4[3];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productText = mainText[3];
productText.textContent = siteContent['main-content']['product-content'];

let visionTitle = head4[4];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = mainText[4];
visionText.textContent = siteContent['main-content']['vision-content'];

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p');

let address = contactText[0];
address.textContent = siteContent['contact']['address'];

let phoneNum = contactText[1];
phoneNum.textContent = siteContent['contact']['phone'];

let email = contactText[2];
email.textContent = siteContent['contact']['email'];

let footText = document.querySelector('footer p');
footText.textContent = siteContent['footer']['copyright'];


// Changing content

let navBarColor = document.getElementsByTagName('a')
navBarColor[0].style.color = 'green';
navBarColor[1].style.color = 'green';
navBarColor[2].style.color = 'green';
navBarColor[3].style.color = 'green';
navBarColor[4].style.color = 'green';
navBarColor[5].style.color = 'green';

let BarSocial = document.querySelector('nav')
navBarChild = document.createElement('a');
navBarChild.textContent = "Social Media"

BarSocial.prepend(navBarChild);

navBarChild.style.color = "green";

let BarSearch = document.querySelector('nav')
navBarChild = document.createElement('a');
navBarChild.textContent = "Search!"

BarSearch.append(navBarChild);

navBarChild.style.color = "green";