import { Server } from "@coralblack/cyan/dist/core";

export class AppServer extends Server {
  afterInitRoutes() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.getServer().use((req, res, next) => {
      res.status(404).send({ result: false, code: "PAGE-NOT-FOUND", message: "The requested page was not found." });
    });
  }
}
