import connect from "connect";
import morgan from "morgan";
import serveStatic from "serve-static";
import { route } from "./router.js";
import { routes } from "./routes.js";

const PORT = process.env.PORT ? process.env.PORT : 3000;
const app = connect();
app.listen(PORT);
console.log(`Servidor ouvindo na porta ${PORT}`);

app.use(morgan("dev"));
app.use(serveStatic("./public"));
app.use(headerFilter);
app.use(stylesheetFilter);
app.use(routeProvider);

function headerFilter(request, response, next) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  next();
}

function stylesheetFilter(request, response, next) {
  response.write("<link rel=stylesheet href=bootstrap.min.css />");
  response.write("<link rel=stylesheet href=estilo.css />");
  next();
}

function routeProvider(request, response) {
  const controller = route(request.url, routes);
  controller(request, response);
  response.end();
}
