import { AppProps } from "next/app";
import "../styles/index.css";
import 'zenn-content-css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-green-100">
      <Component {...pageProps} />
    </div>
  );
}
