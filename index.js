const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish
    fs.readFile(QUOTE_FILE, "utf-8")
      .then((data) => {
        const quotes = data.split("\n");
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        const [quote, author] = randomQuote.split("|");

        console.log(chalk.red(quote));
        console.log(chalk.green(author));
      })
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
    const quoteToSave = `${quote} |${author || "Anonymous"}\n`;

    fs.appendFile(QUOTE_FILE, quoteToSave, "utf-8")
      .then(() => {
        console.log(chalk.green("Quote added!"));
      }
      );
  });

program.parse();
