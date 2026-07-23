export const experiences = [
  {
    company: "Instansi / Organisasi Pemerintahan",
    position: "Full-stack Web Developer",
    period: "2024 - Sekarang",
    description:
      "Membangun dan memelihara aplikasi sistem informasi untuk kebutuhan administrasi, rekap data, dan operasional lintas wilayah.",
    contributions: [
      "Mengembangkan frontend React dan backend REST API dengan TypeScript.",
      "Mengelola query database relasional dengan banyak tabel dan kebutuhan rekap data.",
      "Menangani deployment aplikasi menggunakan Docker, Nginx, VPS, dan Google Cloud Platform.",
      "Melakukan debugging masalah autentikasi, cookie, konfigurasi proxy, dan performa aplikasi.",
    ],
    technologies: ["React", "TypeScript", "Express", "MariaDB", "Docker", "Nginx", "GCP"],
  },
  {
    company: "Tim Produk Internal",
    position: "Backend & Infrastructure Developer",
    period: "2023 - 2024",
    description:
      "Mendukung pengembangan backend, integrasi database, dan perbaikan stabilitas aplikasi internal.",
    contributions: [
      "Menganalisis bottleneck aplikasi dan konfigurasi database.",
      "Menyusun pendekatan perbaikan performa berbasis observasi server dan query.",
      "Mengevaluasi penggunaan cache dan monitoring untuk mengurangi tekanan pada database.",
    ],
    technologies: ["CodeIgniter", "MySQL", "Linux", "Redis", "Server Monitoring"],
  },
] as const;
