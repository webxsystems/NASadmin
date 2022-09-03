const sqlite3 = require('sqlite3').verbose();

var dbPath = "//192.168.1.41/data/freenas-v1.db";

const db = new sqlite3.Database(dbPath);
db.all("SELECT * FROM storage_encrypteddataset", function(err, rows) {
    rows.forEach(function (row) {
        console.log(row);
    })
});

db.close();

