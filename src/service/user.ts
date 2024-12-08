import { verifySignature } from '@solana/web3.js';

class UserService {

    async signatureVerification(publicKey: any, signedMessage: any, message: any) {
        try {
            const verification = await verifySignature(publicKey, signedMessage, message);
            return verification
        }
        catch (err) {
            throw err;
        }
    }
}
export default UserService