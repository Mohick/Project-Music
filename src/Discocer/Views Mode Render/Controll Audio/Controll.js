class ControllAudio {
  async play(positionIndex) {
    const btnPlay = document.querySelector(
      `#discover__btn--play--${positionIndex}`
    );
    const btnPause = document.querySelector(
      `#discover__btn--pause--${positionIndex}`
    );
    const audio = document.querySelector(`#discover__audio--${positionIndex}`);
    const btnLoop = document.querySelector(
      `#discover__btn--loop--${positionIndex}`
    );
    btnPlay.classList.remove("flex");
    btnPause.classList.remove("hidden");
    btnPlay.classList.add("hidden");
    btnPause.classList.add("flex");
    audio.play();

    audio.addEventListener("ended", () => {
      if (!!btnLoop.getAttribute("loop")) {
        btnPause.classList.remove("flex");
        btnPlay.classList.remove("hidden");
        btnPause.classList.add("hidden");
        btnPlay.classList.add("flex");
      }
    });
  }
  async pause(positionIndex) {
    const btnPlay = document.querySelector(
      `#discover__btn--play--${positionIndex}`
    );
    const btnPause = document.querySelector(
      `#discover__btn--pause--${positionIndex}`
    );
    const audio = document.querySelector(`#discover__audio--${positionIndex}`);
    const btnLoop = document.querySelector(
      `#discover__btn--loop--${positionIndex}`
    );
    btnPause.classList.remove("flex");
    btnPlay.classList.remove("hidden");
    btnPause.classList.add("hidden");
    btnPlay.classList.add("flex");
    audio.pause();
  }
  async loop(positionIndex) {
    const btnLoop = document.querySelector(
      `#discover__btn--loop--${positionIndex}`
    );
    const audio = document.querySelector(`#discover__audio--${positionIndex}`);
    switch (!!btnLoop) {
      case !audio.getAttribute("loop"):
        audio.setAttribute("loop", true);
        btnLoop.classList.add("fill-violet-400");
        btnLoop.classList.remove("fill-gray-400");
        break;
      case !!audio.getAttribute("loop"):
        audio.removeAttribute("loop");
        btnLoop.classList.remove("fill-violet-400");
        btnLoop.classList.add("fill-gray-400");
        break;
    }
  }
}

export default new ControllAudio();
