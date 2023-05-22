import { useRouter } from "next/router";
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
  const [endOn, setEndOn] = useState<number | null>(null);
  const [lastEvent, setLastEvent] = useState("work");
  const [audioObjects, setAudioObjects] = useState<HTMLAudioElement[]>([]);

  const router = useRouter();
  const currentLang = router.locale;


  useEffect(()=>{
    setCountdown(workflowInMinutes * 60);
  },[workflowInMinutes,breakInMinutes])


  const minutes = Math.floor(countdown / 60);
  const seconds = Math.round(countdown % 60);
    const formattedCountdown = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    const setEndOnFunc = () =>{
      if(lastEvent === "work"){
        setEndOn((Date.now() /1000) + workflowInMinutes *60)
      }else{
        setEndOn((Date.now() /1000) + breakInMinutes *60)
      }
    }

  useEffect(() => {
    if (!started) return;
    
    if(endOn === null) {
      setEndOnFunc()
      return;
    }

    const countdownInterval = setInterval(() => {
      let newCountDown = endOn - (Date.now()/1000)
      setCountdown(() => {
        if (newCountDown > 0) {
          return newCountDown;
        } else if (lastEvent === "work") {
          setLastEvent("break");
          setEndOn(null)
          return breakInMinutes * 60;
        } else {
          setLastEvent("work");
          setEndOn(null)
          return workflowInMinutes * 60;
        }
      });

      document.title = `${formattedCountdown} | ${lastEvent.toUpperCase()} | WorkflowTime`
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, lastEvent, started,endOn]);

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
        ? new Audio(`/startWorkflow-${currentLang}.mp3`)
        : new Audio(`/startBreak-${currentLang}.mp3`);
    audioObject.play();
    setAudioObjects([audioObject]);
  
    // Set the countdown based on the last event
    setEndOnFunc()

    // Return the cleanup function to stop and remove the audio objects
    return () => {
      audioObjects.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, [workflowInMinutes, breakInMinutes,lastEvent, started, resetCounter]);


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
