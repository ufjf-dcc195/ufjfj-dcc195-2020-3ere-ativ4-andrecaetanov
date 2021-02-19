export function techs(request, response) {
  let techs = [
    "C#",
    "ASP.NET MVC",
    "ASP.NET Core",
    "Typescript",
    "Angular",
    "PHP",
    "Laravel",
  ];

  response.write(`<div class="container"><h1>Tecnologias</h1><ul>`);
  techs.forEach((tech) => {
    response.write(`<li>${tech}</li>`);
  });
  response.write("</ul></div>");
}
