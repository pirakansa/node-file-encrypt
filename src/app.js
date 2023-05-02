import { Command } from "commander";
import fs from "fs";
import * as encrypt from "./EncryptionData";

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
const program = new Command();
program.version(process.env.npm_package_version, "-v, --version");
program.option("-i, --if <path>", "input file");
program.option("-o, --of <path>", "output file");
program.option("-e, --encode", "do encode");
program.option("-d, --decode", "do decode");
program.parse(process.argv);

const options = program.opts();

if (!options.if) process.exit(1);
if (!options.of) process.exit(2);
if (!XOR(options.encode, options.decode)) process.exit(3);

const ifname = options.if;
const ofname = options.of;

let src = fs.createReadStream(ifname, { flags: "r" });
src.on("error", ErrorCall);
let dest = fs.createWriteStream(ofname, { flags: "wx+" });
dest.on("error", ErrorCall).on("finish", ExitCall);
let cipherobj = options.encode
    ? encrypt.GetCipherObj()
    : encrypt.GetDecipherObj();

src.pipe(cipherobj).pipe(dest);
