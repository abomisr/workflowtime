import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

function Countdown({
  workflowInMinutes,
  breakInMinutes,
  started,
  resetCounter,
}: {
  workflowInMinutes: number;
  breakInMinutes: number;
  started: boolean;
  resetCounter: number;
}) {
  const [countdown, setCountdown] = useState(workflowInMinutes * 60);
  const [lastEvent, setLastEvent] = useState("work");
  const [audioObjects, setAudioObjects] = useState<HTMLAudioElement[]>([]);


  useEffect(() => {
    if (!started) return;
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
  }, [countdown, lastEvent, started]);

  useEffect(() => {
    if (!started) return;
  
    // Stop and remove any previously created audio objects
    audioObjects.forEach((audio: HTMLAudioElement) => {
      audio.pause();
    });
    setAudioObjects([]);
  
    // Create a new audio object and add it to the array
    const audioObject: HTMLAudioElement =
      lastEvent === "work"
        ? new Audio("/startWorkflow.mp3")
        : new Audio("/startBreak.mp3");
    audioObject.play();
    setAudioObjects([audioObject]);
  
    // Set the countdown based on the last event
    setCountdown(lastEvent === "work" ? workflowInMinutes * 60 : breakInMinutes * 60);

    // Return the cleanup function to stop and remove the audio objects
    return () => {
      audioObjects.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, [workflowInMinutes, breakInMinutes,lastEvent, started, resetCounter]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  //   const formattedCountdown = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-center justify-center w-full flex-col gap-4">   {/* md:flex-row */}
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">
        {minutes.toString().padStart(2, "0")}
      </span>
      {/* <span>:</span> */}
      <span className="bg-second-light dark:bg-second-dark drop-shadow-md text-[30px] p-10 rounded-lg">
        {seconds.toString().padStart(2, "0")}
      </span>
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
