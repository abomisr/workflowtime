import Countdown from "@/components/Countdown";
import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <main className={``}>
      <span><Countdown durationInMinutes={0.1} breakInMinutes={0.1} /></span>
    </main>
  );
}
