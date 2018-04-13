require("dotenv").config();
import mysql from 'mysql';

console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);

let pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

function executeQuery(sql, args = []) {
    return getConnection()
    .then((connection) => {
        return new Promise((resolve, reject) => {
            console.log(sql);
            console.log(args);
            connection.query(sql, args, (err, result) => {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
}

function createQueryPromise(sql, args=[]) {
    return new Promise((resolve, reject) => {
        console.log(sql);
        console.log(args);

        connection.query(sql, args, (err, result) => {
            connection.release();
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

function callProcedure(procedureName, args = []) {
    // let placeholders = (args.length === 1 && !isNaN(args[0])) ? args[0] : generatePlaceholders(args);
    let placeholders = !args.some(isNaN) ? args : generatePlaceholders(args);
    console.log("--procedure args--", placeholders);
    let callString = `CALL ${procedureName}(${placeholders});`; // CALL GetChirps();, or CALL InsertChirp(?,?,?);
    return executeQuery(callString, args);
}

function rows(procedureName, args = []) {
    return callProcedure(procedureName, args)
    .then((resultsets) => {
        return resultsets[0];
    });
}

function row(procedureName, args = []) {
    console.log("--row args--", args);
    return callProcedure(procedureName, args)
    .then((resultsets) => {
        return resultsets[0][0];
    });
}

function empty(procedureName, args = []) {
    return callProcedure(procedureName, args)
    .then(() => {
        return;
    });
}

function generatePlaceholders(args = []) {
    console.log("--placeholders before--", args);
    let placeholders = '';
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            console.log(`--placeholder-${i}--`, placeholders);
            if (i === args.length - 1) { // if we are on the last argument in the array
                placeholders += '?';
            } else {
                placeholders += '?,';
            }
        }
    }

    console.log("--placeholders after--", placeholders);
    return placeholders;
}

function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
}

export { row, rows, empty, executeQuery, generatePlaceholders };