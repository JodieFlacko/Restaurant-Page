export function contactsLoad(content){
    if(content.classList.value !== "contacts") content.classList.value = "contacts";
  
  const section = document.createElement("section");
  content.appendChild(section);

  const contactItems = [
    {
      title: "How can we help you?",
      link: "Send a mail",
      desc: "For generic information\nrandom@mail.com",
    },

    {
      title: "Call us",
      link: "+39 387 552 581",
      desc: "Fell free to reach for us",
    },

    {
      title: "How to get here",
      link: "Location",
      desc: "Directions to get here",
    },
  ];
  
  for (let item of contactItems){
    const itemDiv = document.createElement("div");
    const title = document.createElement("span");
    const link = document.createElement("a");
    const desc = document.createElement("p");

    title.textContent = item.title;
    link.textContent = item.link;
    desc.textContent = item.desc;

    itemDiv.appendChild(title);
    itemDiv.appendChild(link);
    itemDiv.appendChild(desc);

    content.appendChild(itemDiv);
  };
}