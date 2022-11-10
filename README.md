# Simulasi-Live-Code-3-Phase-0

## RULES

1. **Untuk kampus remote**: **WAJIB** melakukan **share screen** (**DESKTOP/ENTIRE SCREEN**) dan **unmute microphone** ketika Live Code berjalan (tidak melakukan share screen/salah screen atau tidak unmute microphone akan di ingatkan).
1. Kerjakan secara individu. Segala bentuk kecurangan (mencontek ataupun diskusi) akan menyebabkan skor live code ini 0.
1. Clone repo ini kemudian buatlah **branch dengan nama kalian**.
1. Kerjakan pada file JavaScript (\*.js) dan HTML (\*.html) yang telah disediakan dan jangan melakukan perubahan terhadap file lain.
1. Waktu pengerjaan:
   - **120 menit** untuk **3 soal**.
1. **Pada text editor hanya ada file yang terdapat pada repository ini**.
1. Membuka referensi eksternal seperti Google, StackOverflow, dan MDN diperbolehkan.
1. Dilarang membuka repository di organisasi tugas, baik pada organisasi batch sendiri ataupun batch lain, baik branch sendiri maupun branch orang lain (**setelah melakukan clone, close tab GitHub pada web browser kalian**).
1. Lakukan `git push origin <branch-name>` dan create pull request **hanya jika waktu Live Code telah usai (bukan ketika kalian sudah selesai mengerjakan)**. Tuliskan nama lengkap kalian saat membuat pull request dan assign buddy.
1. **Penilaian berbasis logika dan hasil akhir**. Pastikan keduanya sudah benar.
1. **Khusus untuk nomer 1**, Pastikan output di browser kalian sudah sesuai dengan screenshot yang diberikan.

## Notes

- Live code ini memiliki testing. Pastikan telah mengeksekusi command `npm install` sebelum melakukan test. Command line untuk test adalah `npm test -- <nama_file>`.

  | Soal | Command            | Max Score |
  | ---- | ------------------ | --------- |
  | 1    | `npm test -- 1.js` | 38        |
  | 2    | `npm test -- 2.js` | 57        |
  | 3    | Test di browser    | 5         |

  Untuk soal nomor 3, karna soal berbentuk `html` dan `css`, kalian tidak perlu melakukan `npm test`, kalian dapat membandingkan dengan requirements yang di inginkan di gambar `3reference.png`

- Built-in functions yang tidak dilarang oleh RULES:
  - Basic primitive data types: `Number()`, `String()`, `Boolean()`
  - Informatives: `typeof`, `.length`, `isInteger()`, `isArray()`, `isNaN()`
  - Maths: `Math.floor()`, `Math.round()`, `Math.ceil()`, `Math.abs()`, `Math.sqrt()`, `Math.random()`
  - Strings: `toString()`, `toUpperCase()`, `toLowerCase()`, `parseInt()`
  - Object: `Object.keys()`, `Object.values()`
  - Array: `push()`
  <!-- - Jangan lupa untuk menyertakan pseudocode apabila diminta oleh soal. Apabila **pseudocode tidak disertakan**, mengakibatkan **nilai 0** untuk soal tersebut. -->
- Reminder:
  - **Live Code 1 = 15%**,
  - **Live Code 2 = 20%**,
  - **Live Code 3 = 20%**,
  - **Daily challenges = 45%**,
  <!-- - **Rocket 5%**. -->
- **Passing score phase 0 = 71.6%**.
