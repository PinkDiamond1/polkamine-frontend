import { ethers } from 'ethers'

const IS_MAINNET = process.env.NETWORK === 'mainnet'

const CHAIN_ID = IS_MAINNET ? 1 : 3

const CONTRACTS = IS_MAINNET
  ? {
    MNET: '0x92cF42Fc62dc6dF071E87d4d18d4daa432C4327D',
    USDT: '0x51071F965C51087519B1B8d8d1b53F36eaBa91cc',
    pBTCM: '0xf6BecB45FE7bce4cA256A62f6f2e2919Eaf2564A',
    pETHM: '0x726D0b0438F185173ab0EAEbAa2bF32a2Fc70e49',
    wBTCO: '0x1fc93aAB63a459264588A7d7Bf2Ca4D7b86c34Fe',
    wETHO: '0xb24eD5294db277652b5B5251D9BEa32FeAa3B109',
    POLKAMINE_ADMIN: '0xDE4858a1Ec951dd3c86Ece36D94cFa477F611980',
    POLKAMINE_POOL_MANAGER: '0xc197F3106f345a3Ce16b4b34D4Bbf82971714dAA',
    POLKAMINE_REWARD_DISTRIBUTOR: '0xD1c1F1965045574AE875cE7ABEC8a1eCF5cB3295',
    TOKEN_SALE: '0x143C8431178E55b80f981B1bEEC3287064305Dcc'
  } : {
    MNET: '0x92cF42Fc62dc6dF071E87d4d18d4daa432C4327D',
    USDT: '0x51071F965C51087519B1B8d8d1b53F36eaBa91cc',
    pBTCM: '0xf6BecB45FE7bce4cA256A62f6f2e2919Eaf2564A',
    pETHM: '0x726D0b0438F185173ab0EAEbAa2bF32a2Fc70e49',
    wBTCO: '0x1fc93aAB63a459264588A7d7Bf2Ca4D7b86c34Fe',
    wETHO: '0xb24eD5294db277652b5B5251D9BEa32FeAa3B109',
    POLKAMINE_ADMIN: '0xDE4858a1Ec951dd3c86Ece36D94cFa477F611980',
    POLKAMINE_POOL_MANAGER: '0xc197F3106f345a3Ce16b4b34D4Bbf82971714dAA',
    POLKAMINE_REWARD_DISTRIBUTOR: '0xD1c1F1965045574AE875cE7ABEC8a1eCF5cB3295',
    TOKEN_SALE: '0x143C8431178E55b80f981B1bEEC3287064305Dcc'
  }

const PROVIDER = new ethers.providers.getDefaultProvider(IS_MAINNET ? 'homestead' : 'ropsten');

export {
  IS_MAINNET,
  CHAIN_ID,
  CONTRACTS,
  PROVIDER
}