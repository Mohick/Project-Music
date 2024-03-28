import axios from "axios";

class Controlls {
  async play() {
    let srcAudio = document.querySelector("audio");
    let btnPlay = document.querySelector("#product__button--play");
    let btnPause = document.querySelector("#product__button--pause");
    console.log(btnPause);
    if (btnPlay.classList.contains("block")) {
      srcAudio.play();
      btnPlay.classList.remove("block");
      btnPlay.classList.add("hidden");
      btnPause.classList.remove("hidden");
      btnPause.classList.add("block");
    }
  }
  async pause() {
    let srcAudio = document.querySelector("audio");
    let btnPlay = document.querySelector("#product__button--play");
    let btnPause = document.querySelector("#product__button--pause");
    if (btnPause.classList.contains("block")) {
      srcAudio.pause();
      btnPlay.classList.remove("hidden");
      btnPause.classList.remove("block");
      btnPlay.classList.add("block");
      btnPause.classList.add("hidden");
    }
  }
  async volume() {
    let srcAudio = document.querySelector("audio");
    const maxVolume = document.querySelector("#product__button--volume--max");
    const mediumVolume = document.querySelector(
      "#product__button--volume--medium"
    );
    const offVolume = document.querySelector("#product__button--volume--off");

    switch (!!srcAudio) {
      case maxVolume.classList.contains("block"):
        srcAudio.volume = 0.5;
        maxVolume.classList.remove("block");
        maxVolume.classList.add("hidden");
        mediumVolume.classList.remove("hidden");
        mediumVolume.classList.add("block");
        break;
      case mediumVolume.classList.contains("block"):
        srcAudio.volume = 0;
        mediumVolume.classList.remove("block");
        mediumVolume.classList.add("hidden");
        offVolume.classList.remove("hidden");
        offVolume.classList.add("block");
        break;
      case offVolume.classList.contains("block"):
        srcAudio.volume = 1;
        offVolume.classList.remove("block");
        offVolume.classList.add("hidden");
        maxVolume.classList.remove("hidden");
        maxVolume.classList.add("block");
        break;
    }
  }
  async loop() {
    let srcAudio = document.querySelector("audio");
    const btnLoop = document.querySelector("#product__button--loop--musical");
    switch (!!btnLoop) {
      case btnLoop.classList.contains("fill-white"):
        srcAudio.loop = true;
        btnLoop.classList.remove("fill-white");
        btnLoop.classList.add("fill-violet-500");
        srcAudio.setAttribute("loop", true);
        break;
      case btnLoop.classList.contains("fill-violet-500"):
        btnLoop.classList.remove("fill-violet-500");
        btnLoop.classList.add("fill-white");
        srcAudio.removeAttribute("loop", false);
        break;
    }
  }

  async nextStep(tagA) {
    const urlNextSong = document.querySelector(".otherProduct__items--0");
    window.location = urlNextSong;
  }

  async like(item, id) {
    const btnLike = document.querySelector("#Product__button--like");
    const btnUnlike = document.querySelector("#Product__button--unlike");
    switch (!!btnLike) {
      case btnLike.classList.contains("block"):
        btnUnlike.classList.remove("hidden");
        btnLike.classList.remove("block");
        btnUnlike.classList.add("block");
        btnLike.classList.add("hidden");
        item.like = item.like + 1;
        item.idUser = id;
        Promise.all([
          axios.patch(
            "http://localhost:3000/discover/client/crud/update/item",
            item
          ),
          axios.patch("http://localhost:3000/account/client/crud/update/like", {
            methodLike: "addlike",
            id,
            idItem: item._id,
          }),
        ])
        .then(([response,adas]) => {
          console.log(response,adas );
        });
        break;
    }
  }
  async unlike(item, id) {
    const btnLike = document.querySelector("#Product__button--like");
    const btnUnlike = document.querySelector("#Product__button--unlike");
    switch (!!btnUnlike) {
      case btnUnlike.classList.contains("block"):
        btnLike.classList.remove("hidden");
        btnUnlike.classList.remove("block");
        btnLike.classList.add("block");
        btnUnlike.classList.add("hidden");
        item.like = item.like - 1;
        item.idUser = id;
        Promise.all([
          axios.patch(
            "http://localhost:3000/discover/client/crud/update/item",
            item
          ),
          axios.patch("http://localhost:3000/account/client/crud/update/like", {
            methodLike: "unlike",
            id,
            idItem: item._id,
          }),
        ])
        .then((response) => {
          console.log(response);
        });
        break;
    }
  }
  async valueSong() {
    let audio = document.querySelector("audio");
    const seekScroll = document.querySelector("#product__value--song");
    const urlNextSong = document.querySelector(".otherProduct__items--0");
    const btnLoop = document.querySelector("#product__button--loop--musical");

    const tagRenderCurrentTime = document.querySelector(
      ".product__current--time--audio"
    );
    const tagRenderDuration = document.querySelector(
      ".product__duration--audio"
    );
    audio.addEventListener("ended", () => {
      if (!btnLoop.getAttribute("loop")) {
        window.location = urlNextSong;
      }
    });
    audio.addEventListener("loadedmetadata", () => {
      const minuteAudioDucation = Math.floor(audio.duration / 60);
      const secondAudioDucation = Math.floor(audio.duration % 60);

      switch (!!audio) {
        case secondAudioDucation.toString().length == 2:
          if (minuteAudioDucation.toString().length < 2) {
            tagRenderDuration.innerHTML =
              "0" + minuteAudioDucation + ":" + secondAudioDucation;
            break;
          } else {
            tagRenderDuration.innerHTML =
              minuteAudioDucation + ":" + secondAudioDucation;
            break;
          }

        case secondAudioDucation.toString().length < 2:
          if (minuteAudioDucation.toString().length < 2) {
            tagRenderDuration.innerHTML =
              "0" + minuteAudioDucation + ":" + "0" + secondAudioDucation;
            break;
          } else {
            tagRenderDuration.innerHTML =
              minuteAudioDucation + ":" + "0" + secondAudioDucation;

            break;
          }
      }
    });
    audio.addEventListener("timeupdate", () => {
      const percentInput = (audio.currentTime / audio.duration) * 100;
      const minuteAudioCurentime = Math.floor(audio.currentTime / 60);
      const secondAudioCurentime = Math.floor(audio.currentTime % 60);
      seekScroll.value = percentInput / 100;
      switch (!!audio) {
        case secondAudioCurentime.toString().length == 2:
          if (minuteAudioCurentime.toString().length < 2) {
            tagRenderCurrentTime.innerHTML =
              "0" + minuteAudioCurentime + ":" + secondAudioCurentime;
            break;
          } else {
            tagRenderCurrentTime.innerHTML =
              minuteAudioCurentime + ":" + secondAudioCurentime;
            break;
          }

        case secondAudioCurentime.toString().length < 2:
          if (minuteAudioCurentime.toString().length < 2) {
            tagRenderCurrentTime.innerHTML =
              "0" + minuteAudioCurentime + ":" + "0" + secondAudioCurentime;
            break;
          } else {
            tagRenderCurrentTime.innerHTML =
              minuteAudioCurentime + ":" + "0" + secondAudioCurentime;

            break;
          }
      }
    });
  }
  async fastforward() {
    let audio = document.querySelector("audio");
    const seekScroll = document.querySelector("#product__value--song");
    const newCurrentTime = seekScroll.value * audio.duration;
    console.log(newCurrentTime);
    audio.currentTime = newCurrentTime;
  }
}

export default new Controlls();
