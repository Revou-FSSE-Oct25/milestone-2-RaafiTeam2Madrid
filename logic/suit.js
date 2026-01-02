const skor = document.getElementById("skor");
const best = document.getElementById("best");

const pilih = ["Gunting", "Batu", "Kertas"];

let skorPlayer = 0;
let skorKomputer = 0;
let bestStreak = Number(localStorage.getItem("suitBestStreak") || 0);

// pilih acak

function buatPilihanKomputer() {
  const index = Math.floor(Math.random() * pilih.length);
  return pilih[index];
}

function buatPemenangRonde(pilihanPemain, pilihanKomputer) {
  if (pilihanPemain === pilihanKomputer) {
    return "Seri";
  }

  switch (pilihanPemain) {
    case "Batu":
      return pilihanKomputer === "Gunting" ? "Pemain" : "Komputer";
    case "kertas":
      return pilihanKomputer === "Batu" ? "Pemain" : "Komputer";
    case "Gunting":
      return pilihanKomputer === "Kertas" ? "Pemain" : "Komputer";
    default:
      return "seri";
  }
}

function skorUpdate() {
  skor.textContent = `Skor kamu: ${skorPlayer} | komputer: ${skorKomputer}`;
  best.textContent = `Best streak: ${bestStreak}`;
}

function pemainBtn(event) {
  const pilihanPemain = event.target.getAttribute("data-choice");
  if (!pilihanPemain) return;

  const pilihanKomputer = buatPilihanKomputer();
  const hasilRonde = buatPemenangRonde(pilihanPemain, pilihanKomputer);

  const hasil = document.getElementById("hasil");

  if (hasilRonde === "Player") {
    skorPlayer++;
    hasil.textContent = `Kamu pilih ${pilihanPemain}, komputer pilih ${pilihanKomputer}. Kamu menang`;
  } else if (hasilRonde === "Komputer") {
    skorKomputer++;
    hasil.textContent = `Kamu pilih ${pilihanPemain}, komputer pilih ${pilihanKomputer}. Kamu Kalah`;
  } else {
    hasil.textContent = `Kamu pilih ${pilihanPemain}, komputer pilih ${pilihanKomputer}. Seri`;
  }

  const selisih = skorPlayer - skorKomputer;
  if (selisih > bestStreak) {
    bestStreak = selisih;
    localStorage.setItem("suitBestStreak", bestStreak);
  }

  skorUpdate();
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button[data-choice]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", pemainBtn);
  });

  skorUpdate();
});
