export interface ILynxCICommand {
  /**
   * The name of the command.
   */
  name: string;

  /**
   * The actual command function to execute.
   * @param args Any arguments passed to the command.
   */
  execute: ((args: any) => Promise<void>) | ((args: any) => void);
}
