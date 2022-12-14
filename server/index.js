// 1. pastikan selalu import dotenv di line pertama
import "dotenv/config";
import config from "./config/config";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import middleware from "./helpers/middleware";

//for access models to db
import models, { sequelize } from "./models/init-models";
import routes from "./routes/IndexRoute";

// declare port
const port = process.env.PORT || 3001;

const app = express();
// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// use helmet spy bisa dikenali SEO
app.use(helmet());
// secure apps by setting various HTTP headers
app.use(compress());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// load models dan simpan di req.context
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

//auth.setMiddleware(app);

// call routes
app.use(config.URL_DOMAIN + "/auth", routes.UserRoute);
app.use(config.URL_API + "/role", routes.UserRoleRoute);
app.use(config.URL_API + "/user", routes.UserSettingRoute);
app.use(config.URL_API + "/email", routes.UserEmailRoute);
app.use(config.URL_API + "/phone", routes.UserPhoneRoute);
app.use(config.URL_API + "/address", routes.UserAddressRoute);
app.use(config.URL_API + "/education", routes.UserEducationRoute);
app.use(config.URL_API + "/experience", routes.UserExperienceRoute);
app.use(config.URL_API + "/skill", routes.UserSkillRoute);
// Untuk Dropdown dan Join
app.use(config.URL_API + "/roles", routes.RolesRoute);
app.use(config.URL_API + "/city", routes.CityRoute);
app.use(config.URL_API + "/skilltype", routes.SkillTypeRoute);
app.use(config.URL_API + "/phonetype", routes.PhonetypeRoute);
app.use(config.URL_API + "/lineaddress", routes.LineAddressRoute);
app.use(config.URL_API + "/addresstype", routes.AddressTypeRoute);

//use middleware to handle error from others modules
app.use(middleware.handleError);
app.use(middleware.notFound);

// set to false agar tidak di drop tables yang ada didatabase
const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});

export default app;
