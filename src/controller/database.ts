import Datastore from 'nedb';
import { debug } from 'util';
const path = require('path');

class Database {
    db = new Datastore();

    constructor() {
        this.init();
    }

    private init() {
        this.db = new Datastore({
            filename: path.join(__dirname, '../db/datafile')
        });
        this.db.loadDatabase(function (err) {    // Callback is optional
            // Now commands will be executed
            debugger;
        });
    }

    public insert(rowDatas: []) {
        this.db.insert([{index: 1, rowDatas: rowDatas}], function (err, newDocs) {
            // Two documents were inserted in the database
            // newDocs is an array with these documents, augmented with their _id
            debugger;
        });
    }

    public read(cb:([]) => any) {
        this.db.find({}, function (err, docs) {
            debugger;
        });
        this.db.find({ index: 1 }, function (err, docs) {
            // docs is an array containing documents Mars, Earth, Jupiter
            // If no document is found, docs is equal to []
            debugger;
            cb(docs[0]);
        });
    }

    public update(rowDatas: []) {
        this.db.update({ rowDatas: rowDatas }, {}, function () {
            // The document will not be modified
            debugger;
        });
    }
}

export default Database;