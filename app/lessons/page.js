import Header from "@/app/_components/header";
import LessonWindow from "@/app/_components/lesson-window";

export default function Page() {
  return (
    <main className="h-screen dark:bg-[#130000]">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center mx-auto max-w-3xl">
            <LessonWindow level="1" description="Introduction" status={1} />
            <LessonWindow level="2" description="Introduction" status={1} />
            <LessonWindow level="3" description="Introduction" status={1} />
            <LessonWindow level="4" description="Introduction" status={1} />
            <LessonWindow level="5" description="Introduction" status={1} />
            <LessonWindow level="6" description="Introduction" status={1} />
        </div>
    </main>
  );
}

