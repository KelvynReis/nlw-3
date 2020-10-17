const Database = require('sqlite-async');

Database.open(__dirname + '/database.sqlite').then(execute)

function execute(db){
    console.log("Entrei nessa função")
    /*db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsaap TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)*/
}
