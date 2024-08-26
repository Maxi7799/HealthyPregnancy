import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";
import { HomeSec } from "../../components/home-sec/index.tsx";
import { HomeThird } from "../../components/home-third/index.tsx";
import { MainBox } from "../../components/main/index.tsx";

export function Home() {
  return (
    <>
      <Header />
      <MainBox />
      <HomeSec />
      <HomeThird />
      <Footer />
    </>
  );
}
