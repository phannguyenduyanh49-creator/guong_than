function askMirror() {
  const input = document.getElementById("question").value.toLowerCase();
  const answerBox = document.getElementById("answer");

  if (input.includes("gương thần ơi") && input.includes("ai xinh nhất")) {
    answerBox.innerText = "✨Mỹ Tiên là xinh nhất ✨";
  } else {
    answerBox.innerText = "🤔 Gương chưa hiểu câu hỏi...";
  }

  // hiện animation chữ
  answerBox.classList.add("show");

  // tạo hoa rơi
  createFlowers();
}

// tạo hoa rơi
function createFlowers() {
  const container = document.getElementById("flowers");

  for (let i = 0; i < 25; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 2 + Math.random() * 3 + "s";
    flower.style.fontSize = 16 + Math.random() * 20 + "px";

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
