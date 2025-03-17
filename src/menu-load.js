export function fillMenu(content){
  if(content.classList.value !== "menu") content.classList.value = "menu";
  
  const menu = [
    {
      name: "MARGHERITA",
      desc: 'Pomodoro San Marzano, fiordilatte, olio EVO, basilico. Si consiglia la variante "MARGHERITA DI MASTRO STEFANO", con aggiunta di origano del Matese.',
      price: "€ 7,00",
    },

    {
      name: "MARGHERITA DOP",
      desc: 'Pomodoro San Marzano DOP, mozzarella di Bufala Campana DOP, olio EVO',
      price: "€ 9,50",
    },

    {
      name: "MARINARA CLASSICA",
      desc: 'Pomodoro San Marzano, origano, aglio, olio EVO',
      price: "€ 6,00",
    },

    {
      name: "SCHIACCIATA",
      desc: 'Sale, origano, olio EVO',
      price: "€ 4,00",
    },

    {
      name: "LA BOSCAIOLA",
      desc: 'Pomodoro San Marzano, fiordilatte, funghi, speck IGP, origano, olio EvO',
      price: "€ 8,00",
    },

    {
      name: "LA PICCANTE",
      desc: 'Fiordilatte, pomodoro San Marzano, salame piccante, origano e olio Evo.',
      price: "€ 8,00",
    },

    {
      name: "CALZONE CLASSICO",
      desc: 'Fiordilatte, pomodoro San Marzano, prosciutto cotto, basilico, olio Evo',
      price: "€ 8,50",
    },

    {
      name: "4 STAGIONI",
      desc: 'Pomodoro San Marzano, fiordilatte, carciofi Paestum, funghi, capperi, filetti di alici Cetara, olive, prosciutto cotto, olio Evo, origano',
      price: "€ 9,00",
    },

    {
      name: "CAPRICCIOSA",
      desc: 'Pomodoro San Marzano, fiordilatte, capperi, filetti di alici Cetara, prosciutto cotto, carciofini Paestum, funghi, olive caiazzane, origano, olio Evo',
      price: "€ 9,00",
    },
    
  ]
  const menuList = document.createElement("ul");
  content.appendChild(menuList);
  for (let item of menu){
    const li = document.createElement("li");
    menuList.appendChild(li);

    const pizza = document.createElement("div");
    pizza.classList.add("pizza")
    li.appendChild(pizza);

    const pizzaDiv = document.createElement("div");
    pizzaDiv.classList.add("pizza-info");
    pizza.appendChild(pizzaDiv);

    const name = document.createElement("span");
    name.textContent = item.name;
    pizzaDiv.appendChild(name);

    const desc = document.createElement("p");
    desc.textContent = item.desc;
    pizzaDiv.appendChild(desc);    

    const price = document.createElement("div");
    price.textContent = item.price;
    price.classList.add("price");
    pizza.appendChild(price);
  
    const hr = document.createElement("hr")
    li.appendChild(hr);
  }
}
