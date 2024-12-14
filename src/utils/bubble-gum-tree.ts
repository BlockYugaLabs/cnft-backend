import { generateSigner } from '@metaplex-foundation/umi'
import { createTree } from '@metaplex-foundation/mpl-bubblegum'
import umi from "./umi"


async function generateBubbleGumTree() {

    const merkleTree = generateSigner(umi)
    const builder = await createTree(umi, {
        merkleTree,
        maxDepth: 14,
        maxBufferSize: 64,
    })
    await builder.sendAndConfirm(umi)
}