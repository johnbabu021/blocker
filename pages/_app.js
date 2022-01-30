import '../styles/globals.css'
import  '../helpers/banner.css'
import GlobalContext from '../helpers/global/context'
import { ThirdwebProvider } from "@3rdweb/react";

function MyApp({ Component, pageProps }) {
  const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

  /**
   * Include the connectors you want to support
   * injected - MetaMask
   * magic - Magic Link
   * walletconnect - Wallet Connect
   * walletlink - Coinbase Wallet
   */
  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_live_521D2A478D8CD103", // Your magic api key
      chainId: 1, // The chain ID you want to allow on magic
    },
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };



  return <GlobalContext>
     <ThirdwebProvider 
      connectors={connectors} 
      supportedChainIds={supportedChainIds}
    ><Component {...pageProps} /></ThirdwebProvider>
    
  </GlobalContext>
}

export default MyApp
