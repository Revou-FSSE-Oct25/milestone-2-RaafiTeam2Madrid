
let skor = 0;
let waktu = 10;
let timer = null;

let nilaiTertinggi = Number(localStorage.getItem("nilaiTertinggi") || 0);

function updateDisplay() {
  const skorEl = document.getElementById("skor");
  const waktuEl = document.getElementById("waktu");
  const nilaiEl = document.getElementById("nilaiTertinggi");

  skorEl.textContent = skor;
  waktuEl.textContent = waktu;
  nilaiEl.textContent = nilaiTertinggi;
}

function mulai() {
  skor = 0;
  waktu = 10;

  const klikBtn = document.getElementById("klikBtn");
  const mulaiBtn = document.getElementById("mulaiBtn");

  klikBtn.disabled = false;
  mulaiBtn.disabled = true;

  updateDisplay();

  timer = setInterval(() => {
    waktu--;
    updateDisplay();

    if (waktu <= 0) {
      selesaiGame();
    }
  }, 1000);
}

function handleKlik() {
  skor++;
  updateDisplay();
}

function selesaiGame() {
  clearInterval(timer);
  timer = null;

  const klikBtn = document.getElementById("klikBtn");
  const mulaiBtn = document.getElementById("mulaiBtn");

  klikBtn.disabled = true;
  mulaiBtn.disabled = false;

  if (skor > nilaiTertinggi) {
    nilaiTertinggi = skor;
    localStorage.setItem("nilaiTertinggi", nilaiTertinggi);
    alert(`Waktu Habis!\nSkor kamu: ${skor}\n🔥 HIGH SCORE BARU!`);
  } else {
    alert(`Waktu Habis!\nSkor kamu: ${skor}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const klikBtn = document.getElementById("klikBtn");
  const mulaiBtn = document.getElementById("mulaiBtn");

  klikBtn.addEventListener("click", handleKlik);
  mulaiBtn.addEventListener("click", mulai);

  updateDisplay();
});
