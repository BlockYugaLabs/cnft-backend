

import { verifySignature, getBase58Decoder, generateKeyPair, getUtf8Encoder, signBytes, SignatureBytes, getBase58Encoder } from '@solana/web3.js';

import { webcrypto } from 'crypto';

global.crypto = webcrypto;

class UserService {

    async signatureVerification(publickey: any, signedMessage: any, message: string) {
        try {

            const message_bytes = getUtf8Encoder().encode(message);
            const signature_bytes = getBase58Encoder().encode(signedMessage) as SignatureBytes;
            const verification = await verifySignature(publickey, signature_bytes, message_bytes);
            return verification
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserService