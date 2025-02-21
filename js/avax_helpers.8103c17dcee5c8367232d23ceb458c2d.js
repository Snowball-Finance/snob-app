/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/

const avaxTokens = [ 
    { "id": "avalanche-2","symbol": "AVAX","contract": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
    { "id": "pangolin","symbol": "PNG", "contract": "0x60781C2586D68229fde47564546784ab3fACA982" },
    { "id": "snowball-token","symbol": "SNOB", "contract": "0xC38f41A296A4493Ff429F1238e030924A1542e50" },
    { "id": "sushi","symbol": "SUSHI", "contract": "0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc" },
    { "id": "ethereum","symbol": "ETH", "contract": "0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15" },
    { "id": "chainlink","symbol": "LINK", "contract": "0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651" },
    { "id": "tether","symbol": "USDT", "contract": "0xde3A24028580884448a5397872046a019649b084" },
    { "id": "bitcoin","symbol": "BTC", "contract": "0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab" },
    { "id": "uniswap","symbol": "UNI", "contract": "0xf39f9671906d8630812f9d9863bBEf5D523c84Ab" },
    { "id": "aave","symbol": "AAVE", "contract": "0x8ce2dee54bb9921a2ae0a63dbb2df8ed88b91dd9" },
    { "id": "dai","symbol": "DAI", "contract": "0xba7deebbfc5fa1100fb055a87773e1e99cd3507a" },
    { "id": "yearn-finance", "symbol": "YFI", "contract": "0x99519acb025a0e0d44c3875a4bbf03af65933627" },
    { "id": "verso", "symbol": "VSO", "contract": "0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a" },
    { "id": "wrapped-bitcoin", "symbol": "WBTC", "contract": "0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB" },
    { "id": "spore", "symbol": "SPORE", "contract": "0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985" },
    { "id": "joe", "symbol": "JOE ", "contract": "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd" },
    { "id": "penguin-finance", "symbol": "PEFI", "contract": "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c" },
    { "id": "sherpa", "symbol": "SHERPA", "contract": "0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6" },
    { "id": "avalaunch", "symbol": "XAVA", "contract": "0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4" },
    { "id": "elk", "symbol": "ELK", "contract": "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C" },
    { "id": "bilira", "symbol": "TRYB", "contract": "0x564A341Df6C126f90cf3ECB92120FD7190ACb401" },
    { "id": "yearn-finance", "symbol": "YFI.e", "contract": "0x9eAaC1B23d935365bD7b542Fe22cEEe2922f52dc" },
    { "id": "uniswap", "symbol": "UNI.e", "contract": "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580" },
    { "id": "aave", "symbol": "AAVE.e", "contract": "0x63a72806098Bd3D9520cC43356dD78afe5D386D9" },
    { "id": "tether", "symbol": "USDT.e", "contract": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118" },
    { "id": "dai", "symbol": "DAI.e", "contract": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70" },
    { "id": "sushi", "symbol": "SUSHI.e", "contract": "0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76" },
    { "id": "chainlink", "symbol": "LINK.e", "contract": "0x5947BB275c521040051D82396192181b413227A3" },
    { "id": "bitcoin", "symbol": "WBTC.e", "contract": "0x50b7545627a5162F82A992c33b87aDc75187B218" },
    { "id": "etherum", "symbol": "ETH.e", "contract": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB" },
]

async function getAvaxPrices() {
    const idPrices = await lookUpPrices(avaxTokens.map(x => x.id));
    const prices = {}
    for (const bt of avaxTokens)
        if (idPrices[bt.id])
            prices[bt.contract] = idPrices[bt.id];
    return prices;
}

async function getAvaxUniPool(App, pool, poolAddress, stakingAddress) {    
    let q0, q1;
    const reserves = await pool.getReserves();
    q0 = reserves._reserve0;
    q1 = reserves._reserve1;
    const decimals = await pool.decimals();
    const token0 = await pool.token0();
    const token1 = await pool.token1();
    return { 
        symbol : await pool.symbol(),
        name : await pool.name(),
        address: poolAddress,
        token0,
        q0,
        token1,
        q1,
        totalSupply: await pool.totalSupply() / 10 ** decimals,
        stakingAddress: stakingAddress,
        staked: await pool.balanceOf(stakingAddress) / 10 ** decimals,
        decimals: decimals,
        unstaked: await pool.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
        contract: pool,
        tokens : [token0, token1],
        is1inch : false
    };
}

async function getAvax20(App, token, address, stakingAddress) {
    if (address == "0x0000000000000000000000000000000000000000") {
      return {
        address,
        name : "Avax",
        symbol : "AVAX",
        totalSupply: 1e8,
        decimals: 18,
        staked: 0,
        unstaked: 0,
        contract: null,
        tokens:[address]
      }
    }
    const decimals = await token.decimals()
    return {
        address,
        name : await token.name(),
        symbol : await token.symbol(),
        totalSupply : await token.totalSupply(),
        decimals : decimals,
        staked:  await token.balanceOf(stakingAddress) / 10 ** decimals,
        unstaked: await token.balanceOf(App.YOUR_ADDRESS)  / 10 ** decimals,
        contract: token,
        tokens : [address]
    };
}

async function getAvaxStoredToken(App, tokenAddress, stakingAddress, type) {
  switch (type) {
    case "uniswap": 
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      return await getAvaxUniPool(App, pool, tokenAddress, stakingAddress);
    case "avax20":
      const avax20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      return await getAvax20(App, avax20, tokenAddress, stakingAddress);
  }
}

async function getAvaxToken(App, tokenAddress, stakingAddress) {
    if (tokenAddress == "0x0000000000000000000000000000000000000000") {
      return getAvax20(App, null, tokenAddress, "")
    }
    const type = window.localStorage.getItem(tokenAddress);
    if (type) return getAvaxStoredToken(App, tokenAddress, stakingAddress, type);
    try {
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      const _token0 = await pool.token0();
      const uniPool = await getAvaxUniPool(App, pool, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "uniswap");
      return uniPool;
    }
    catch(err) {
    }
    try {
      const avax20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      const _name = await avax20.name();
      const avax20tok = await getAvax20(App, avax20, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "avax20");
      return avax20tok;
    }
    catch(err) {
      console.log(err);
      console.log(`Couldn't match ${tokenAddress} to any known token type.`);
    }
  }

async function loadAvaxSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
    rewardTokenFunction, stakeTokenFunction) {
      const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);
  
      if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
        console.log("Couldn't find stake function ", stakeTokenFunction);
      }
      const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();
  
      const rewardTokenAddress = await STAKING_POOL.callStatic[rewardTokenFunction]();
  
      var stakeToken = await getAvaxToken(App, stakeTokenAddress, stakingAddress);
  
      if (stakeTokenAddress.toLowerCase() === rewardTokenAddress.toLowerCase()) {
        stakeToken.staked = await STAKING_POOL.totalSupply() / 10 ** stakeToken.decimals;
      }
  
      var newPriceAddresses = stakeToken.tokens.filter(x =>
        !getParameterCaseInsensitive(prices, x));
      var newPrices = await lookUpTokenPrices(newPriceAddresses);
      for (const key in newPrices) {
        if (newPrices[key]?.usd)
            prices[key] = newPrices[key];
      }
      var newTokenAddresses = stakeToken.tokens.filter(x =>
        !getParameterCaseInsensitive(tokens,x));
      for (const address of newTokenAddresses) {
          tokens[address] = await getAvaxToken(App, address, stakingAddress);
      }
      if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
          tokens[rewardTokenAddress] = await getAvaxToken(App, rewardTokenAddress, stakingAddress);
      }
      const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);
  
      const rewardTokenTicker = rewardToken.symbol;
  
      const poolPrices = getPoolPrices(tokens, prices, stakeToken, "avax");

      if (!poolPrices) 
      {
        console.log(`Couldn't calculate prices for pool ${stakeTokenAddress}`);
        return null;
      }
  
      const stakeTokenTicker = poolPrices.stakeTokenTicker;
  
      const stakeTokenPrice =
          prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;
      const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  
      const periodFinish = await STAKING_POOL.periodFinish();
      const rewardRate = await STAKING_POOL.rewardRate();
      const weeklyRewards = (Date.now() / 1000 > periodFinish) ? 0 : rewardRate / 1e18 * 604800;
  
      const usdPerWeek = weeklyRewards * rewardTokenPrice;
  
      const staked_tvl = poolPrices.staked_tvl;
  
      const userStaked = await STAKING_POOL.balanceOf(App.YOUR_ADDRESS) / 10 ** stakeToken.decimals;
  
      const userUnstaked = stakeToken.unstaked;
  
      const earned = await STAKING_POOL.earned(App.YOUR_ADDRESS) / 10 ** rewardToken.decimals;
  
      return  {
        stakingAddress,
        poolPrices,
        stakeTokenAddress,
        rewardTokenAddress,
        stakeTokenTicker,
        rewardTokenTicker,
        stakeTokenPrice,
        rewardTokenPrice,
        weeklyRewards,
        usdPerWeek,
        staked_tvl,
        userStaked,
        userUnstaked,
        earned
      }
}

