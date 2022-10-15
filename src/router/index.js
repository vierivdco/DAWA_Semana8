import { SongRouter, TestRouter, UserRouter } from "../components";

// cada vez que quiera agregar una ruta nueva,
// creo el path e importo el componente
const listRoutes = [
  ["/test", TestRouter],
  ["/user", UserRouter],
  ["/song", SongRouter]
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
