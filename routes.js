import { index, notfound } from "./home.js";
import { sobre } from "./sobre.js";
import { techs } from "./techs.js";

const routes = new Map();

routes.set("/", index);
routes.set("/index.html", index);
routes.set("/404.html", notfound);
routes.set("/sobre.html", sobre);
routes.set("/techs.html", techs);

export { routes };
