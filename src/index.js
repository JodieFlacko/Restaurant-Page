import "./styles/styles.css"; 
import { pageLoad } from "./page-load.js"
import { fillMenu } from "./menu-load.js";
import { locationLoad } from "./location-load.js";
import { contactsLoad } from "./contacts-load.js";
//pageLoad();

(function pageSwitchHandler(){
  const nav = document.querySelector("nav");
  nav.onclick = (e) => {
    if(!e.target.dataset.attribute) return;

    const content = document.querySelector("#content");
    content.textContent = "";
    
    const functions = {
      home: pageLoad,
      menu: fillMenu,
      locations: locationLoad,
      contacts: contactsLoad,
    };

    for (let key in functions){
      if (key === e.target.dataset.attribute) functions[key]();
    }

  }
})()
