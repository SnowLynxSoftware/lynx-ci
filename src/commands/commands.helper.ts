import { HelpCommand } from "./help.command";
import { ILynxCICommand } from "./lynx-ci-command.interface";
import { StartCommand } from "./start.command";

/**
 * Helper class for creating commands and then executing them.
 */
export class CommandsHelper {
  /**
   * Try to process the command.
   * @param args The args passed to the command.
   */
  public static async tryProcessCommand(args: string[]): Promise<any> {
    try {
      const commands = this.getCommands();
      const commandName = args[0];
      if (commandName) {
        const command = commands.find(
          (c) => c.name === commandName.toLowerCase()
        );
        if (command) {
          return command.execute(args);
        } else {
          new HelpCommand().execute(args);
          return null;
        }
      } else {
        new HelpCommand().execute(args);
        return null;
      }
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  /**
   * Gets all commands that are available.
   */
  private static getCommands(): ILynxCICommand[] {
    return [new HelpCommand(), new StartCommand()];
  }
}
