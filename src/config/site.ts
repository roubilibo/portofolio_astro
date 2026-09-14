import type { Locale } from "@/i18n/utils";

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

export const localizedSiteConfig = {
  id: {
    description: siteConfig.description,
    longDescription: siteConfig.longDescription,
    availability: siteConfig.availability,
  },
  en: {
    description:
      "Full-stack Web Developer building administration apps, information systems, REST APIs, database integrations, and deployments with Docker and Nginx.",
    longDescription:
      "I focus on full-stack development, backend, databases and queries, deployment, server configuration, system debugging, and application performance optimization.",
    availability:
      "Available for full-stack, backend, and application optimization projects.",
  },
} as const satisfies Record<Locale, object>;

export function getNavItems(locale: Locale) {
  return [
    { label: locale === "en" ? "Home" : "Beranda", path: "" },
    { label: locale === "en" ? "Projects" : "Proyek", path: "projects" },
    { label: locale === "en" ? "About" : "Tentang", path: "about" },
    { label: locale === "en" ? "Contact" : "Kontak", path: "contact" },
  ] as const;
}
