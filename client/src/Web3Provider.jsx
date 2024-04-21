import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


export const morphl2 = {
    id: 2_710,
    name: "Morph Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "Morph",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["https://rpc-testnet.morphl2.io"] },
    },
    blockExplorers: {
      default: { name: "Morphl2", url: "https://explorer-testnet.morphl2.io" }
    },
    testnet: true,
  };

const config = createConfig(
  getDefaultConfig({
    chains: [morphl2],
    walletConnectProjectId: '',

    // Required App Info
    appName: "Geeks Gather",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);



const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};