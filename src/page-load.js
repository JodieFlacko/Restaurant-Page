export function pageLoad(content){
  if(content.classList.value !== "home") content.classList.value = "home";
  
  const container = document.createElement("div");

  const firstDescPar = document.createElement("p");
  const secondDescPar = document.createElement("p");
  const quotePar = document.createElement("p");
  const br = document.createElement("br");
  
  firstDescPar.textContent = "Fare le pizze è come amare qualcuno. Deve venire facile."
  secondDescPar.textContent = "Quando si inizia a faticare vuol dire che c’è qualcosa che non va."
  quotePar.textContent = "“Ti offro una pizza... i soldi ce li hai?”"

  firstDescPar.setAttribute("id", "desc");
  secondDescPar.setAttribute("id", "desc");
  quotePar.setAttribute("id", "quote");

  content.appendChild(container);
  container.appendChild(firstDescPar);
  container.appendChild(secondDescPar);
  container.appendChild(quotePar);
}

