import mapMarkerIcon from "./images/map-marker.svg"
import numberMarkerIcon from "./images/phone.svg"

export function locationLoad(content){
  if(content.classList.value !== "location") content.classList.value = "location";

  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);

  const location = "Via Castel Cicala, 80035 Nola NA, Italia";
  const mapDiv = document.createElement("div"); 
  const mapIcon = document.createElement("img");
  mapIcon.setAttribute("src", mapMarkerIcon);
  const mapButton = document.createElement("a");
  mapButton.setAttribute("href", "https://www.google.com/maps/dir//Via+Castel+Cicala,+80035+Nola+NA/@40.9206686,14.5453948,1642m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133bb3e4504a3a4f:0xc428584518e78525!2m2!1d14.5505447!2d40.9206606!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D")
  mapButton.textContent = location;
  mapDiv.appendChild(mapIcon);
  mapDiv.appendChild(mapButton);
  container.appendChild(mapDiv);

  const number = "+39 387 552 581";
  const numberDiv = document.createElement("div"); 
  const numberIcon = document.createElement("img");
  numberIcon.setAttribute("src", numberMarkerIcon);
  const numberButton = document.createElement("a");
  numberButton.setAttribute("href", "tel: +39 387 552 581");
  numberButton.textContent = number;
  numberDiv.appendChild(numberIcon);
  numberDiv.appendChild(numberButton);
  container.appendChild(numberDiv);

  const desc = 'Open 7 days a week.<br>Lunch: 12am-15pm<br>Dinner: 19pm-24pm<br><br>The restaurant is located inside the old "Castel Cicala".<br>Once arrived at the location, ring the big bell and an ancient goblin-like man will open the doors for you.'
  const descPar = document.createElement("p");
  descPar.innerHTML = desc;
  container.appendChild(descPar);
}