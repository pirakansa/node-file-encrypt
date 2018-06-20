/**
 * Copyright (c) 2018 pirakansa
 */
import crypto from "crypto";
import config from "config";
import { Buffer } from "buffer";

const KEY = config.get("Encrypt.Key");
const IV = config.get("Encrypt.InitialVector");
const ALGORITHM = config.get("Encrypt.Algorithm");

/**
 * clear data to secure data
 * @param {data} data clear data
 * @returns {data} secure data
 */
export function CipherData(data) {
    let cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
    return Buffer.concat([cipher.update(data), cipher.final()]);
}

/**
 * secure data to clear data
 * @param {data} data secure data
 * @returns {data} clear data
 */
export function DecipherData(data) {
    let decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
    return Buffer.concat([decipher.update(data), decipher.final()]);
}
