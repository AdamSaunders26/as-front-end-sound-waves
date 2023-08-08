"use client";

import { useState } from "react";
import VoiceRecorder from "./VoiceRecorder";
import NewWaveForm from "./NewWaveForm";

function Page() {
  const [audioData, setAudioData] = useState<Blob | null>(null);

  return (
    <main className="m-4">
      <h1 className="sr-only text-2xl sm:text-3xl font-semibold text-violet-900">
        Create a new wave
      </h1>

      <div className="">
        <VoiceRecorder setAudioData={setAudioData} />
        <NewWaveForm audioData={audioData} />
      </div>
    </main>
  );
}

export default Page;
