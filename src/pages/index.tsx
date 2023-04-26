import Countdown from "@/components/Countdown";

export default function Home() {

  return (
    <main className={`h-screen w-screen`}>
      <Countdown durationInMinutes={0.1} breakInMinutes={0.1} />
    </main>
  );
}
