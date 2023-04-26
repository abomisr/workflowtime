import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";


function Countdown({
  durationInMinutes,
  breakInMinutes,
}: {
  durationInMinutes: number;
  breakInMinutes: number;
}) {
  const [countdown, setCountdown] = useState(durationInMinutes * 60);
  const [lastEvent, setLastEvent] = useState("work");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else if (lastEvent === "work") {
          setLastEvent("break");
          return breakInMinutes * 60;
        } else {
          setLastEvent("work");
          return durationInMinutes * 60;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, lastEvent]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  //   const formattedCountdown = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center h-full w-full md:flex-row flex-col gap-4">
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">{minutes.toString().padStart(2, "0")}</span>
      {/* <span>:</span> */}
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">{seconds.toString().padStart(2, "0")}</span>
      <br />
      {lastEvent === "break" && (
        <ReactConfetti
          wind={countdown < 4 ? -1 : 0}
          gravity={countdown < 4 ? 0 : 0.1}
          numberOfPieces={100}
          recycle={true}
        />
      )}
    </div>
  );
}

export default Countdown;
