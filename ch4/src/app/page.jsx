import LearnClientComponent from "@/components/LearnClientComponent";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnuseRouter from "@/components/LearnuseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Next Js</h1>
      {/* <LearnLink /> */}
      {/* <LearnuseRouter /> */}
      {/* <LearnServerComponent /> */}
      <LearnClientComponent />
    </main>
  );
}
