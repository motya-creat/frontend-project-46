import * as YAML from 'js-yaml'

export default function parseFile(file, format) {
    switch(format) {
        case 'json':
            return JSON.parse(file)
        case 'yaml':
            return YAML.load(file)
        default:
            throw new Error(`Unknown format: ${format}`)
    }
}