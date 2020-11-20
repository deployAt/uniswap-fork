const BonusToken = artifacts.require('BonusToken')
const LiquidityMigrator = artifacts.require('LiquidityMigrator')

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(BonusToken)
  const bonusToken = await BonusToken.deployed()

  const routerAddress = ''
  const pairAddress = ''
  const routerForkAddress = ''
  const pairForkAddress = ''

  await deployer.deploy(LiquidityMigrator, routerAddress, pairAddress, routerForkAddress, pairForkAddress)

  const liquidityMigrator = await LiquidityMigrator.deployed()
  await bonusToken.setLiquidator(liquidityMigrator.address)
}
