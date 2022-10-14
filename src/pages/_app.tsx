import { AppProps } from "next/app";
import Image from 'next/future/image';
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt="" width={130} height={50} />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
