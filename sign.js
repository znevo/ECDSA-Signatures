const secp = require("ethereum-cryptography/secp256k1");
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

// TODO: fill in your hex private key
const privateKey = "";
const publicKey = secp.getPublicKey(privateKey);

// TODO: change this message to whatever you would like to sign
const message = "I am in the ChainShot Bootcamp";
const messageHash = toHex(sha256(utf8ToBytes(message)));

// TODO: try to create a signature with a recoverable public key
const [signature, recoveryBit] = secp.signSync(messageHash, privateKey, { recovered: true });
// const signature = secp.signSync(messageHash, privateKey);
const isSigned = secp.verify(signature, messageHash, publicKey);

console.log({
    messageHash: messageHash,
    signature: toHex(signature),
    recoveryBit, // optional, remove if not initialized
    isSigned
});
