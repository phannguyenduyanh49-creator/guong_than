function askMirror() {
  const name = document.getElementById("name").value.trim();
  const input = document
    .getElementById("question")
    .value.toLowerCase();

  const answerBox = document.getElementById("answer");

  // chưa nhập tên
  if (name === "") {
    answerBox.innerText = "💔 Hãy nhập tên người đẹp trước nha!";
  }

  // đúng câu hỏi
  else if (
    input.includes("gương thần ơi") &&
    input.includes("ai xinh nhất")
  ) {
    answerBox.innerText =
      `✨ ${name} là xinh nhất thế giớiiiiii 💖 ✨`;

    createFlowers();
  }

  // sai câu hỏi
  else {
    answerBox.innerText =
      "🤔 Gương chưa hiểu câu hỏi...";
  }

  // animation hiện chữ
  answerBox.classList.remove("show");

  setTimeout(() => {
    answerBox.classList.add("show");
  }, 10);
}

// tạo hoa rơi
function createFlowers() {
  const container = document.getElementById("flowers");

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");

    flower.classList.add("flower");

    // random icon
    const icons = ["🌸", "💖", "✨", "🌷"];
    flower.innerText =
      icons[Math.floor(Math.random() * icons.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.animationDuration =
      3 + Math.random() * 3 + "s";

    flower.style.fontSize =
      16 + Math.random() * 20 + "px";

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 6000);
  }
}