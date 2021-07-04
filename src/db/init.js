const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE usuario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            pass TEXT

        )`);
        await db.close()
    }
}

initDb.init();