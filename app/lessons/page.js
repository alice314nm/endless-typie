import Header from "@/app/_components/header";
import LessonWindow from "@/app/_components/lesson-window";

export default function Page() {
  return (
    <div>
        <Header/>
        <div className="flex flex-col items-center min-h-screen">
            <div className="space-y-4"> {/* Adds spacing between LessonWindows */}
                <LessonWindow level="1" description="Introduction" status={1} />
                <LessonWindow level="1" description="Introduction" status={1} />
                <LessonWindow level="1" description="Introduction" status={1} />
            </div>
        </div>
    </div>
  );
}
