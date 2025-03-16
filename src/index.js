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
