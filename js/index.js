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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//select all a anchor form nav
let navList = document.querySelectorAll("nav a");
let listContent = siteContent["nav"];
navList.forEach((x,i)=>{
  x.textContent = listContent[`nav-item-${i+1}`];
  x.style.color = "green"
})
//adding image to section image part
let codeSnip = document.querySelector("section img");
codeSnip.setAttribute("src", siteContent["cta"]["img-src"])
//adding header
let header = document.querySelector("section h1");
header.textContent = siteContent["cta"].h1;
//
let inputSet = document.querySelector("section button");
inputSet.textContent = siteContent["cta"].button;
let array = ["features", "about", "services", "product", "vision"]
let mainContents = document.querySelectorAll(".text-content h4");
mainContents.forEach((x,i)=> x.textContent = siteContent["main-content"][`${array[i]+"-h4"}`])
let sectionPara = document.querySelectorAll(".main-content p");
sectionPara.forEach((x,i)=> x.textContent = siteContent["main-content"][`${array[i]+"-content"}`]);
let mainPicture = document.querySelector(".middle-img ");
mainPicture.setAttribute("src", "./img/mid-page-accent.jpg")
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"]
let contactInfo = document.querySelectorAll(".contact p");
let creatAddress = document.createElement("p");

contactInfo[0].textContent = siteContent["contact"].address;
 let k = contactInfo[0].textContent.split(" ");
 let addressStreet = "";
   for(let i =0; i< k.length-2;i++){
       addressStreet += k[i]+ " "
   }
 let stateCountry = k[k.length-2] +"\n" +k[k.length-1];
 creatAddress.textContent =stateCountry;
 console.log(creatAddress)
 contactInfo[0].textContent = `${addressStreet} `;
 contactInfo[0].appendChild(creatAddress)
contactInfo[1].textContent = siteContent["contact"].phone;
contactInfo[2].textContent = siteContent["contact"].email;
let footerPara = document.querySelector("footer p");
footerPara.textContent = siteContent["footer"].copyright;
//Add content change the color of the navigation text to green;
let x = document.createElement('a');
let y = document.createElement('a')
x.textContent = "Gallery";
y.textContent =" Home"
let appendContent = document.querySelector("nav");
appendContent.appendChild(x);
appendContent.appendChild(y)