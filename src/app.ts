import chalk from "chalk";
const hellos = Array.from({ length: 10 }, (_, i) => `Hello ${i + 1}`);


for (const h of hellos) {
  console.log(chalk.cyan(h));
}