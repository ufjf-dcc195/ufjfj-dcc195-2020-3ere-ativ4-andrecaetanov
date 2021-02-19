import connect from "connect";
import morgan from "morgan";

const app = connect();
app.listen(3000);

app.use(morgan("dev"));
app.use(helloWorld);

console.log("Servidor escutando em http://localhost:3000");

function helloWorld(request, response, next) {
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Hello, World!</h1>");
}
