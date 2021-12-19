require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong razor screen public inside light army gasp'; 
let testAccounts = [
"0xd5953a25d2fb31579fa26c08969ad893c5e71474e56f9bdcd526b5b06ce7feb0",
"0xebbfadfdb083dede35bf0bb905d1ef283465dc9993e4c7f572351caaf68df4cb",
"0xb1b3880d484779813073ca57d8b5bcbdd3048888385d90cc4eb4fa69ef4f54b8",
"0x61a270c3146512193c3d48a42c6fa98101cea90191424706c1fc76f20a3e40ae",
"0x726eae1a4e226fdc8457d6383fd2b0c6c38482b9f5b1fcb1c5a8cdb450634750",
"0x5626b8ebded4868ed65c130c29e8792bbcd89eb026c7db619978bb9c5a61b84f",
"0xab2101225b46377f791da009bb529d85bbc6588ea5cdcf6ee57f3a11b63d43f0",
"0x079fbff3e1604cad63bdecb21440e80db20fb076d558f05061e82bb9b17a0f73",
"0xb71cf936a7263c282f81624fbf88f7e4732701ed4262e7c783c23173cb9e83dd",
"0xd62c94b5a6ed2d52c49aa0c8f29beb2b1f254146d7efe8153dd25a2c158995e1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


