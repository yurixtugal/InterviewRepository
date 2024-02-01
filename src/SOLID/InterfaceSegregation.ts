interface AudioPlayer {
    playAudio(): void;
    stopAudio(): void;
}

class MP3Player implements AudioPlayer {
    playAudio() {
        console.log('Playing audio from MP3');
    }

    stopAudio() {
        console.log('Stopping audio from MP3');
    }
}

class videoPlayer implements AudioPlayer {
    playAudio() {
        console.log('I cannot play audio from video, I am a video player!');
    }

    stopAudio() {
        console.log('I cannot stop audio from video, I am a video player!');
    }
}

const audioPlayer = new MP3Player();
audioPlayer.playAudio();
audioPlayer.stopAudio();
const video = new videoPlayer();
video.playAudio();
video.stopAudio();

interface DevicePlayer {
  playMedia(): void;
  stopMedia(): void;  
}

class MP3PlayerIS implements DevicePlayer {
  playMedia() {
      console.log('Playing media from MP3');
  }

  stopMedia() {
      console.log('Stopping media from MP3');
  }
}

class videoPlayerIS implements DevicePlayer {
  playMedia() {
      console.log('Playing media from video');
  }

  stopMedia() {
      console.log('Stopping media from video');
  }
}

const audioPlayerIS: DevicePlayer = new MP3PlayerIS();
audioPlayerIS.playMedia();
audioPlayerIS.stopMedia();

const videoIS: DevicePlayer = new videoPlayerIS();
videoIS.playMedia();
videoIS.stopMedia();