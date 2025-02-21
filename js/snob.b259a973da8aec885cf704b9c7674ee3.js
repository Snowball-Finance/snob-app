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
    pool_id: 'avax-snob',
    snowglobe: '0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7',
    nickname: 'AVAX-SNOB Pangolin LP',
    token0: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    token1: '0xC38f41A296A4493Ff429F1238e030924A1542e50', 
    pair: '0xa1c2c3b6b120cbd4cec7d2371ffd4a931a134a32',
    stake: '0x640D754113A3CBDd80BcCc1b5c0387148EEbf2fE'
  },
  {
    pool_id: 'png-snob',
    snowglobe: '0xB4db531076494432eaAA4C6fCD59fcc876af2734',
    nickname: 'PNG-SNOB Pangolin LP',
    token0: '0x60781C2586D68229fde47564546784ab3fACA982',
    token1: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
    pair: '0x97b4957df08e185502a0ac624f332c7f8967ee8d',
    stake: '0x08B9A023e34Bad6Db868B699fa642Bf5f12Ebe76'
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