import Header from "./_components/header";
import Keyboard from "./_components/keyboard";
import ProgressionBar from "./_components/progression-bar";
import TextWindow from "./_components/text-window";

export default function Home() {
  return (
    <main className="h-screen dark:bg-darkRed">
      <Header/>
      <Keyboard/>
      <TextWindow/>
    </main>
  );
}



