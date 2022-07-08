import express from "express";

/**
 * Contains all the web server logic.
 */
export class AppServer {
  /**
   * The entry-point of the web server.
   */
  public static async start() {
    const app = express();
    app.set("views", "./views");
    app.set("view engine", "ejs");
    app.get("/", (_req, res) => {
      res.render("index", { title: "Hey", message: "Hello there!" });
    });
    return app.listen(process.env.APP_PORT || 3000);
  }
}
