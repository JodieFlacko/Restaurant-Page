import mapMarkerIcon from "./images/map-marker.svg"
import phoneMarkerIcon from "./images/phone.svg"

export function locationLoad(content){
  const info = [
    {
      text: "Via Castel Cicala, 80035 Nola NA, Italia",
      href: "https://www.google.com/maps/dir//Via+Castel+Cicala,+80035+Nola+NA/@40.9206686,14.5453948,1642m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133bb3e4504a3a4f:0xc428584518e78525!2m2!1d14.5505447!2d40.9206606!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      icon: mapMarkerIcon,
    },
    {
      text: "+39 387 552 581",
      href: "tel: +39 387 552 581",
      icon: phoneMarkerIcon,
    },
  ]

  if(content.classList.value !== "location") content.classList.value = "location";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);
  for(let item of info){
    const div = createIconDiv(item.icon, item.text, item.href);
    container.appendChild(div);
  }

  const desc = 'Open 7 days a week.<br>Lunch: 12am-15pm<br>Dinner: 19pm-24pm<br><br>The restaurant is located inside the old "Castel Cicala".<br>Once arrived at the location, ring the big bell and an ancient goblin-like man will open the doors for you.'
  const descPar = document.createElement("p");
  descPar.innerHTML = desc;
  container.appendChild(descPar);
}

export function createIconDiv(src, text, href){
  const iconDiv = document.createElement("div"); 
  const imgIcon = document.createElement("img");
  const imgLink = createLink(href, text);
  imgIcon.setAttribute("src", src);
  iconDiv.appendChild(imgIcon);
  iconDiv.appendChild(imgLink);
  return iconDiv;
}

export function setLinkAttributes(href, element){
  const attributes = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const pattern = /^https:\/\/www.google.com\/maps/;
  if(pattern.test(href)){
    for(let property in attributes){
      element.setAttribute(property, attributes[property]);
    };
    return;  
  }
  element.setAttribute("href", href);
}

export function createLink(href, text){
  const link = document.createElement("a");
  setLinkAttributes(href, link);
  link.textContent = text;
  return link;
}