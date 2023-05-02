import crypto from "crypto";
import config from "config";

const PHRASE = config.get("Encrypt.Phrase");
const ALGORITHM = config.get("Encrypt.Algorithm");

/**
 * get Encriptkey object
 * @returns {EncriptKey} EncriptKey object
 */
function GetEncriptKey(phrase) {
	const sh = crypto.createHash("sha256").update(phrase).digest();
    const md = crypto.createHash("md5").update(phrase).digest();
    const sh_md = crypto.createHash("sha256").update(md).digest();
    const iv = sh_md.subarray(0, sh.length/2);
	return {Key: sh, InitialVector: iv}
}

/**
 * get cipher object
 * @returns {cipher} cipher object
 */
export function GetCipherObj() {
    const key = GetEncriptKey(PHRASE);
    return crypto.createCipheriv(ALGORITHM, key.Key, key.InitialVector);
}

/**
 * get decipher object
 * @returns {decipher} decipher object
 */
export function GetDecipherObj() {
    const key = GetEncriptKey(PHRASE);
    return crypto.createDecipheriv(ALGORITHM, key.Key, key.InitialVector);
}
