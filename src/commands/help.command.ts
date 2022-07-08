import { ILynxCICommand } from "./lynx-ci-command.interface";
import { version } from "../../package.json";

export class HelpCommand implements ILynxCICommand {
  public name: string;
  public execute: (args: any) => void;

  constructor() {
    this.name = "help";
    this.execute = () => {
      console.log(`
      --------------------------------------------------
      Lynx CI Help
      --------------------------------------------------
      Version: ${version}
      --------------------------------------------------
      
        Usage:
            $ lynx help - Shows this help.
            $ lynx start - Starts the lynx server.
      `);
    };
  }
}
