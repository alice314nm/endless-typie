import Header from "@/app/_components/header";
import LessonWindow from "@/app/_components/lesson-window";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen dark:bg-darkRed">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center mx-auto max-w-3xl">
            <Link href="/lesson_template"><LessonWindow level="1" description="Introduction" status={2} /></Link>
            <LessonWindow level="2" description="Introduction" status={1} />
            <LessonWindow level="3" description="Introduction" status={0} />
            <LessonWindow level="4" description="Introduction" status={0} />
            <LessonWindow level="5" description="Introduction" status={0} />
            <LessonWindow level="6" description="Introduction" status={0} />
        </div>
    </main>
  );
}

