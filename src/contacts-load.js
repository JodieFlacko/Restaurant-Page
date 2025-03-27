import { createIconDiv } from ".";
import mapMarkerIcon from "./images/map-marker.svg";
import phoneMarkerIcon from "./images/phone.svg";
import mailMarkerIcon from "./images/email-fast.svg";

export function contactsLoad(content){
    if(content.classList.value !== "contacts") content.classList.value = "contacts";
  
  const container = document.createElement("div");
  container.classList.add("container")
  content.appendChild(container);

  const contactItems = [
    {
      title: "How can we help you?",
      text: " Send a mail",
      href: "mailto: random@mail.com",
      desc: "",
      src: mailMarkerIcon,
    },

    {
      title: "Call us:",
      text: "+39 387 552 581",
      href: "tel: +39 387 552 581",
      desc: "Fell free to reach for us.",
      src: phoneMarkerIcon,
    },

    {
      title: "How to get here:",
      text: "Location",
      href: "https://www.google.com/maps/dir//Via+Castel+Cicala,+80035+Nola+NA/@40.9206686,14.5453948,1642m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133bb3e4504a3a4f:0xc428584518e78525!2m2!1d14.5505447!2d40.9206606!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      desc: "Ring the bell and the goblin will open the door for you.",
      src: mapMarkerIcon,
    },
  ];
  
  for (let item of contactItems){
    const itemDiv = document.createElement("div");
    const title = document.createElement("span");
    const iconDiv = createIconDiv(item.src, item.text, item.href);
    const desc = document.createElement("p");
    const strong = document.createElement("strong");
    

    title.textContent = item.title;
    desc.textContent = item.desc;

    itemDiv.appendChild(strong)
    strong.appendChild(title);
    itemDiv.appendChild(iconDiv);
    itemDiv.appendChild(desc);

    container.appendChild(itemDiv);
  };
}