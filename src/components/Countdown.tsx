import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";


function Countdown({
  workflowInMinutes,
  breakInMinutes,
}: {
  workflowInMinutes: number;
  breakInMinutes: number;
}) {
  const [countdown, setCountdown] = useState(workflowInMinutes * 60);
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
          return workflowInMinutes * 60;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, lastEvent]);

  useEffect(() => {
    if(lastEvent === "work"){
      setCountdown(workflowInMinutes * 60)
    }else{
      setCountdown(breakInMinutes * 60)
    }
  }, [ workflowInMinutes, breakInMinutes])
  

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  //   const formattedCountdown = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center h-full w-full md:flex-row flex-col gap-4">
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">{minutes.toString().padStart(2, "0")}</span>
      {/* <span>:</span> */}
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">{seconds.toString().padStart(2, "0")}</span>
      {lastEvent === "break" && (
        <ReactConfetti
          wind={countdown < 4 ? -1 : 0}
          gravity={countdown < 4 ? 0 : 0.1}
          numberOfPieces={100}
          recycle={true}
          className="w-screen h-screen"
        />
      )}
    </div>
  );
}

export default Countdown;
