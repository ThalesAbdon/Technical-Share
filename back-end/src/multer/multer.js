const multer = require("multer")
const path  = require("path")

const uploadFolder = path.resolve(__dirname, '../public/upload/images')

const localTypes = {
    local: multer({
        storage: multer.diskStorage({
            destination: uploadFolder,
            filename(req, file, callback) {
                const second = new Date().getSeconds().toString();
                file.filename = `${second}-${file.originalname}`;

                return callback(null, file.filename)
            },
        })
    })
}


module.exports = localTypes.local