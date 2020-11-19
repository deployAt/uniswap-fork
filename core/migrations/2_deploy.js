const Factory = artifacts.require('UniswapV2Factory')

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0])
  const factory = await Factory.deployed()

  let token1Address, token2Adress

  if (network == 'mainnet') {
    token1Address = ''
    token2Adress = ''
  } else {
  }

  await factory.createPair()
}
