import Header from "@/app/_components/header";
import CardRecord from "../_components/card-records";
import UserCard from "../_components/user-card";

export default function Page() {
  return (
    <main className="h-screen flex flex-col dark:bg-darkRed">
      <Header />
      <div className="flex flex-col items-center h-full w-screen">
        <div className="flex flex-col w-[75%] gap-6">
          {/* User Info Card */}
          <UserCard
          userName="alice314nm"
          testsNumber={34}/>

          {/* Card Records */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
            <CardRecord
              title="Without helping keyboard"
              valueAverageType={65}
              valueHighestType={120}
              valueAverageAccuracy={98}
              valueHighestAccuracy={100}
            />
            <CardRecord
              title="With helping keyboard"
              valueAverageType={60}
              valueHighestType={110}
              valueAverageAccuracy={95}
              valueHighestAccuracy={98}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
