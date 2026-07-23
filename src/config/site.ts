export const siteConfig = {
  name: "M. Roubil Ridlo",
  displayName: "Roubil Ridlo",
  nickname: "Obil",
  position: "Full-stack Web Developer",
  description:
    "Full-stack Web Developer yang membangun aplikasi administrasi, sistem informasi, REST API, integrasi database, serta deployment menggunakan Docker dan Nginx.",
  longDescription:
    "Saya berfokus pada pengembangan full-stack, backend, database dan query, deployment, konfigurasi server, debugging sistem, serta optimasi performa aplikasi.",
  url: "https://portfolio-domain.example",
  email: "roubilridlo@gmail.com",
  whatsapp: "https://wa.me/6285231113485",
  github: "https://github.com/roubilibo",
  linkedin: "https://www.linkedin.com/in/roubil-ridlo",
  cvUrl: "/cv/m-roubil-ridlo-cv.pdf",
  location: "Indonesia",
  availability:
    "Terbuka untuk proyek full-stack, backend, dan optimasi aplikasi.",
} as const;

export const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Proyek", href: "/projects/" },
  { label: "Tentang", href: "/about/" },
  { label: "Kontak", href: "/contact/" },
] as const;
