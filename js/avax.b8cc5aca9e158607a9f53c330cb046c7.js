/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

$(function () {
  
    consoleInit();
    start(main);
  
  });
  
  const thispagespools = [
    {
      pool_id: 'avax-wbtc',
      network: 'Pangolin',
      snowglobe: '0x39BE35904f52E83137881C0AC71501Edf0180181',
      nickname: 'AVAX-WBTC Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      pair: '0x7a6131110b82dacbb5872c7d352bfe071ea6a17c',
      stake: '0xe968e9753fd2c323c2fe94caff954a48afc18546'
    },
    {
      pool_id: 'avax-usdt',
      network: 'Pangolin',
      snowglobe: '0x3fcFBCB4b368222fCB4d9c314eCA597489FE8605',
      nickname: 'AVAX-USDT Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xde3A24028580884448a5397872046a019649b084',
      pair: '0x9EE0a4E21bd333a6bb2ab298194320b8DaA26516',
      stake: '0x94c021845efe237163831dac39448cfd371279d6'
    },
    { 
      pool_id: 'avax-link',
      network: 'Pangolin',
      snowglobe: '0x00933c16e06b1d15958317C2793BC54394Ae356C',
      nickname: 'AVAX-LINK Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
      pair: '0xbbc7fff833d27264aac8806389e02f717a5506c9',
      stake: '0xbda623cdd04d822616a263bf4edbbce0b7dc4ae7'
    },
    {
      pool_id: 'avax-eth',
      network: 'Pangolin',
      snowglobe: '0x586554828eE99811A8ef75029351179949762c26',
      nickname: 'AVAX-ETH Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
      pair: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65',
      stake: '0x417c02150b9a31bcacb201d1d60967653384e1c6'
    },
    {
      pool_id: 'avax-png',
      network: 'Pangolin',
      snowglobe: '0x621207093D2e65Bf3aC55dD8Bf0351B980A63815',
      nickname: 'AVAX-PNG Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x60781C2586D68229fde47564546784ab3fACA982',
      pair: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
      stake: '0x574d3245e36cf8c9dc86430eadb0fdb2f385f829'
    },
    {
      pool_id: 'avax-sushi',
      network: 'Pangolin',
      snowglobe: '0x751089F1bf31B13Fa0F0537ae78108088a2253BF',
      nickname: 'AVAX-SUSHI Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
      pair: '0xd8B262C0676E13100B33590F10564b46eeF652AD',
      stake: '0xda354352b03f87f84315eef20cdd83c49f7e812e'
    },
    {
      pool_id: 'avax-dai',
      network: 'Pangolin',
      snowglobe: '0xb21b21E4fA802EE4c158d7cf4bD5416B8035c5e0',
      nickname: 'AVAX-DAI Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
      pair: '0x17a2e8275792b4616befb02eb9ae699aa0dcb94b',
      stake: '0x701e03fad691799a8905043c0d18d2213bbcf2c7'
    },
    {
      pool_id: 'avax-uni',
      network: 'Pangolin',
      snowglobe: '0xdf7F15d05d641dF701D961a38d03028e0a26a42D',
      nickname: 'AVAX-UNI Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xf39f9671906d8630812f9d9863bBEf5D523c84Ab',
      pair: '0x92dc558cb9f8d0473391283ead77b79b416877ca',
      stake: '0x1f6acc5f5fe6af91c1bb3bebd27f4807a243d935'
    },
    {
      pool_id: 'avax-vso',
      network: 'Pangolin',
      snowglobe: '0x888Ab4CB2279bDB1A81c49451581d7c243AffbEf',
      nickname: 'AVAX-VSO Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a',
      pair: '0x2b532bc0afae65da57eccfb14ff46d16a12de5e6',
      stake: '0xf2b788085592380bfCAc40Ac5E0d10D9d0b54eEe'
    },
    {
      pool_id: 'avax-snob',
      network: 'Pangolin',
      snowglobe: '0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7',
      nickname: 'AVAX-SNOB Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
      pair: '0xa1c2c3b6b120cbd4cec7d2371ffd4a931a134a32',
      stake: '0x640D754113A3CBDd80BcCc1b5c0387148EEbf2fE'
    },
    {
      pool_id: 'avax-spore',
      network: 'Pangolin',
      snowglobe: '0x27f8FE86a513bAAF18B59D3dD15218Cc629640Fc',
      nickname: 'AVAX-SPORE Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985',
      pair: '0x0a63179a8838b5729e79d239940d7e29e40a0116',
      stake: '0xd3e5538A049FcFcb8dF559B85B352302fEfB8d7C'
    },
    {
      pool_id: 'joe-avax-eth',
      network: 'TraderJoe',
      snowglobe: '0xAbD637a6881a2D4bbf279aE484c2447c070f7C73',
      nickname: 'AVAX-ETH Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
      pair: '0xc992Ab46428a5a2eDeB8F44D946CE5642F97EF71',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-png',
      network: 'TraderJoe',
      snowglobe: '0x962ECf51A169090002CC88B4Bf16e447d2E13100',
      nickname: 'AVAX-PNG Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x60781C2586D68229fde47564546784ab3fACA982',
      pair: '0x3dAF1C6268362214eBB064647555438c6f365F96',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-joe',
      network: 'TraderJoe',
      snowglobe: '0xcC757081C972D0326de42875E0DA2c54af523622',
      nickname: 'AVAX-JOE Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
      pair: '0x454E67025631C065d3cFAD6d71E6892f74487a15',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-snob',
      network: 'TraderJoe',
      snowglobe: '0x8b2E1802A7E0E0c7e1EaE8A7c636058964e21047',
      nickname: 'AVAX-SNOB Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
      pair: '0x8fB5bD3aC8eFD05DACae82F512dD03e14aAdAb73',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-spore',
      network: 'TraderJoe',
      snowglobe: '0x2f17BAC3E0339C1BFB6E0DD380d65bd2Fc665C75',
      nickname: 'AVAX-SPORE Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985',
      pair: '0x7012ae2b092f12be1820acd5f1aed5d73e3116e6',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'avax-bnb',
      network: 'Pangolin',
      snowglobe: '0x39BF214A93EC72e42bC0B9b8C07BE1af6Fe169dA',
      nickname: 'AVAX-BNB Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x264c1383EA520f73dd837F915ef3a732e204a493',
      pair: '0xF776Ef63c2E7A81d03e2c67673fd5dcf53231A3f',
      stake: '0x21CCa1672E95996413046077B8cf1E52F080A165'
    },
    {
      pool_id: 'joe-avax-xava',
      network: 'TraderJoe',
      snowglobe: '0x0B2C4f6C54182EDeE30DFF69Be972f9E04888321',
      nickname: 'AVAX-XAVA Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
      pair: '0x72c3438cf1c915EcF5D9F17A6eD346B273d5bF71',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-usdt',
      network: 'TraderJoe',
      snowglobe: '0xB305856C54efC004955BC51e3D20ceF566C11eEE',
      nickname: 'AVAX-USDT Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xde3A24028580884448a5397872046a019649b084',
      pair: '0xE4B9865C0866346BA3613eC122040A365637fB46',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-dai',
      network: 'TraderJoe',
      snowglobe: '0xAD050d11521dd1dD2Cc136A9e979BAA8F6Fab69a',
      nickname: 'AVAX-DAI Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
      pair: '0x43B9C8dEC26C2D21146466cAacabf94FdbEac473',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'png-avax-xava',
      network: 'Pangolin',
      snowglobe: '0x6AB8DAC517c244f53D86a155a14064E86c2dE653',
      nickname: 'AVAX-XAVA Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
      pair: '0x42152bDD72dE8d6767FE3B4E17a221D6985E8B25',
      stake: '0x4219330Af5368378D5ffd869a55f5F2a26aB898c'
    },
    {
      pool_id: 'joe-avax-vso',
      network: 'TraderJoe',
      snowglobe: '0xFB3ba5884aD5eBD93C7CB095e4cE08B1C365c2ea',
      nickname: 'AVAX-VSO Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x846D50248BAf8b7ceAA9d9B53BFd12d7D7FBB25a',
      pair: '0x00979Bd14bD5Eb5c456c5478d3BF4b6E9212bA7d',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-elk',
      network: 'TraderJoe',
      snowglobe: '0x6440365E1c9282F50477b1F00289b3A7218E47Ef',
      nickname: 'AVAX-ELK Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C',
      pair: '0x88D000E853d03E7D59CE602dff736Dc39aD118fb',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-wbtc',
      network: 'TraderJoe',
      snowglobe: '0x86b109380aB2c34B740848b06Bee62C882F01df5',
      nickname: 'AVAX-WBTC Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB',
      pair: '0xbeB0b5FBd99b8e7498A4063CB419646922F6Eef8',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-pefi',
      network: 'TraderJoe',
      snowglobe: '0x68691a1e8eAAE3dFDcC300BbC0d6D3902bA06E8d',
      nickname: 'AVAX-PEFI Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
      pair: '0xb78c8238bD907c42BE45AeBdB4A8C8a5D7B49755',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-link',
      network: 'TraderJoe',
      snowglobe: '0x4bD6D4fE5E3bBaa0FfB075EE9F0980FbcC6c0192',
      nickname: 'AVAX-LINK Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
      pair: '0xA964239892FB28b5565C70A51Fd4106F29f47A52',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'joe-avax-sherpa',
      network: 'TraderJoe',
      snowglobe: '0x75312b14Ce830EC078D93Ac8FA667b14BEAC18E6',
      nickname: 'AVAX-SHERPA Joe LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6',
      pair: '0xf0d7EC33147Ec3bEfd24B880472307bF3a01BB8A',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
    },
    {
      pool_id: 'png-avax-pefi',
      network: 'Pangolin',
      snowglobe: '0x5fb4d08bCBD444fDD5a0545fdB0C86783D186382',
      nickname: 'AVAX-PEFI Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
      pair: '0x494Dd9f783dAF777D3fb4303da4de795953592d0',
      stake: '0xd7EDBb1005ec65721a3976Dba996AdC6e02dc9bA'
    },
    {
      pool_id: 'png-avax-sherpa',
      network: 'Pangolin',
      snowglobe: '0x5B8eE2c0a4f249e16f26d31636F1ed79df5405f9',
      nickname: 'AVAX-SHERPA Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6',
      pair: '0xD27688e195B5495a0eA29Bb6e9248E535A58511e',
      stake: '0x99918c92655D6f8537588210cD3Ddd52312CB36d'
    },
    {
      pool_id: 'png-avax-tryb',
      network: 'Pangolin',
      snowglobe: '0xEb1010B9CF8484fcA2650525d477DD002fa889cE',
      nickname: 'AVAX-TRYB Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x564A341Df6C126f90cf3ECB92120FD7190ACb401',
      pair: '0x6b41673fEff1bf0b55Ba2C9F4bf213b2bE8F474D',
      stake: '0x079a479e270E72A1899239570912358C6BC22d94'
    },
    {
      pool_id: 'png-avax-usdt.e',
      network: 'Pangolin',
      snowglobe: '0x7CC8068AB5FC2D8c843C4b1A6572a1d1E742D7c8',
      nickname: 'AVAX-USDT.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
      pair: '0xe28984e1EE8D431346D32BeC9Ec800Efb643eef4',
      stake: '0x006cC053bdb84C2d6380B3C4a573d84636378A47'
    },
    {
      pool_id: 'png-avax-dai.e',
      network: 'Pangolin',
      snowglobe: '0x56A6e103D860FBb991eF1Afd24250562a292b2a5',
      nickname: 'AVAX-DAI.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
      pair: '0xbA09679Ab223C6bdaf44D45Ba2d7279959289AB0',
      stake: '0x63A84F66b8c90841Cb930F2dC3D28799F0c6657B'
    },
    {
      pool_id: 'png-avax-sushi.e',
      network: 'Pangolin',
      snowglobe: '0x5cce813cd2bBbA5aEe6fddfFAde1D3976150b860',
      nickname: 'AVAX-SUSHI.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
      pair: '0xF62381AFFdfd27Dba91A1Ea2aCf57d426E28c341',
      stake: '0x2D55341f2abbb5472020e2d556a4f6B951C8Fa22'
    },
    {
      pool_id: 'png-avax-link.e',
      network: 'Pangolin',
      snowglobe: '0x08D5Cfaf58a10D306937aAa8B0d2eb40466f7461',
      nickname: 'AVAX-LINK.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x5947BB275c521040051D82396192181b413227A3',
      pair: '0x5875c368Cddd5FB9Bf2f410666ca5aad236DAbD4',
      stake: '0x2e10D9d08f76807eFdB6903025DE8e006b1185F5'
    },
    {
      pool_id: 'png-avax-wbtc.e',
      network: 'Pangolin',
      snowglobe: '0x04A3B139fcD004b2A4f957135a3f387124982133',
      nickname: 'AVAX-WBTC.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x50b7545627a5162F82A992c33b87aDc75187B218',
      pair: '0x5764b8D8039C6E32f1e5d8DE8Da05DdF974EF5D3',
      stake: '0x30CbF11f6fcc9FC1bF6E55A6941b1A47A56eAEC5'
    },
    {
      pool_id: 'png-avax-eth.e',
      network: 'Pangolin',
      snowglobe: '0xfEC005280ec0870A5dB1924588aE532743CEb90F',
      nickname: 'AVAX-ETH.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      pair: '0x7c05d54fc5CB6e4Ad87c6f5db3b807C94bB89c52',
      stake: '0x830A966B9B447c9B15aB24c0369c4018E75F31C9'
    },
    {
      pool_id: 'png-avax-yfi.e',
      network: 'Pangolin',
      snowglobe: '0x2ad520b64e6058654FE6E67bc790221772b63ecE',
      nickname: 'AVAX-YFI.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc',
      pair: '0x9a634CE657681200B8c5fb3Fa1aC59Eb0662f45C',
      stake: '0x642c5B7AC22f56A0eF87930a89f0980FcA904B03'
    },
    {
      pool_id: 'png-avax-uni.e',
      network: 'Pangolin',
      snowglobe: '0xf2596c84aCf1c7350dCF6941604DEd359dD506DB',
      nickname: 'AVAX-UNI.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580',
      pair: '0x99dD520748eB0355c69DAE2692E4615C8Ab031ce',
      stake: '0x6E36A71c1A211f01Ff848C1319D4e34BB5483224'
    },
    {
      pool_id: 'png-avax-aave.e',
      network: 'Pangolin',
      snowglobe: '0x7F8E7a8Bd63A113B202AE905877918Fb9cA13091',
      nickname: 'AVAX-AAVE.e Pangolin LP',
      token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      token1: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
      pair: '0x5944f135e4F1E3fA2E5550d4B5170783868cc4fE',
      stake: '0xa04fCcE7955312709c838982ad0E297375002C32'
    }
  ]
  
  async function main() {  
  
    return Promise.all([
      init_ethers(),
      getAvaxPrices()
    ]).then(results => {
      
      window.app = results[0]  
      window.prices = results[1]  
      window.tvl = 0;
      
      gentop().then(td => { console.log('top done:', td) })
      genpool(thispagespools.pop())
  
    })
  
  }
