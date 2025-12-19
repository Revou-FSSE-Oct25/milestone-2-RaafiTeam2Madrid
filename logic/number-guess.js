let umurJkw;
let maxNyoba = 5;
let banyakNyoba = 0;

function mulai() {
    umurJkw = Math.floor(Math.random() * 100) + 1;
    banyakNyoba = 0;

    const pesan = document.getElementById("pesan");
    const percobaanInfo = document.getElementById("percobaanInfo");
    const resetBtn = document.getElementById("resetBtn");
    const tebakInput = document.getElementById("tebakInput");

    pesan.textContent = "permainan dimulai ! silahkan tebak";
    percobaanInfo.textContent = `kesempatan tingga: ${maxNyoba - banyakNyoba}`;

    resetBtn.classList.add("hidden");
    tebakInput.value = "";
    tebakInput.disabled = false;
}

function cekTebakan() {
    const tebakInput = document.getElementById("tebakInput");
    const pesan = document.getElementById("pesan");
    const percobaanInfo = document.getElementById("percobaanInfo");
    const resetBtn = document.getElementById("resetBtn");

    const tebak = Number(tebakInput.value);

    if(!tebak || tebak < 1 || tebak > 100) {
        pesan.textContent ="Masukan tebakan umur dari 1 sampai 100";
        return;
    }

    banyakNyoba++;

    if(tebak === umurJkw) {
        pesan.textContent = `Kelass, umur jokowi adalah ${umurJkw}`;
        percobaanInfo.textContent = `kamu nebak ${banyakNyoba} kali`;
        endGame();
    } else if (tebak > umurJkw) {
        pesan.textContent = "ketuaan lek, coba tebak lagi";
    } else {
        pesan.textContent = "kemudaan lek, coba tebak lagi";
    }

    const sisaPercobaan = maxNyoba - banyakNyoba;
    percobaanInfo.textContent = `kesempatan tersisa ${sisaPercobaan}`;


    if(sisaPercobaan <= 0 && tebak !== umurJkw){
        pesan.textContent = `Agh cupu, ga dapet tambang dah. umur Jokowi adalah ${umurJkw}`;
        endGame();
    }

    tebakInput.value = "";
}

function endGame(){
    const tebakInput = document.getElementById("tebakInput");
    const resetBtn = document.getElementById("resetBtn");

    tebakInput.disabled = true;
    resetBtn.classList.remove("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
    const tombolTebak = document.getElementById("tombolTebak");
    const resetBtn = document.getElementById("resetBtn");

    tombolTebak.addEventListener("click", cekTebakan);
    resetBtn.addEventListener("click", mulai);

    mulai();
})

