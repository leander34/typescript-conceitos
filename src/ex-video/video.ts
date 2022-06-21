interface VideoPlayerElements {
    videoPlay: HTMLVideoElement
    playButton: HTMLButtonElement
    stopButton: HTMLButtonElement
}

interface VideoPlayerProtocol {
    iniciarEventos(): void
    playToggle(): void
    stop(): void
}

export default class Video implements VideoPlayerProtocol {
  private videoPlay: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlay = videoPlayerElements.videoPlay;
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
        this.playToggle()
    })

    this.stopButton.addEventListener('click', () => {
         this.stop()
    })
  }

  playToggle(): void {
    if(this.videoPlay.paused) {
        this.videoPlay.play()
        this.playButton.innerText = 'Pause'
    } else {
        this.videoPlay.pause()
        this.playButton.innerText = "Play";
    }
  }

  stop(): void {
    this.videoPlay.pause()
    this.videoPlay.currentTime = 0
    this.playButton.innerText = "Play";
  }
}
const videoConfig: VideoPlayerElements = {
  videoPlay: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement
};

const video = new Video(videoConfig);
video.iniciarEventos()