import connect from "connect";
import morgan from "morgan";
import serveStatic from "serve-static";

const app = connect();
app.listen(3000);

app.use(morgan("dev"));
app.use(serveStatic("./public"));
app.use(incluiCabecalhos);
app.use(helloWorld);

console.log("Servidor escutando em http://localhost:3000");

function incluiCabecalhos(request, response, next) {
  response.setHeader("Content-Type", "text/html");
  response.write("<link rel=stylesheet href=estilo.css />");
  next();
}

function helloWorld(request, response, next) {
  response.end("<h1>Hello, World!</h1>");
}
