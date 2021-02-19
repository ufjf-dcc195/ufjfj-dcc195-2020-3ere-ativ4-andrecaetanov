import { parse } from "url";

export function route(requestURL, routes) {
  const parsedURL = parse(requestURL);

  if (routes.has(parsedURL.pathname)) {
    return routes.get(parsedURL.pathname);
  } else {
    return routes.get("/404.html");
  }
}
