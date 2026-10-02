
const grid = document.getElementById("products");
const search = document.getElementById("search");
const contador = document.getElementById("contador");
const empty = document.getElementById("empty");
const printBtn = document.getElementById("printBtn");

function render(lista){
  grid.innerHTML = "";
  contador.textContent = `${lista.length} produto(s)`;
  empty.classList.toggle("hidden", lista.length !== 0);

  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img class="card-image" src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <div class="card-category">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="card-footer">
          <div class="price">${p.price}</div>
          <div class="unit">${p.unit}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filtrar(){
  const termo = search.value.toLocaleLowerCase("pt-BR").trim();
  const lista = produtos.filter(p =>
    `${p.name} ${p.category} ${p.price}`.toLocaleLowerCase("pt-BR").includes(termo)
  );
  render(lista);
}

search.addEventListener("input", filtrar);
printBtn.addEventListener("click", () => window.print());
render(produtos);
