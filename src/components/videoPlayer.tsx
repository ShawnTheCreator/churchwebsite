import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  title: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  title,
  description,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-auto"
          controls={false}
          src={videoSrc}
        ></video>
        <div className="p-4">
          <p className="text-gray-600 mb-4">{description}</p>
          <button
            onClick={togglePlay}
            className={`px-4 py-2 rounded-lg font-medium text-white ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            } transition`}
          >
            {isPlaying ? 'Pause Video' : 'Play Video'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
