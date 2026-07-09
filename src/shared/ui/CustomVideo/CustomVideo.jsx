import { useRef, useState } from 'react';
import clsx from 'clsx';

import { getAssetHref } from '@/shared/lib/routing';
import { Icon } from '@/shared/ui/Icon';

import './CustomVideo.scss';

export const CustomVideo = ({ duration = '2:30 мин', poster, src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    await videoElement.play();
    videoElement.controls = true;
    setIsPlaying(true);
  };

  const handlePause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.controls = false;
    }

    setIsPlaying(false);
  };

  return (
    <div className="custom-video">
      <video
        ref={videoRef}
        className="custom-video__video"
        src={getAssetHref(src)}
        poster={getAssetHref(poster)}
        preload="metadata"
        playsInline
        onPause={handlePause}
      />
      <div
        className={clsx('custom-video__panel', isPlaying ? 'custom-video__panel--open' : 'custom-video__panel--idle')}
        onClick={handlePlay}
      >
        <button
          className="custom-video__play-button"
          type="button"
          title="Включить видео"
          onClick={handlePlay}
        >
          <Icon className="custom-video__play-button-icon" name="play" />
          <span className="visually-hidden">Включить видео</span>
        </button>
        <span className="custom-video__duration">{duration}</span>
      </div>
    </div>
  );
};
