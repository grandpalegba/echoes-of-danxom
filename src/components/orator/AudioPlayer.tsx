import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AudioPlayerProps {
  duration: number;
}

const formatTime = (s: number) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const AudioPlayer = ({ duration }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    if (!playing) {
      setPlaying(true);
      // Simulate playback
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setPlaying(false);
            return 0;
          }
          return p + 2;
        });
      }, (duration * 1000) / 50);
    } else {
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors"
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
      <div className="flex-1 min-w-0">
        <Progress value={progress} className="h-1.5" />
      </div>
      <span className="text-xs text-muted-foreground tabular-nums flex-shrink-0">
        {formatTime(Math.floor((progress / 100) * duration))} / {formatTime(duration)}
      </span>
    </div>
  );
};

export default AudioPlayer;
