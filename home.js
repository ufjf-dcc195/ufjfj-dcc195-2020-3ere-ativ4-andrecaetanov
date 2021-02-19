export function index(request, response) {
  response.write(
    `<div class="container">
        <h1>Bem vindo!</h1>
        <ul>
            <li><a href="./sobre.html">Sobre</a></li>
            <li><a href="./techs.html">Tecnologias</a></li>
        </ul>
    </div>`
  );
}

export function notfound(request, response) {
  response.write(
    `<div class="container">
      <h1>Página não encontrada!</h1>
      <p>O recurso que você pediu, não existe neste servidor!</p>
    </div>`
  );
}
