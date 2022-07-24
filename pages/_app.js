import '../styles/globals.css'

import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

// const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
//   publicProvider(),
// ])

function MyApp({ Component, pageProps }) {

  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: `https://polygon-mumbai-17403.morpheuslabs.io/v3/518c12a00aca4609b22a95db7de20079`,
        }),
      }),
    ],
  )
  
  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains })
    ],
    provider
  })

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
    )
  }

export default MyApp
