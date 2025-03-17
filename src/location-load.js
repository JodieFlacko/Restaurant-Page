import mapMarkerIcon from "./images/map-marker.svg"
import phoneMarkerIcon from "./images/phone.svg"

export function locationLoad(content){
  if(content.classList.value !== "location") content.classList.value = "location";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const location = "Via Castel Cicala, 80035 Nola NA, Italia";
  const hrefMapMarker = "https://www.google.com/maps/dir//Via+Castel+Cicala,+80035+Nola+NA/@40.9206686,14.5453948,1642m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133bb3e4504a3a4f:0xc428584518e78525!2m2!1d14.5505447!2d40.9206606!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D";
  loadImage(container, mapMarkerIcon, location, hrefMapMarker);

  const number = "+39 387 552 581";
  const hrefNumberMarker = "tel: +39 387 552 581";
  loadImage(container, phoneMarkerIcon, number, hrefNumberMarker);

  const desc = 'Open 7 days a week.<br>Lunch: 12am-15pm<br>Dinner: 19pm-24pm<br><br>The restaurant is located inside the old "Castel Cicala".<br>Once arrived at the location, ring the big bell and an ancient goblin-like man will open the doors for you.'
  const descPar = document.createElement("p");
  descPar.innerHTML = desc;
  container.appendChild(descPar);
}

function loadImage(container, img, text, href){
  const imgDiv = document.createElement("div"); 
  const imgIcon = document.createElement("img");
  imgIcon.setAttribute("src", img);
  const imgButton = document.createElement("a");
  imgButton.setAttribute("href", href);
  imgButton.textContent = location;
  imgDiv.appendChild(imgIcon);
  imgDiv.appendChild(imgButton);
  container.appendChild(imgDiv);
}