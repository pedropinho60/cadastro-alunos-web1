function adicionarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const curso = document.getElementById("curso").value;

  if (nome && idade && curso) {
    const tabela = document.querySelector("table tbody");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${nome}</td>
      <td>${idade}</td>
      <td>${curso}</td>
    `;

    tabela.appendChild(novaLinha);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("curso").value = "";
  } else {
    alert("Preencha todos os campos.");
  }
}
