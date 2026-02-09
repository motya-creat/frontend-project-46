import { getFileData, getPath} from './utils.js'

import getDifference from './getDIfference.js'
import formater from './formatter/formatter.js'


export default function getDiff(file1, file2, style='stylish') {
    const filePatch1 = getPath(file1)
    const filePatch2 = getPath(file2)
    
    const fileData1 = getFileData(filePatch1)
    const fileData2 = getFileData(filePatch2)

    const diffData = getDifference(fileData1, fileData2)

    return formater(diffData, style) 
}