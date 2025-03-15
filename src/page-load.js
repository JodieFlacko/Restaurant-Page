export function pageLoad(content){

  const container = document.createElement("div");
  container.classList.add("home-container");

  const descPar = document.createElement("p");
  const quotePar = document.createElement("p");
  const citSpan = document.createElement("span");
  
  descPar.textContent = "A Napoli, il mare racconta storie di eterna bellezza, ma è a tavola che quelle storie diventano poesia. Tra il profumo della pizza appena sfornata e il sapore della tradizione, ogni boccone è un viaggio nel cuore della città."
  quotePar.textContent = "“A pizza è come ‘o mare: te entra dint’ ‘e vene e nun te lassi cchiù!”"
  citSpan.textContent = "-Totò";

  descPar.setAttribute("id", "desc");
  quotePar.setAttribute("id", "quote")
  citSpan.setAttribute("id", "cit");

  content.appendChild(container);
  container.appendChild(descPar);
  container.appendChild(quotePar);
  quotePar.appendChild(citSpan);
}

