/**
 * Copyright (c) 2018 pirakansa
 */
import crypto from "crypto";
import config from "config";

const KEY = config.get("Encrypt.Key");
const IV = config.get("Encrypt.InitialVector");
const ALGORITHM = config.get("Encrypt.Algorithm");

/**
 * get cipher object
 * @returns {cipher} cipher object
 */
export function GetCipherObj() {
    return crypto.createCipheriv(ALGORITHM, KEY, IV);
}

/**
 * get decipher object
 * @returns {decipher} decipher object
 */
export function GetDecipherObj() {
    return crypto.createDecipheriv(ALGORITHM, KEY, IV);
}
