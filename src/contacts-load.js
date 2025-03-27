export function contactsLoad(content){
    if(content.classList.value !== "contacts") content.classList.value = "contacts";
  
  const container = document.createElement("div");
  container.classList.add("container")
  content.appendChild(container);

  const contactItems = [
    {
      title: "How can we help you?",
      link: " Send a mail",
      href: "mailto: random@mail.com"
    },

    {
      title: "Call us:",
      link: "+39 387 552 581",
      href: "tel: +39 387 552 581",
      desc: "Fell free to reach for us.",
    },

    {
      title: "How to get here:",
      link: "Location",
      href: "https://www.google.com/maps/dir//Via+Castel+Cicala,+80035+Nola+NA/@40.9206686,14.5453948,1642m/data=!3m2!1e3!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133bb3e4504a3a4f:0xc428584518e78525!2m2!1d14.5505447!2d40.9206606!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      desc: "Ring the bell and the goblin will open the door for you.",
    },
  ];
  
  for (let item of contactItems){
    const itemDiv = document.createElement("div");
    const title = document.createElement("span");
    const link = document.createElement("a");
    const desc = document.createElement("p");
    const strong = document.createElement("strong");
    

    title.textContent = item.title;
    link.textContent = item.link;
    if(item.link === "Location") setLinkAttributes(item.href, link);
    else link.setAttribute("href", item.href);
    desc.textContent = item.desc;

    itemDiv.appendChild(strong)
    strong.appendChild(title);
    itemDiv.appendChild(link);
    itemDiv.appendChild(desc);

    container.appendChild(itemDiv);
  };
}

function setLinkAttributes(href, element){
  const attributes = {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  for(let property in attributes){
    element.setAttribute(property, attributes[property]);
  };
}
