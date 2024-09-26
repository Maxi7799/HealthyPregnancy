import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";

import { HomeMain } from "../../components/home-main/index.tsx";
import { HomeTitle } from "../../components/home-title/index.tsx";
import { HomePlan } from "../../components/home-plan/index.tsx";
import { ServiceList } from "../../components/service-list/index.tsx";

export function Home() {
  return (
    <>
      <Header />
      {/* <MainBox />
      <HomeSec />
      <HomeThird /> */}
      <HomeMain />
      <HomeTitle text="Plan your best pregnancy" />
      <HomePlan />
      <HomeTitle text="Choose the service you need" />
      <ServiceList />
      <Footer />
    </>
  );
}
