#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format [type]')
    .action((filepath1, filepath2, cmd) => {
        const option = cmd.opts()
        try {
            const result = getDiff(filepath1, filepath2, option.format)
            console.log(result)
        } catch(err) {
            console.log(err.message)
            process.exit(1)
        }
    })

program.parse(process.argv)

