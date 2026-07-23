---
title: "Studio Verval"
slug: "studio-verval"
category: "Sistem pengajuan dan verifikasi data"
summary: "Aplikasi pengajuan dan verifikasi data dengan alur draft, submit, review, revisi, dan penerimaan berjenjang."
role: "Full-stack Web Developer"
year: "2025"
status: "Dalam pengembangan"
featured: true
technologies:
  - Next.js App Router
  - React
  - TypeScript
  - Tailwind CSS
  - shadcn/ui
  - Fastify
  - Prisma
  - MariaDB
  - Bun
  - Docker
coverImage: "/images/project-studio-verval.png"
coverAlt: "Visual abstrak alur verifikasi data Studio Verval"
gallery:
  - src: "/images/project-studio-verval.svg"
    alt: "Ilustrasi alur pengajuan dan verifikasi Studio Verval"
  - src: "/images/project-studio-verval.png"
    alt: "dashboard studio verval"
  - src: "/images/project-studio-verval2.png"
    alt: "management user studio verval"
problem: "Aplikasi membutuhkan alur pengajuan yang jelas dari draft, submit, review verifikator, diterima, atau dikembalikan untuk revisi. Data yang diterima perlu masuk ke proses verifikasi berikutnya dengan hak akses yang sesuai."
responsibilities:
  - "Membangun frontend dengan Next.js App Router, React, TypeScript, Tailwind CSS, dan shadcn/ui."
  - "Membangun backend menggunakan Fastify dan Prisma."
  - "Menggunakan pola BFF atau proxy melalui Next.js untuk menjaga batas akses API."
  - "Menangani server-side pagination, filter, pencarian, dan sorting."
  - "Mengelola autentikasi, role, dan alur verifikasi."
  - "Menyiapkan deployment dengan Docker serta pemisahan internal API URL dan public API URL."
solution: "Aplikasi dirancang dengan Next.js sebagai lapisan frontend sekaligus BFF atau route handler, lalu meneruskan proses bisnis ke Fastify API. Prisma digunakan untuk menjaga akses database lebih konsisten, sementara state tabel dikendalikan melalui query server agar filter, pencarian, sorting, dan pagination tetap sinkron."
architecture:
  description: "Alur sistem dimulai dari browser ke Next.js, masuk ke BFF atau route handler, lalu diteruskan ke Fastify API, Prisma, dan MariaDB."
  nodes:
    - "Browser"
    - "Next.js"
    - "BFF / Route Handler"
    - "Fastify API"
    - "Prisma"
    - "MariaDB"
decisions:
  - "Memisahkan server fetch dan client fetch sesuai kebutuhan rendering dan interaksi tabel."
  - "Menggunakan proxy API agar URL internal backend tidak perlu diekspos langsung ke browser."
  - "Menjadikan query server sebagai sumber kebenaran untuk pagination, filter, pencarian, dan sorting."
  - "Mengelola role di backend agar keputusan verifikasi tidak hanya bergantung pada UI."
challenges:
  - "Menentukan batas yang jelas antara server fetch dan client fetch di Next.js App Router."
  - "Menjaga proxy API tetap konsisten antara development dan deployment Docker."
  - "Menyinkronkan state tabel dengan query server tanpa membuat URL dan state UI saling bertentangan."
  - "Mengelola role dan status agar alur draft, submit, review, revisi, dan diterima tetap mudah dipahami."
results:
  - "Fondasi aplikasi mendukung alur pengajuan dan verifikasi berjenjang."
  - "Struktur API dan BFF membantu memisahkan public API URL dari internal API URL."
  - "Tabel data dapat diarahkan ke server-side pagination, filter, pencarian, dan sorting."
lessonsLearned:
  - "Next.js App Router perlu batas yang jelas antara data yang diambil di server dan interaksi yang terjadi di client."
  - "Proxy API membantu deployment, tetapi konfigurasi URL perlu dibuat eksplisit sejak awal."
  - "State tabel lebih stabil ketika query server menjadi sumber utama untuk filter dan pagination."
---

Studio Verval adalah aplikasi pengajuan dan verifikasi data yang menekankan alur kerja, role, dan sinkronisasi data tabel dengan query server.
