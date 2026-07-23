---
title: "Sicalmers"
slug: "sicalmers"
category: "Sistem informasi dan administrasi pemerintahan"
summary: "Aplikasi administrasi untuk mengelola data air minum, air limbah, perumahan, dan persampahan lintas wilayah."
role: "Full-stack Web Developer"
year: "2024"
status: "Aktif dikembangkan"
featured: true
technologies:
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - Zustand
  - TanStack Query
  - Express
  - MariaDB
  - Docker
  - Nginx
  - GCP
coverImage: "/images/project-sicalmers.png"
coverAlt: "Visual abstrak dashboard data wilayah untuk proyek Sicalmers"
gallery:
  - src: "/images/project-sicalmers.png"
    alt: "Ilustrasi dashboard dan API Sicalmers"
  - src: "/images/project-sicalmers2.png"
    alt: "Ilustrasi dashboard dan API Sicalmers"
problem: "Data administrasi sektor air minum, air limbah, perumahan, dan persampahan perlu dikelola dalam aplikasi yang dapat menangani relasi wilayah, autentikasi, rekap data, dan deployment yang stabil."
responsibilities:
  - "Membangun frontend menggunakan React, Vite, TypeScript, Tailwind CSS, Zustand, dan TanStack Query."
  - "Membangun REST API menggunakan Express dan TypeScript."
  - "Mengimplementasikan autentikasi JWT access token dan refresh token."
  - "Mengelola state wilayah provinsi, kabupaten, kecamatan, dan desa."
  - "Mengelola query database dengan banyak relasi tabel."
  - "Mengelola rekap data hingga puluhan ribu baris."
  - "Menyiapkan deployment menggunakan Docker dan Nginx."
  - "Mengonfigurasi reverse proxy dan migrasi deployment dari VPS ke Google Cloud Platform."
solution: "Sistem dipisahkan menjadi frontend React, reverse proxy Nginx, REST API Express, dan database MariaDB. Struktur ini membuat pengembangan UI, API, dan deployment lebih mudah dikelola serta membantu isolasi masalah ketika terjadi perbedaan perilaku di browser atau server."
architecture:
  description: "Alur utama aplikasi berjalan dari browser ke frontend React, diteruskan melalui Nginx sebagai reverse proxy, lalu masuk ke Express API dan MariaDB."
  nodes:
    - "Browser"
    - "React frontend"
    - "Nginx reverse proxy"
    - "Express API"
    - "MariaDB"
decisions:
  - "Menggunakan TanStack Query untuk sinkronisasi data server dan cache query pada sisi frontend."
  - "Menggunakan Zustand untuk state UI dan data wilayah yang perlu dibagikan antar komponen."
  - "Memisahkan konfigurasi cookie dan proxy agar autentikasi lebih mudah ditelusuri lintas browser."
  - "Mengemas aplikasi dengan Docker agar deployment antar server lebih konsisten."
challenges:
  - "Menangani relasi data wilayah dan data sektor yang saling terkait."
  - "Mengelola rekap data besar tanpa membuat antarmuka sulit digunakan."
  - "Menangani perbedaan perilaku cookie lintas browser pada autentikasi berbasis token."
  - "Menjaga konfigurasi reverse proxy tetap sesuai saat migrasi dari VPS ke Google Cloud Platform."
results:
  - "Aplikasi memiliki fondasi frontend dan backend yang terpisah dengan jelas."
  - "Deployment dapat dipindahkan dari VPS ke Google Cloud Platform dengan konfigurasi yang lebih terstruktur."
  - "Proses debugging autentikasi, proxy, dan query menjadi lebih mudah dilacak karena batas sistem dibuat eksplisit."
lessonsLearned:
  - "Autentikasi berbasis cookie dan token perlu diuji lintas browser sejak awal."
  - "Query rekap data besar perlu dirancang bersamaan dengan kebutuhan UI agar tidak membebani pengguna maupun database."
  - "Deployment container membantu konsistensi, tetapi konfigurasi proxy tetap perlu dokumentasi yang jelas."
---

Sicalmers adalah sistem informasi dan administrasi yang menangani data terkait air minum, air limbah, perumahan, dan persampahan. Fokus pekerjaan berada pada pengembangan frontend, backend, integrasi database, autentikasi, dan deployment.