async function loadAvaxSynthetixPool(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction) {
    const info = await loadAvaxSynthetixPoolInfo(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction);
    if (!info) return null;
    return await printSynthetixPool(App, info, "avax");
}

async function loadAvaxBasisFork(data) {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...\n");

    var tokens = {};
    var prices = {};
    var totalStaked = 0;
    
    let p1 = await loadAvaxSynthetixPool(App, tokens, prices, data.PoolABI, 
        data.SharePool.address, data.SharePool.rewardToken, data.SharePool.stakeToken);
    totalStaked += p1.staked_tvl;
    
    if (data.SharePool2) {
      let p3 = await loadAvaxSynthetixPool(App, tokens, prices, data.PoolABI, 
          data.SharePool2.address, data.SharePool2.rewardToken, data.SharePool2.stakeToken);
      totalStaked += p3.staked_tvl;
    }

    let p2 = await loadAvaxSynthetixPool(App, tokens, prices, data.PoolABI, 
        data.CashPool.address, data.CashPool.rewardToken, data.CashPool.stakeToken);
    totalStaked += p2.staked_tvl;

    if (data.SeedBanks) {
      let p = await loadMultipleAvaxSynthetixPools(App, tokens, prices, data.SeedBanks)
      totalStaked += p.staked_tvl;
      if (p.totalUserStaked > 0) {
        _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalApr * 100).toFixed(2)}%\n`);
      }
    }

    if (!data.SeedBanks)
    {
      if (data.Boardrooms) {
        for (const boardroom of data.Boardrooms) {
          let br = await loadBoardroom(App, prices, boardroom.address, data.Oracle, data.UniswapLP, data.Cash,
              data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion, 
              data.Decimals, boardroom.ratio, data.TargetMantissa);
          totalStaked += br.staked_tvl;
        }
      }
      else {
        let br = await loadBoardroom(App, prices, data.Boardroom, data.Oracle, data.UniswapLP, data.Cash,
            data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion, 
            data.Decimals, 1, data.TargetMantissa);
        totalStaked += br.staked_tvl;
      }
    } 

    _print_bold(`Total staked: $${formatMoney(totalStaked)}`)

    hideLoading();
}


async function getAvaxPoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {  
  const poolInfo = await chefContract.poolInfo(poolIndex);
  if (poolInfo.allocPoint == 0) {
    return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked : 0,
      pendingRewardTokens : 0,
    };
  }
  const poolToken = await getAvaxToken(app, poolInfo.lpToken, chefAddress);
  const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
  };
}

async function loadAvaxChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  // _print(`Found ${poolCount} pools.\n`)
  //
  // _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getAvaxToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ?? 
    await chefContract.callStatic[rewardsPerBlockFunction]() 
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getAvaxPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getAvaxToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo => 
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "avax") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "avax") : undefined);

  //
  // _print("Finished reading smart contracts.\n");
    
  for (i = 3; i < poolCount; i++) {
    if (poolPrices[i]) {
      printChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, "avax");
    }
  }
}

async function loadMultipleAvaxSynthetixPools(App, tokens, prices, pools) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  const infos = await Promise.all(pools.map(p => 
      loadAvaxSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  for (const i of infos) {
    let p = await printSnowglobePool(App, i, "avax");
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalApr };
}

const loadSingleSnowglobePool = (App, tokens, prices, p) => {
  return loadAvaxSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction).then(i => {
    return getSnowglobePoolAPR(App, i, "avax");
  })
}

async function loadMultipleSnowglobePools(App, tokens, prices, pools) {
  console.log('pools:', pools)
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [], poolAPRs = [];
  const infos = await Promise.all(pools.map(p => 
      loadAvaxSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  const APRs = []
  for (const i of infos) {
    let p = await getSnowglobePoolAPR(App, i, "avax");
    poolAPRs.push(p)
  }
  return poolAPRs;
}

async function getSnowglobePoolAPR(App, info, chain="eth") {
    const weeklyAPR = info.usdPerWeek / info.staked_tvl * 100;
    const dailyAPR = weeklyAPR / 7;
    const yearlyAPR = weeklyAPR * 52;

    return {
        weeklyAPR: weeklyAPR,
        dailyAPR : dailyAPR,
        yearlyAPR : yearlyAPR
    }
}

async function loadMultipleAvaxSynthetixPoolsSequential(App, tokens, prices, pools) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  for (const p of pools) {
    let res = await loadAvaxSynthetixPool(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction);
    if (!res) continue;
    totalStaked += res.staked_tvl || 0;
    totalUserStaked += res.userStaked || 0;
    if (res.userStaked > 0) {
      individualAPRs.push(res.userStaked * res.apr / 100);
    }
  }
  let totalApr = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalApr };
}