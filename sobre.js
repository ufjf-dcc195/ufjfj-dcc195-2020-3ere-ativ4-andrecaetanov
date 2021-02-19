export function sobre(request, response) {
  response.write(
    `<div class="container">
        <h1>Sobre</h1>
        <p>Nome: André Caetano Vidal</p>
        <p>Curso: Ciência da Computação</p>
        <p>Email: andre.caetano@estudante.ufjf.br</p>
        <img src="foto-perfil.jpeg" alt="Foto de perfil" class="foto-perfil img-thumbnail">
    </div>`
  );
}
