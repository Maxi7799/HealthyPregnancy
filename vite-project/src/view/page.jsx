import { header } from "../components/header/header";
import { mainBox } from "../components/main/index";

export function Home() {
  return (
    <>
      {header()}
      {mainBox()}
    </>
  );
}
