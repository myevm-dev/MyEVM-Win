import { useToken, useTokenPrices } from '@generationsoftware/hyperstructure-react-hooks'
import { TokenWithPrice } from '@shared/types'
import { Address } from 'viem'
import { useLiquidationPairTokenInAddress } from './useLiquidationPairTokenInAddresses'

export const useLiquidationPairTokenInPrice = (
  chainId: number,
  lpAddress: Address
): { data?: TokenWithPrice; isFetched: boolean } => {
  const { data: tokenInAddress, isFetched: isFetchedTokenInAddress } =
    useLiquidationPairTokenInAddress(chainId, lpAddress)

  const { data: token, isFetched: isFetchedToken } = useToken(chainId, tokenInAddress as Address)

  const { data: tokenPrices, isFetched: isFetchedTokenPrices } = useTokenPrices(
    chainId,
    !!tokenInAddress ? [tokenInAddress] : []
  )

  const data =
    !!token && !!tokenPrices && !!tokenInAddress
      ? { ...token, price: tokenPrices[tokenInAddress.toLowerCase() as Address] }
      : undefined

  const isFetched = isFetchedTokenInAddress && isFetchedToken && isFetchedTokenPrices

  return { data, isFetched }
}
