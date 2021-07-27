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
      pool_id: 'joe-usdt',
      network: 'TraderJoe',
      snowglobe: '0x18807D2e81F4dd7cef1348B70d23257A587e304E',
      nickname: 'Joe-USDT Joe LP',
      token0: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
      token1: '0xde3A24028580884448a5397872046a019649b084',
      pair: '0x29e0120dE4406E9B2e28b15937B67EAe5e50C510',
      stake: '0xd6a4F121CA35509aF06A0Be99093d08462f53052'
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