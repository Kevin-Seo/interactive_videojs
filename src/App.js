import React from 'react';
import VideoApp from './VideoApp';

const videoJsOptions = {
  // autoplay: true,
  controls: true,
  sources: [{
    // src: 'http://cmsrelay.sbs.co.kr/Media/sbs/201908/28/640X360i_96000_441865421_2019-08-28-083253889.mp4',
    // type: 'video/mp4',
    src: 'http://10.10.123.37:8000/live/abc/index.m3u8',
    type: 'application/x-mpegURL',
  }],
  width: 960,
  height: 540,
}

function App() {
  return (
    <div>
      <VideoApp { ...videoJsOptions } />
    </div>
  );
}

export default App;
