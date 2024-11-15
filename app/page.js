import Header from "./_components/header";
import Keyboard from "./_components/keyboard";
import ProgressionBar from "./_components/progression-bar";
import TextWindow from "./_components/text-window";
import "./keyboard.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Keyboard/>
      <ProgressionBar/>
      <TextWindow/>
    </div>
  );
}
