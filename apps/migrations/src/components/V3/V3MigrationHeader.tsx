import classNames from 'classnames'
import { MigrationSteps } from '@components/MigrationSteps'
import { V3BalanceToMigrate } from '@hooks/useUserV3Balances'
import { V3MigrationStep } from './V3Migration'

export interface V3MigrationHeaderProps {
  migration: V3BalanceToMigrate
  actions: V3MigrationStep[]
  actionsCompleted: number
  className?: string
}

export const V3MigrationHeader = (props: V3MigrationHeaderProps) => {
  const { migration, actions, actionsCompleted, className } = props

  const actionNames: Record<V3MigrationStep, string> = {
    claim: 'Claim Rewards',
    withdraw: `Withdraw ${migration.token.symbol}`,
    swap: migration.token.chainId !== migration.destination.chainId ? 'Bridge & Swap' : 'Swap',
    deposit: 'Deposit Into V5'
  }

  return (
    <div className={classNames('flex flex-col gap-12 items-center text-center', className)}>
      <h2 className='font-averta font-semibold text-4xl'>
        {actionsCompleted >= actions.length ? (
          <span>Congrats, you've landed onto PoolTogether V5!</span>
        ) : (
          <span>
            Migrate your <span className='text-pt-purple-400'>{migration.token.symbol}</span> to
            PoolTogether V5
          </span>
        )}
      </h2>
      <MigrationSteps
        actionNames={actions.map((action) => actionNames[action])}
        actionsCompleted={actionsCompleted}
      />
    </div>
  )
}
