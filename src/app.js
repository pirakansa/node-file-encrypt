/**
 * Copyright (c) 2018 pirakansa
 */
import program from "commander";
import * as solve from "./FileSolve";
import * as encrypt from "./DataEncryption";

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
 * process on exit
 */
process.on("exit", code => {
    console.log("Done.");
});

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

const OUTPUT_FILE_PATH = program.of;
const INPUT_FILE_PATH = program.if;

if (program.encode)
    solve.FileAnalysis(INPUT_FILE_PATH, data => {
        solve.FileRestoration(
            OUTPUT_FILE_PATH,
            encrypt.CipherData(data),
            ErrorCall
        );
    });
else if (program.decode)
    solve.FileAnalysis(INPUT_FILE_PATH, data => {
        solve.FileRestoration(
            OUTPUT_FILE_PATH,
            encrypt.DecipherData(data),
            ErrorCall
        );
    });
