
function handleAutoTurnOff(audio,btnPlay,btnPause) {
    const audioPlay = document.querySelector('audio[playing="true"]');
    const btnPlaying = document.querySelector(
      '.discover__btn--play[playing="true"]'
    );
    const btnPaused = document.querySelector('.discover__btn--pause[playing="true"]')

    audio.setAttribute("playing", true);
    btnPlay.setAttribute("playing", true);
    btnPause.setAttribute("playing", true);
    if (!!audioPlay) {
        audioPlay.pause();
        audioPlay.removeAttribute("playing");
      }
      if (!!btnPlaying) {
        audio.currentTime=0
        btnPlaying.removeAttribute("playing");
        btnPaused.removeAttribute("playing");
        btnPlaying.classList.remove("hidden");
        btnPaused.classList.remove("flex");
        btnPlaying.classList.add("flex");
        btnPaused.classList.add("hidden");
      }
}

function autoRemoveAttributePlaying() {
    const audioPlay = document.querySelector('audio[playing="true"]');
    const btnPlaying = document.querySelector(
      '.discover__btn--play[playing="true"]'
    );
    const btnPaused = document.querySelector('.discover__btn--pause[playing="true"]')

      audioPlay.removeAttribute("playing");
      btnPlaying.removeAttribute("playing");
      btnPaused.removeAttribute("playing");
}

export  {handleAutoTurnOff,autoRemoveAttributePlaying}