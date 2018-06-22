/**
 * Copyright (c) 2018 pirakansa
 */
import program from "commander";
import fs from "fs";
import config from "config";
import * as encrypt from "./EncryptionData";

const BUFFER_MAX_SIZE = config.get("Stream.BufferSizeByKbyte") * 1024;

/**
 * xor
 * @param {bool} a
 * @param {bool} b
 */
function XOR(a, b) {
    return (a || b) && !(a && b);
}

/**
 * print error message
 * @param {err} err
 */
function ErrorCall(err = null) {
    if (err) console.error(err.message);
}

/**
 * print exit message
 */
function ExitCall() {
    console.log("Done.");
}

/**
 * main
 */
program
    .version(process.env.npm_package_version, "-v, --version")
    .option("-i, --if <n>", "input file")
    .option("-o, --of <n>", "output file")
    .option("-e, --encode", "do encode")
    .option("-d, --decode", "do decode")
    .parse(process.argv);

if (!program.if) process.exit(1);
if (!program.of) process.exit(1);
if (!XOR(program.encode, program.decode)) process.exit(1);

const ifname = program.if;
const ofname = program.of;

let src = fs.createReadStream(ifname, { highWaterMark: BUFFER_MAX_SIZE });
src.on("error", ErrorCall);
let dest = fs.createWriteStream(ofname, { highWaterMark: BUFFER_MAX_SIZE });
dest.on("error", ErrorCall).on("finish", ExitCall);
let cipherobj = program.encode
    ? encrypt.GetCipherObj()
    : encrypt.GetDecipherObj();

src.pipe(cipherobj).pipe(dest);
