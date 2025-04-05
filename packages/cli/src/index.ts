import chalk from 'chalk'
import { Command } from 'commander'

const program = new Command()

program
  .name('fastship-cli')
  .description('This display a the available commands')
  .version('0.0.1')
  .action(async () => {
    console.log('Hello, thanks for using fastship-cli.')
    console.log('Here are the available commands:\n')
    console.log('1-) fastship-cli api')
  })

program
  .command('api')
  .description('asd')
  .action(async () => {
    console.log('Implement this feature admin, please.')
  })

program
  .command('hello')
  .description('Display a `Hello World!` as response ')
  .action(async () => {
    console.log('Hell World! Tamo programando, tamo programando!')
  })

program.parse(process.argv)
