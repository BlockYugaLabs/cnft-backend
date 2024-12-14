import { PublicKey, none } from '@metaplex-foundation/umi'
import { getAssetWithProof, mintV1, transfer } from '@metaplex-foundation/mpl-bubblegum'
import umi from './umi'
import { dasApi } from '@metaplex-foundation/digital-asset-standard-api';
class Cnft {

    async createCnft(leafOwner: any, merkleTree: any) {
        umi.use(dasApi());

        await mintV1(umi, {
            leafOwner,
            merkleTree,
            metadata: {
                name: 'My Compressed NFT',
                uri: 'https://example.com/my-cnft.json',
                sellerFeeBasisPoints: 500, // 5%
                collection: none(),
                creators: [
                    { address: umi.identity.publicKey, verified: false, share: 100 },
                ],
            },
        }).sendAndConfirm(umi)
    }

    async fetchCnft(assetId: PublicKey) {

        const rpcAsset = await umi.rpc.getAsset(assetId)
    }

    async transferCnft(assetId: PublicKey, currentLeafOwner: any, newLeafOwner: { publicKey: any; }) {
        const assetWithProof = await getAssetWithProof(umi, assetId, { truncateCanopy: true });
        await transfer(umi, {
            ...assetWithProof,
            leafOwner: currentLeafOwner,
            newLeafOwner: newLeafOwner.publicKey,
        }).sendAndConfirm(umi)
    }
}