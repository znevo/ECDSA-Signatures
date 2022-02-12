const secp = require("ethereum-cryptography/secp256k1");
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes, toHex, hexToBytes } = require("ethereum-cryptography/utils");
const { recoverPublicKey } = require("@noble/secp256k1");

// TODO: fill in the public key -OR- recover it from the signature below
// const publicKey = hexToBytes("");

// TODO: change this message to whatever was signed
const msg = "I am in the ChainShot Bootcamp";
const msgHash = toHex(sha256(utf8ToBytes(msg)));

// TODO: fill in the signature components
const signature = "";
const recoveryBit = 0;

// TODO: alternative try to recover the public key from the signature
const publicKey = recoverPublicKey(msgHash, signature, recoveryBit);

console.log({
    publicKey: toHex(publicKey),
    isVerified: secp.verify(signature, msgHash, publicKey),
});
