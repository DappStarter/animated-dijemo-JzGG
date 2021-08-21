require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain minor heavy clock forward genre'; 
let testAccounts = [
"0xc8c844083d5ec5b03c46e2f2fabaf7fd2616da09a64a59335b474afae8579639",
"0xcbdb5acc391845eed8d006b7522757ff0c6436618ffbd05ba1cc55b785fa3a75",
"0x689bf7df3061df76b3e5625aaffc72be3efca6ac3de8d4a35d6ad30fac6e5714",
"0x83c4c01b3633875e8dcad8841315d8bb5a0a61f7b587e4a417266fb6e97595ac",
"0x71682698687e4654d7ca426e8d93d69d02780dd1818b13c35b7cc404f0b32c39",
"0xe11bfea164d698978a7bb9ffda6409ff15c872a5a2cc983775834d4771fd1fc4",
"0xf282a39af7ecddb98e623908f16f6d4aecd0f71b1dd0bbe7e2694a49d6d867b7",
"0xc1efb52553da79b7e6d28e30166a2980585c2bcf5c0243eb69ea4ebd73c6fce3",
"0xc20914d5aa5e2e772e0bdf558b0844bf4d184178c8389f28c29ed4e37f61d1c4",
"0xe0752a9ff3e570b74494a3a69db322a36cdf6304a3bee6019549fde6fcc9307e"
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


