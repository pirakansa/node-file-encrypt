/**
 * Copyright (c) 2018 pirakansa
 */
import fs from "fs";

/**
 * data to file
 * @param {string} filename file path
 * @param {buffer} buf clear data
 * @param {func(err)} funcerr callback
 */
export function FileRestoration(filename, buf, funcerr = null) {
    fs.writeFile(filename, buf, err => {
        if (err && funcerr) funcerr(err);
    });
}

/**
 * file to data
 * @param {string} filename file path
 * @param {func(buffer)} func callback
 * @param {func(err)} funcerr callback
 */
export function FileAnalysis(filename, func, funcerr = null) {
    fs.readFile(filename, (err, data) => {
        if (err && funcerr) funcerr(err);
        else if (func) func(data);
    });
}
