import { Vaults } from '@generationsoftware/hyperstructure-client-js'
import { VaultInfo, VaultList } from '@shared/types'
import { getVaultId } from '@shared/utilities'
import { atom, useAtom } from 'jotai'
import { Address } from 'viem'
import {
  useAllVaultShareData,
  useAllVaultTokenAddresses,
  useAllVaultTokenData,
  usePublicClientsByChain,
  useSelectedVaultLists,
  useVault
} from '..'

/**
 * Returns an instance of a `Vaults` class with only selected vault lists' vaults
 *
 * NOTE: Also queries share data, token data and underlying token addresses for each vault
 * @returns
 */
export const useSelectedVaults = (): { vaults: Vaults; isFetched: boolean } => {
  const publicClients = usePublicClientsByChain()

  const { localVaultLists, importedVaultLists } = useSelectedVaultLists()

  const selectedVaultIds = new Set<string>()
  const selectedVaultInfo: VaultInfo[] = []

  const addTokens = (vaultList: VaultList) => {
    vaultList.tokens.forEach((vaultInfo) => {
      const vaultId = getVaultId(vaultInfo)
      if (!selectedVaultIds.has(vaultId)) {
        selectedVaultIds.add(vaultId)
        selectedVaultInfo.push(vaultInfo)
      }
    })
  }

  Object.values(localVaultLists).forEach((localVaultList) => {
    addTokens(localVaultList)
  })

  Object.values(importedVaultLists).forEach((importedVaultList) => {
    addTokens(importedVaultList)
  })

  // TODO: ideally if we return the same cached/memoized instance of `Vaults` we can avoid re-assigning data
  const vaults = new Vaults(selectedVaultInfo, publicClients)

  const { data: shareData, isFetched: isFetchedShareData } = useAllVaultShareData(vaults)
  const { data: tokenData, isFetched: isFetchedTokenData } = useAllVaultTokenData(vaults)
  const { data: tokenAddresses, isFetched: isFetchedTokenAddresses } =
    useAllVaultTokenAddresses(vaults)

  if (!!shareData) {
    Object.keys(shareData).forEach((vaultId) => {
      if (vaults.vaults[vaultId].decimals === undefined && !isNaN(shareData[vaultId].decimals)) {
        vaults.vaults[vaultId].decimals = shareData[vaultId].decimals
      }

      vaults.vaults[vaultId].shareData = shareData[vaultId]

      if (vaults.vaults[vaultId].name === undefined && !!shareData[vaultId]?.name) {
        vaults.vaults[vaultId].name = shareData[vaultId].name
      }
    })
  }

  if (!!tokenData) {
    Object.keys(tokenData).forEach((vaultId) => {
      if (vaults.vaults[vaultId].decimals === undefined && !isNaN(tokenData[vaultId].decimals)) {
        vaults.vaults[vaultId].decimals = tokenData[vaultId].decimals
      }

      vaults.vaults[vaultId].tokenData = tokenData[vaultId]

      if (vaults.vaults[vaultId].tokenAddress === undefined && !!tokenData[vaultId]?.address) {
        vaults.vaults[vaultId].tokenAddress = tokenData[vaultId].address
      }
    })
  }

  if (!!tokenAddresses) {
    vaults.underlyingTokenAddresses = tokenAddresses
  }

  const isFetched = isFetchedShareData && isFetchedTokenData && isFetchedTokenAddresses

  return { vaults, isFetched }
}

const selectedVaultIdAtom = atom<string>(undefined as unknown as string)

/**
 * Returns the currently selected `Vault` as well as a function to change this selection
 *
 * Wraps {@link useSelectedVaults}
 *
 * NOTE: `vault` is initially `undefined`.
 * @returns
 */
export const useSelectedVault = () => {
  const { vaults } = useSelectedVaults()

  const [selectedVaultId, setSelectedVaultId] = useAtom(selectedVaultIdAtom)

  const newVault = useVault(
    !!selectedVaultId
      ? {
          chainId: parseInt(selectedVaultId.split('-')[1]),
          address: selectedVaultId.split('-')[0] as Address
        }
      : { chainId: 1, address: '0x00' }
  )

  const vault = !!selectedVaultId
    ? !!vaults.vaults[selectedVaultId]
      ? vaults.vaults[selectedVaultId]
      : newVault
    : undefined

  return { vault, setSelectedVaultById: setSelectedVaultId }
}
