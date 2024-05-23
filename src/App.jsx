import { useEffect, useRef, useState } from "react";

function App() {
  const [videoURL, setVideoURL] = useState("");

  const videoURLRef = useRef();
  const videoRef = useRef();
  const videoSrcRef = useRef();
  const videoTrackRef = useRef();
  const subtitlesRef = useRef();

  const setURL = () => {
    const url = videoURLRef.current.value;

    setVideoURL(url);
  };

  const addSubtitles = () => {
    if (videoURL.trim() === "") return;

    const subtitles = subtitlesRef.current.value;

    var vttBlob = new Blob([subtitles.trim()], {
      type: "text/vtt",
    });

    const subURL = URL.createObjectURL(vttBlob);

    if (videoRef.current.children[1]) {
      videoRef.current.children[1].remove();
    }

    const trackElement = document.createElement("track");
    trackElement.ref = videoTrackRef;
    trackElement.kind = "subtitles";
    trackElement.label = "User Subtitles";
    trackElement.srcLang = "en";
    trackElement.src = subURL;
    trackElement.default = true;

    videoRef.current.appendChild(trackElement);

    videoRef.current.textTracks[0].mode = "showing";
  };

  useEffect(() => {
    videoSrcRef.current.setAttribute("src", videoURL);
    videoRef.current.load();
  }, [videoURL]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center ">
      <header className="w-full p-4 bg-slate-100 capitalize shadow-lg">
        <h1 className="text-center text-xl font-extrabold drop-shadow-lg">
          Add Subtitles to your videos
        </h1>
      </header>

      <div className="w-full max-w-[800px] flex justify-start items-center gap-2 text-[0.95rem] py-8 px-2">
        <label>Enter Video URL: </label>
        <input
          type="url"
          ref={videoURLRef}
          className="grow border-[2px] border-solid border-orange-400 focus:border-transparent px-2 py-1 rounded-md focus:outline-orange-600 focus:outline focus:outline-solid text-[0.9rem]"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setURL();
          }}
          className="flex justify-center items-center text-white bg-orange-400 hover:bg-orange-600 border-[2px] border-solid border-orange-400 rounded-md px-2 py-1"
        >
          Load
        </button>
      </div>

      <div className="ring ring-slate-300">
        <video ref={videoRef} width="600" controls preload="metadata">
          <source
            ref={videoSrcRef}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />

          {/* <track
            ref={videoTrackRef}
            label="User Subtitles"
            kind="subtitles"
            srcLang="en"
            default
          /> */}
        </video>
      </div>

      <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-2 pt-8 pb-4 px-2">
        <label>Enter Subtitles:</label>

        <p className="text-gray-500 text-[0.9rem]">
          Note: The subtitles should be in the format of WEBVTT. You can read
          more about WEBVTT{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            here
          </a>
          .
        </p>

        <textarea
          rows={5}
          ref={subtitlesRef}
          className="w-full border-[2px] border-solid border-orange-400 focus:border-transparent px-2 py-1 rounded-md focus:outline-orange-600 focus:outline focus:outline-solid resize-none text-[0.9rem]"
        ></textarea>

        <button
          onClick={(e) => {
            e.preventDefault();
            addSubtitles();
          }}
          className="flex justify-center items-center text-white bg-orange-400 hover:bg-orange-600 border-[2px] border-solid border-orange-400 rounded-md px-2 py-1"
        >
          Add Subtitles
        </button>
      </div>
    </div>
  );
}

export default App;
