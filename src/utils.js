import * as fs from 'fs'
import path from 'path'
import parser from './parser.js'

const getFormat = (filepath) => path.extname(filepath).slice(1)
const getPath = (filepath) => path.resolve(process.cwd(), filepath)