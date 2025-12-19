[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/PAiQDgnZ)



# 🎮 ReFun – Simple Browser Games Platform

## 📌Overview Project

**ReFun** adalah sebuah website landing page untuk perusahaan game fiktif yang menyediakan beberapa **game sederhana berbasis JavaScript** yang dapat dimainkan langsung di browser.  
Project ini dikembangkan sebagai bagian dari **Module 3 Assignment** dengan fokus pada penerapan fundamental JavaScript, DOM Manipulation, dan Event Handling.

Website ini ditujukan untuk **casual gamers** yang ingin memainkan game ringan tanpa perlu instalasi tambahan.

---

## 🎯 Project Objectives

Tujuan utama pengembangan ReFun adalah:

- Menampilkan landing page perusahaan game dengan desain modern dan responsif
- Menyediakan game JavaScript sederhana yang dapat dimainkan langsung
- Menerapkan konsep dasar JavaScript secara praktis
- Melatih struktur kode yang rapi, modular, dan mudah dipahami
- Meningkatkan pengalaman pengguna melalui interaksi dinamis

---

## 🕹️ Available Games

### 1️⃣ Tebak Umur Jokowi (Number Guessing Game)

**Deskripsi:**
- Komputer memilih angka acak antara 1–100
- Pemain memiliki maksimal 5 kesempatan menebak
- Setiap tebakan akan diberi feedback:
  - Terlalu besar
  - Terlalu kecil
- Game berakhir jika tebakan benar atau kesempatan habis

**Konsep JavaScript yang digunakan:**
- `Math.random()`
- Conditional statements (`if – else`)
- DOM manipulation
- Event handling (`addEventListener`)

---

### 2️⃣ Suit (Rock, Paper, Scissors)

**Deskripsi:**
- Pemain memilih Rock, Paper, atau Scissors
- Komputer memilih secara acak
- Pemenang ditentukan berdasarkan aturan klasik
- Skor pemain dan komputer ditampilkan
- Best streak disimpan menggunakan `localStorage`

**Konsep JavaScript yang digunakan:**
- Array
- `switch-case`
- Event handling
- localStorage

---

### 3️⃣ Klik Game (Clicker Game)

**Deskripsi:**
- Pemain memiliki waktu 10 detik
- Setiap klik tombol menambah skor
- Game berhenti ketika waktu habis
- High score disimpan menggunakan `localStorage`

**Konsep JavaScript yang digunakan:**
- `setInterval()` dan `clearInterval()`
- DOM manipulation
- Event handling
- localStorage

---

## 🧰 Technologies Used

Project ini dibangun menggunakan teknologi berikut:

- **HTML5** – Struktur halaman
- **Tailwind CSS (CDN)** – Styling dan layout
- **JavaScript (Vanilla JS)** – Logika game dan interaksi
- **Browser localStorage** – Penyimpanan skor

Tidak menggunakan framework JavaScript tambahan agar fokus pada pemahaman fundamental.

---

## 📁 Project Structure

Struktur folder project adalah sebagai berikut:

```text
ReFun/
│
├── index.html           # Landing Page
│
├── tebak.html           # Game Tebak Umur Jokowi
├── tebak.js
│
├── rps.html             # Game Suit (Rock Paper Scissors)
├── rps.js
│
├── klik.html            # Clicker Game
├── klik.js
│
└── README.md            # Dokumentasi Project
