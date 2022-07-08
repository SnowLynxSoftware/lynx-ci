import { CommandsHelper } from "./commands/commands.helper";

const main = async () => {
  // Get the args passed to the command.
  const args = process.argv.slice(2);
  return CommandsHelper.tryProcessCommand(args);
};

main()
  .then((args) => {
    if (!args) {
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
