import { Footer } from "../../components/footer/index.tsx";
import { Header } from "../../components/header/header.tsx";

import { HomeMain } from "../../components/home-main/index.tsx";
import { HomeTitle } from "../../components/home-title/index.tsx";
import { HomePlan } from "../../components/home-plan/index.tsx";
import { ServiceList } from "../../components/service-list/index.tsx";
import { useTranslation } from "react-i18next";

export function Home() {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <HomeMain />
      <HomeTitle text={t("home.roadmap.title")} />
      <HomePlan />
      <HomeTitle text={t("home.detail-blocks.title")} />
      <ServiceList />
      <Footer />
    </>
  );
}
