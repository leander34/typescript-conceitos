/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ex-video/video.ts":
/*!*******************************!*\
  !*** ./src/ex-video/video.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Video {
    constructor(videoPlayerElements) {
        this.videoPlay = videoPlayerElements.videoPlay;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    iniciarEventos() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
    playToggle() {
        if (this.videoPlay.paused) {
            this.videoPlay.play();
            this.playButton.innerText = 'Pause';
        }
        else {
            this.videoPlay.pause();
            this.playButton.innerText = "Play";
        }
    }
    stop() {
        this.videoPlay.pause();
        this.videoPlay.currentTime = 0;
        this.playButton.innerText = "Play";
    }
}
exports["default"] = Video;
const videoConfig = {
    videoPlay: document.querySelector(".video"),
    playButton: document.querySelector(".play"),
    stopButton: document.querySelector(".stop")
};
const video = new Video(videoConfig);
video.iniciarEventos();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************************!*\
  !*** ./src/exercicio-webpack/exercicio-webpack.ts ***!
  \****************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import './form-control'
__webpack_require__(/*! ../ex-video/video */ "./src/ex-video/video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map