const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU246qSBT9l3pt+8hNUJNOBmkU76KiwGQyKaCAAgQsipsd/32C3Z3TD3PO9LxV6rL2qrXW3m8gzXCBlqgF4zeQE1xBirolbXMExmBS+j4ioAc8SCEYg+3mdLPsY3A6Mt4+sNizQ9wLd1aE1h0JatLsdGLn7mg+i/UXcO+BvHQS7P4GMNNVT3RT0WaOYnk+U/U8qRVnK+VS2J+w7jZkp+TJbEvnNn8B9w4RYoLTQM1DdEEEJkvU7iAm36MvLFjDgVWwuNo2ltrBqqHxJmzsZV417TDcP5V5n5MDTT19k34rieXBbjyBeGlNdt6SlGtWjdkkrKubEuqCaTh9s61V1X2nX+AgRd7cQynFtP227kjum8ML2g+Mw3XLLqxDLcjeU6FdnxZ2sHKNJ+Eqj1h11J6s7xH3b5G1b/AONyFchPOYM2l6OiNOUmDSj5t2H1sGtLT9IF1/Jb4jn1mJ/4/u8kpa2+LW2Dhi7SJ9GZ295bTA5krJw8JzDuxFdRMb3jzzm7prh6WsVuGKW3qaLvG2n7CRWS5cTmlp38745f6WL4wDmXzGpqMPaUl+xzK9bnJn+5rG29noNtz7eRjoS1OZ2v35TD7HK0HiJQVj5IdT+SarIkNULtrMa2X1SqKTI5FbwjFa1UeKUfhDe5c74TSQXx4/ilE798CYvfcAQQEuKIEUZ2m3Nxr2APSqA3IJog91QeKu9HVpjeaOElfMkgT+yisgZ6keuljy7Fo4xzb02vPCjl9AD+Qkc1FRIE/DBc1Iu0ZFAQNUgPGff/VAihr67ltXjWd7wMekoEZa5kkGvU9TPw+h62ZlSg9t6irdAhEwZn5uI0pxGhSdjGUKiRviCikhpAUY+zAp0L0HPFRhF3V4gBcV/W9r/6xLzzneVKhWgtDRO8phlr5fcQYQiQ6PnkXXEZ6FgQifHcTxz0PGkURn5IkMGoEewB8t0735pYPN9LzkY/280NLXsLzwnMKsTbx2sqx+uPAuPSLIA2NKStQDDnTjMj9mMUp/l98dR9XjiVMvt6LYLsPGnwzCUmC2T9kX3HdLwfjt55hSMq/Ds3npyE9lGfTA5ZFA3P18wIwEaTgcCqIwZod/FD/qTkeY5z9SRDvYD827Bx6iECcFGANltWzynaqp80irpHo2k41AVoIO+9Ojz6y/h2nFuV60v+lyra/2g0ljhlEe827+5OMq2Yy2XL9o+0YBT9H65V9AwBh41/XR1lWbpBHVosQjEXdjlXpdbvu7QQJ5db8O8KW4BG07853NanbUmkZlTTLIG3Mfx/nJ4nSmQit34We3YJdH9QjXL12196x8LZbaBo0Tro99ZMS+yGy1DaSVNZGzjDHzvnRdn1sxTl8N3jSipJjeRKGmurs2D4frhZtgcTq9RiNNbCc4f/Vzx+G25+ijCx9TIPmYvvjRIG8fyfIxegyzFHYO/Yc3XzPO3HtfID6m4y9yNDmMUs1iXEZeqwqDdPckWKK94Zd+KpDB0T/SSlpX7GqWWDdwv//VA3kCqZ+RCxgD/OgZ0AMJLKj8s0uP+IIKCi85GLMSLwlDnh1I938ADC12NtoHAAA=',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.private|| "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
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

