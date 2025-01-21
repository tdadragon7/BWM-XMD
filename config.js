const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3qVnuGiIEZ0xHIT8I4IohvzUEABJQgIpYId/vsG2h3dDzuzvTxVVFF5sjLznDeQF7hGU9SC0RsoK3yBBHVL0pYIjIB8jiJUAQqEkEAwAkhXvIkf7q+DYFtyhWs1DSSGvhE8VtAnoWWHSnZmYjfS01dwp0B59jMc/AFwIPQcqDDZdr2IVrN+6LAnniWelek44cWtq17C/XHCS6wWv4J7hwhxhfNYKxN0RBXMpqhdQVx9k/50orZxsdi7XrMd+Hl8nk6jrdVai6vFbcyhoWlHiQhzw7h+jz7LKm5duvRJkI5XcdEabBvGLqfabTQoKs+XFD+/MpDrM86Tfo3jHIVmiHKCSftt3VOZ3pOcK/tEVLkJHDvHNVZsd4dCLZL5oa41i2A20XvjjP4ecdGeD0QmdW4eTmd5GFu8kqSFK3abojNeKLQ2q6aumbfXr8RX1UdW0v+ju2TEbJipSuoe8uLQOOt1Ki8FZiUc2mhqmT1aO0CvpxSM9k36F2N53tRW/hPChu7d6l7Jw6vjTtFyrG4yaFvaMuDFydqzvtCH5Fz9iWVxkqsZtN2tZmxThzsa3PLYejtpn+Qbvxfp4SplJdXnZKlu6X3akydSGVresDWhFrrzAz0fHHg+FQR4K3nnKl6QRWTr9fGiFLVmCEbMnQIVinFNKkhwkT/2BhwFYHixUVAh8pAXrIc3mfCFLNhare3lSaGeVkLvphuwXIon1pwU+o2dk23uxK+AAmVVBKiuUWjgmhRVO0d1DWNUg9HfvyiQo4Y8jevKcQwFIlzVxMnPZVbA8MPVj0MYBMU5J3abB0q3QBUY0Z/biBCcx3Wn4zmHVZDgC1ISSGowimBWozsFQnTBAerwQFj42v5yqiy6TYPo5fQiLTcnq6OcFPnzlz4L+cEg4l7CIOy/9KNB8CLSfPDChFwY8n6EhhECFMDvPdPd+a2FV2csiCa53vTtzuQGjjFNNvuxWi5162HDU3tUoRCMSHVGFPBhkJ7LTZGi/A+4zXy/Xm3MHaMG7nnjxlp+VEiwimLf+YL79BSM3j7nlFKEHZ6tGSqvWR6gwPERQdy9fECLfWE4HPb5/ogR/6p/XDsdYVn+yBHpYN817y6EiECc1WAElNm0KVeaoU3U9iJcdV3axZISS+DTo4+wP8M0Y4PwsL5Z0tWarQdy4yWHMuWCshfhS7YQl+zPuv3p1NA9zF//BQSMQBtfgsmpmJKaN5NWrXYL86bleuUn/bVWlM58vPMyI2e8nGP4K97fVG8g9cSIOSMtxeaWcUtsNuquSawpu7zMZusFSaTXrtozK1+LITI+2NlkIZCG5xOibP2xahIkazby/THbXFo/tfuIOV2nxs/ElTGMrB5cbTVmOLutlnNeQDvWW2XtpsclxYZritqW42cbPsZA9j5+8aNB3t6TFWH0mGY57Bz6D2++Zpy+U18g3sfjb3Ik22Ju7OiAluaaQiMrcPs7fr/gplHerwabaEMuwvzCzPRsdwP3+y8KlBkkUVEdwQjgR88ACmSwJtJnl27wEdUEHkswYgRO6A+HPC9S4NhKZWkTSD6aG0jdNy9kcP8HsxoDDPgHAAA=',
    PREFIXE: process.env.PREFIX || "!",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PRIVATE_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

