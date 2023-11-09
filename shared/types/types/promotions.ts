export interface PromotionInfo {
  creator: `0x${string}`
  startTimestamp: bigint
  numberOfEpochs: number
  vault: `0x${string}`
  epochDuration: number
  createdAt: number
  token: `0x${string}`
  tokensPerEpoch: bigint
  rewardsUnclaimed: bigint
}
