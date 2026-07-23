---
title: "ERP Attendance Optimization"
slug: "erp-attendance-optimization"
category: "Performance optimization dan infrastructure"
summary: "Investigasi dan perbaikan awal pada sistem attendance ERP dengan sekitar 6.000 pengguna."
role: "FullStack & Infrastructure Developer"
year: "2025"
status: "Analisis dan optimasi bertahap"
featured: true
technologies:
  - CodeIgniter
  - MariaDB
  - Linux
  - Redis
  - Server Monitoring
coverImage: "/images/project-erp-attendance.png"
coverAlt: "Visual abstrak monitoring performa sistem attendance"
gallery:
  - src: "/images/project-erp-attendance.png"
    alt: "Ilustrasi monitoring database dan aplikasi attendance"
  - src: "/images/project-erp-attendance2.png"
    alt: "Ilustrasi monitoring database dan aplikasi attendance"
problem: "Sistem attendance ERP dengan sekitar 6.000 pengguna mengalami perlambatan. Investigasi diperlukan untuk memahami bottleneck pada aplikasi, query, konfigurasi database, dan kapasitas server."
responsibilities:
  - "Menginvestigasi penyebab aplikasi lambat dari sisi aplikasi dan database."
  - "Menemukan proses GET_LOCK yang membutuhkan waktu lama."
  - "Menganalisis konfigurasi database dan tekanan pada InnoDB."
  - "Meningkatkan konfigurasi InnoDB buffer pool sesuai kapasitas server."
  - "Mengevaluasi penggunaan Redis sebagai rencana peningkatan."
  - "Mendorong monitoring server sebagai bagian dari proses diagnosis."
solution: "Optimasi dilakukan secara bertahap dengan membaca indikasi dari proses database, konfigurasi server, dan perilaku aplikasi. Perubahan diarahkan untuk mengurangi tekanan pada database dan meningkatkan stabilitas sistem tanpa mengklaim angka performa yang belum terukur."
architecture:
  description: "Sistem berjalan dari pengguna ke aplikasi CodeIgniter, lalu ke database MariaDB. Redis dievaluasi sebagai lapisan cache untuk mengurangi beban database pada tahap peningkatan berikutnya."
  nodes:
    - "Pengguna"
    - "CodeIgniter App"
    - "MariaDB"
    - "Monitoring"
    - "Redis plan"
decisions:
  - "Menganalisis proses database sebelum melakukan perubahan konfigurasi."
  - "Menyesuaikan InnoDB buffer pool sebagai langkah awal untuk mengurangi tekanan I/O database."
  - "Mengevaluasi Redis sebagai cache, bukan sebagai pengganti perbaikan query dan konfigurasi database."
  - "Menggunakan monitoring untuk membedakan masalah aplikasi, database, dan server."
challenges:
  - "Membedakan gejala lambat yang berasal dari query, lock, konfigurasi database, atau kapasitas server."
  - "Menangani sistem aktif dengan jumlah pengguna yang besar tanpa perubahan berisiko tinggi."
  - "Menentukan prioritas optimasi berdasarkan bukti, bukan asumsi."
results:
  - "Proses GET_LOCK yang memakan waktu lama berhasil diidentifikasi sebagai salah satu titik investigasi penting."
  - "Konfigurasi InnoDB buffer pool ditingkatkan untuk membantu mengurangi tekanan pada database."
  - "Redis dan monitoring dievaluasi sebagai bagian dari rencana peningkatan stabilitas sistem."
lessonsLearned:
  - "Optimasi performa perlu dimulai dari observasi yang jelas sebelum masuk ke perubahan arsitektur."
  - "Database lock dan konfigurasi memory dapat berdampak besar pada stabilitas aplikasi."
  - "Klaim peningkatan performa perlu didukung data pengukuran sebelum dipublikasikan."
---

ERP Attendance Optimization berfokus pada investigasi bottleneck dan perbaikan bertahap untuk sistem attendance dengan basis pengguna besar.
