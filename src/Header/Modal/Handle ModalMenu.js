function handleModalMenu() {
  const modal = document.getElementById("modal__nenu");

  switch (!!modal) {
    case modal.classList.contains("hidden"):
      modal.classList.remove("hidden");
      modal.classList.add("block");
      break;
    case modal.classList.contains("block"):
      modal.classList.remove("block");
      modal.classList.add("hidden");
      break;
  }
}

export { handleModalMenu };
