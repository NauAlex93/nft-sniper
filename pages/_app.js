import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="t96gxAIJOhfOTySUYGWaferFz7vtPMJboIiMxVkp"
      serverUrl="https://nvwnncmyxeeo.usemoralis.com:2053/server"
    >
      {<Component {...pageProps} />}
    </MoralisProvider>
  );
}

export default MyApp;