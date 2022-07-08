import { ILynxCICommand } from "./lynx-ci-command.interface";
import { AppServer } from "../server/server";

export class StartCommand implements ILynxCICommand {
  public name: string;
  public execute: (args: any) => Promise<any>;

  constructor() {
    this.name = "start";
    this.execute = async (_args) => {
      console.log("Starting Lynx CI Web Server...");
      const server = await AppServer.start();
      if (server) {
        console.log(
          `Lynx CI Web Server started on port: [${
            (server.address() as any)?.port
          }]`
        );
      }
      return server;
    };
  }
}
