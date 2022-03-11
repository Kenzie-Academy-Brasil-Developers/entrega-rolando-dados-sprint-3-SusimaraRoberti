const botao = document.getElementById("botao");
botao.addEventListener("click", dados);

function append(tarefa, resultado) {
  const mostrar = document.getElementById(tarefa);
  mostrar.appendChild(resultado);
}

function limparDiv(id) {
  const div = document.getElementById(id);
  div.innerText = "";
}

function rolarDados() {
  const count = [];
  for (let i = 0; i < 11; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < 1000; i++) {
    let dado1 = Math.round(Math.random() * (6 - 1) + 1);
    let dado2 = Math.round(Math.random() * (6 - 1) + 1);
    let soma = dado1 + dado2;
    count[soma - 2] += 1;
  }
  return count;
}

function dados() {
  limparDiv("dados");
  limparDiv("grafico");

  let vezes = rolarDados();
  let numero = 2;

  vezes.map((rolou) => {
    const resultado = document.createElement("p");
    const barra = document.createElement("div");
    resultado.innerText += `O resultado ${numero} surgiu ${rolou} vezes que os dados rolaram.`;
    barra.classList.add("barra");
    barra.style.width = `${rolou}px`;
    numero++;
    append("dados", resultado);
    append("grafico", barra);
  });
}
