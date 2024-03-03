function originContent() {
  setTimeout(() => {
    const HeaderLineHight = document.querySelector("header").clientHeight;
    const content = document.querySelector(".container__routes--content");
    content.style.marginTop = `${HeaderLineHight}px`;
    content.style.marginTop = `${HeaderLineHight}px`;
    window.onresize = () => {
      const HeaderLineHight = document.querySelector("header").clientHeight;
      const content = document.querySelector(".container__routes--content");
      content.style.marginTop = `${HeaderLineHight}px`;
      content.style.marginTop = `${HeaderLineHight}px`;
    };
  }, 0);
}

export { originContent };
