<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Project kami yaitu membuat sebuah aplikasi berbasis web mengenai hewan ternak, anda dapat mencari informasi mengenai hewan ternak yang ingin anda beli hanya dengan mengscan QR Code.
Aplikasi kami juga menawarkan manajemen hewan ternak untuk para peternak, dan untuk Dinas Ketahanan Pangan maupun Dinas Peternakan dan Kesehatan Hewan dapat memantau persebaran hewan ternak yang ada di indonesia.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Pastikan anda sudah menginstall nodeJS terlebih dahulu dan buat project reactjs agar nodeJS terinstall dengan benar di device anda

### Installation

_ikuti langkah berikut._

1. Clone the repo
   ```sh
   git clone https://github.com/HardStay/livestockbiz.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env` diletakkan di dalam folder server
   ```js
   GROQ_API_KEY="generate dari Groq"
   HOST_DB="localhost"
   NAME_DB="nama_db anda"
   USER_DB="root" (default memang root)
   PASSWORD_DB="" (default)
   PORT_DB=3306 (default, sesuaikan dengan XAMPP anda)
   SESS_SECRET = dwah762geq226827123fgvdjaawgdviaw62e (ini bebas, mau pakai yang ini juga boleh)
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
