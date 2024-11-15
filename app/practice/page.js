import Header from "@/app/_components/header";
import TextWindow from "../_components/text-window";

export default function Page() {
  return (
    <div>
        <Header/>
        <div className="flex flex-col gap-5 items-center min-h-screen">
            <div className="flex flex-row">
                <p>Current speed: 123</p>
                <p>Current accuracy: 123</p>
            </div>
            <TextWindow/>
            <p>Type to start!</p>
        </div>
    </div>
  );
}
