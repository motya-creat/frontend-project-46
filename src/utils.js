import * as fs from 'fs'
import path from 'path'
import parser from './parser.js'

const getFormat = (filepath) => path.extname(filepath).slice(1)
const getPath = (filepath) => path.resolve(process.cwd(), filepath)

const getFileData = (filepath) => {
    const format = getFormat(filepath)
    const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
    
    return parser(data, format)
}

const getUniq = (...arr) => {
    const result = []
    const existed = new Set()

    arr.forEach((array) => {
        array.forEach((val) => {
            if(!existed.has(val)) {
                result.push(val)
            }
            existed.add(val)
        })
    })

    return result
}


export {getFormat, getPath, getFileData, getUniq }