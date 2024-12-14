import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplBubblegum } from '@metaplex-foundation/mpl-bubblegum'
import config from '../config';

const { RPC_URL } = config;
// Use the RPC endpoint of your choice.
const umi = createUmi(RPC_URL).use(mplBubblegum())

export default umi;