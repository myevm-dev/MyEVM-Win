import { NETWORK } from '@shared/utilities'
import { Address } from 'viem'
import { mainnet, optimism, optimismGoerli } from 'wagmi/chains'

/**
 * Supported networks
 */
export const SUPPORTED_NETWORKS = Object.freeze({
  mainnets: [NETWORK.mainnet, NETWORK.optimism],
  testnets: [NETWORK['optimism-goerli']]
})

/**
 * Wagmi networks
 */
export const WAGMI_CHAINS = Object.freeze({
  [NETWORK.mainnet]: mainnet,
  [NETWORK.optimism]: optimism,
  [NETWORK['optimism-goerli']]: optimismGoerli
})

/**
 * RPCs
 */
export const RPC_URLS = {
  [NETWORK.mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
  [NETWORK.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
  [NETWORK['optimism-goerli']]: process.env.NEXT_PUBLIC_OPTIMISM_GOERLI_RPC_URL
}

/**
 * Queries' start blocks
 */
export const QUERY_START_BLOCK: { [chainId: number]: bigint } = {
  [NETWORK.mainnet]: 18052000n,
  [NETWORK.optimism]: 108927000n,
  [NETWORK['optimism-goerli']]: 14002000n
}

/**
 * Draw results URL
 */
export const DRAW_RESULTS_URL =
  'https://raw.githubusercontent.com/GenerationSoftware/pt-v5-draw-results/main/prizes'

/**
 * POOL burn addresses
 */
export const BURN_ADDRESSES: { [chainId: number]: Address[] } = {
  [NETWORK.optimism]: [
    '0xb1B9DcB9F3a25e390fB37F597C2bF90B16889e41',
    '0xF93329E78FefF1145fCe03A79d5b356588DeA215'
  ]
}
