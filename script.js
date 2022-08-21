async function getMeme() {
  let currentItem = 0;
  const img = document.querySelector(".photo");
  const name = document.querySelector("[data-name]");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  try {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    img.src = data.data.memes[currentItem].url;
    name.innerText = data.data.memes[currentItem].name;

    nextBtn.addEventListener("click", () => {
      currentItem++;
      if (currentItem > data.data.memes.length) {
        currentItem = 0;
      }
      img.src = data.data.memes[currentItem].url;
      name.innerText = data.data.memes[currentItem].name;
    });

    prevBtn.addEventListener("click", () => {
      currentItem--;
      if (currentItem < 0) {
        currentItem = data.data.memes.length - 1;
      }
      img.src = data.data.memes[currentItem].url;
      name.innerText = data.data.memes[currentItem].name;
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getMeme();
});
