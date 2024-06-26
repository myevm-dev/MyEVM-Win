import { VaultDeployInfo } from '@shared/types'
import { VAULT_FACTORY_ADDRESSES } from '@shared/utilities'
import { useAtomValue } from 'jotai'
import {
  vaultChainIdAtom,
  vaultClaimerAddressAtom,
  vaultFeePercentageAtom,
  vaultFeeRecipientAddressAtom,
  vaultNameAtom,
  vaultOwnerAddressAtom,
  vaultSymbolAtom,
  vaultYieldBufferAtom,
  vaultYieldSourceAddressAtom,
  vaultYieldSourceNameAtom
} from 'src/atoms'
import { Address } from 'viem'
import { NETWORK_CONFIG } from '@constants/config'
import { useYieldSourceTokenAddress } from './useYieldSourceTokenAddress'

/**
 * Returns all info required to deploy a new vault
 * @returns
 */
export const useVaultInfo = (): Partial<VaultDeployInfo> => {
  const chainId = useAtomValue(vaultChainIdAtom)
  const yieldSourceName = useAtomValue(vaultYieldSourceNameAtom)
  const yieldSourceAddress = useAtomValue(vaultYieldSourceAddressAtom)
  const feePercentage = useAtomValue(vaultFeePercentageAtom)
  const feeRecipient = useAtomValue(vaultFeeRecipientAddressAtom)
  const owner = useAtomValue(vaultOwnerAddressAtom)
  const name = useAtomValue(vaultNameAtom)
  const symbol = useAtomValue(vaultSymbolAtom)
  const claimer = useAtomValue(vaultClaimerAddressAtom)
  const yieldBuffer = useAtomValue(vaultYieldBufferAtom)

  const { data: tokenAddress } = useYieldSourceTokenAddress(
    chainId as number,
    yieldSourceAddress as Address
  )

  const prizePool = !!chainId ? NETWORK_CONFIG[chainId].prizePool : undefined
  const vaultFactory = !!chainId ? VAULT_FACTORY_ADDRESSES[chainId] : undefined

  return {
    chainId,
    tokenAddress,
    name,
    symbol,
    yieldSourceName,
    yieldSourceAddress,
    prizePool,
    vaultFactory,
    claimer,
    feeRecipient,
    feePercentage,
    owner,
    yieldBuffer
  }
}
