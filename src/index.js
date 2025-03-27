import "./styles/styles.css"; 
import "./styles/modern-normalize.css"
import { pageLoad } from "./page-load.js"
import { fillMenu } from "./menu-load.js";
import { locationLoad } from "./location-load.js";
import { contactsLoad } from "./contacts-load.js";
const content = document.querySelector("#content");
pageLoad(content);

(function pageSwitchHandler(){
  const nav = document.querySelector("nav");
  nav.onclick = (e) => {
    if(!e.target.parentNode.dataset.attribute) return;

    content.textContent = "";
    const functions = {
      home: pageLoad,
      menu: fillMenu,
      locations: locationLoad,
      contacts: contactsLoad,
    };

    for (let key in functions){
      if (key === e.target.parentNode.dataset.attribute) functions[key](content);
    }
  }
})()

export function createIconDiv(src, text, href){
  const iconDiv = document.createElement("div"); 
  const imgIcon = document.createElement("img");
  const imgLink = createLink(href, text);
  imgIcon.setAttribute("src", src);
  iconDiv.appendChild(imgIcon);
  iconDiv.appendChild(imgLink);
  return iconDiv;
}

function setLinkAttributes(href, element){
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

function createLink(href, text){
  const link = document.createElement("a");
  setLinkAttributes(href, link);
  link.textContent = text;
  return link;
}
