import "source-map-support/register";
import { Cyan, Stage } from "@coralblack/cyan/dist/core";
import { config } from "dotenv";
import { routes } from "./routes";
import { AppServer } from "./Server";

config({ path: `.env.${process.env.STAGE}` });

const port = parseInt(process.env.PORT || "0", 10);
const cyan = new Cyan({
  name: process.env.APP_NAME,
  stage: process.env.STAGE as Stage,
  port,
  server: AppServer,
  routes,
  options: {
    accessLog: true,
    jsonBodyParser: { limit: "3mb" },
    cors: {
      origin: "*",
      methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
      optionsSuccessStatus: 204,
    },
  },
});

cyan.start();
