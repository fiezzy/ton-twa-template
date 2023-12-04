import { TonConnectUIProvider } from '@tonconnect/ui-react'

import { FCWithChildren } from 'types/app'

export const TonConnectProvider: FCWithChildren = (props) => {
  const { children } = props

  return (
    <TonConnectUIProvider
      manifestUrl={MANIFEST_URL}
      uiPreferences={{
        theme: 'SYSTEM',
      }}
    >
      <>{children}</>
    </TonConnectUIProvider>
  )
}

const MANIFEST_URL = 'LINK_TO_YOUR_TON_CONNECT_MANIFEST'
