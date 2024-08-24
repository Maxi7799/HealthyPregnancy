import { header } from "../components/header/header.tsx";
import { mainBox } from "../components/main/index.tsx";

export function Home() {
  return (
    <>
      {header()}
      {mainBox()}
    </>
  );
}
