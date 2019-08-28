import React from 'react';
import videojs from 'video.js';
import '../node_modules/video.js/dist/video-js.css';
import '../node_modules/videojs-overlay/dist/videojs-overlay.js';
import '../node_modules/videojs-overlay/dist/videojs-overlay.css';
import './VideoApp.css';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        console.log('onPlayerReady', this)
        this.overlay({
            class: 'test',
            overlays: [{
                // content: "<a href='https://www.brightcove.com' target='_blank'><img src='http://solutions.brightcove.com/bcls/assets/images/brightcove-logo.png'></a>",
                content: 'Left Left',
                start: 'playing',
                end: 'pause',
                align: 'left'
                }, {
                // content: "<a href='https://www.brightcove.com' target='_blank'><img src='http://solutions.brightcove.com/bcls/assets/images/brightcove-logo.png'></a>",
                content: 'Right Right',
                start: 'playing',
                end: 'pause',
                align: 'right'
            }]
        })
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>	
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}