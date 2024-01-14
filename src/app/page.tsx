import { Button } from "@/_components/practices/practice-1/button/better-way";
import style from "@/_styles/pages/home-page.module.css";
export default function Home() {
  return (
    <main className={style.main}>
      <Button type="outline">Button</Button>
    </main>
  );
}
