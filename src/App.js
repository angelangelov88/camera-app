import React from 'react';
import './App.css';
import { useRef, useEffect } from 'react';


function App() {
  const videoRef = useRef(null);
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  return (
    <div className="App">
      {/* <input accept="image/*" id="icon-button-file" type="file" capture="environment" /> */}
      <button>Take a photo</button>
        <video ref={videoRef} />

    </div>
  );
}

export default App;
