import { PUBLIC_STORAGE_BUCKET } from "$env/static/public";
import { storage } from "$lib/firebase/firebase.server";
import { tmpdir } from 'os'
import fs from 'fs'
import path from "path";
import { v4 as uuidv4 } from 'uuid'

/**
 * @param {File} file
 * @param {string} destination 
 */
export async function saveFileToBucket(file, destination) {
    const filePath = await saveFileToDisk(file)
    const uploadResult = await storage.bucket(PUBLIC_STORAGE_BUCKET)
        .upload(filePath, { destination, public: true })

    return uploadResult[0].publicUrl()
}

/**
 * @param {File} file
 */
async function saveFileToDisk(file) {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const filePath = path.join(tmpdir(), uuidv4())

    fs.writeFileSync(filePath, buffer, 'base64')

    return filePath
}

// /**
//  * @param {string} destination 
//  */
// export async function deleteFileFromBucket(destination) {
//     const [isFileExist] = await storage.bucket(PUBLIC_STORAGE_BUCKET).file(destination).exists()
//     console.log(isFileExist)

//     if (isFileExist) {
//         await storage.bucket(PUBLIC_STORAGE_BUCKET).file(destination).delete()
//     }
// }

/**
 * @param {string} prefix
 */
export async function deleteFolderFromBucket(prefix) {
    await storage.bucket(PUBLIC_STORAGE_BUCKET).deleteFiles({
        prefix: prefix
    })
}