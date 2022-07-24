import '../styles/globals.css'

import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  chain
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { InjectedConnector } from 'wagmi/connectors/injected'


// const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
//   publicProvider(),
// ])

function MyApp({ Component, pageProps }) {

  const { chains, provider, webSocketProvider } = configureChains(
    defaultChains,
    [
      publicProvider(),
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
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
    )
  }

export default MyApp
