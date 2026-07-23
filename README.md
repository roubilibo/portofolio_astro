# Portfolio M. Roubil Ridlo

Website portofolio statis untuk M. Roubil Ridlo sebagai Full-stack Web Developer. Dibangun dengan Astro, TypeScript strict mode, Tailwind CSS, Content Collections, dan Lucide Icons.

## Screenshot

Screenshot belum disertakan. Setelah menjalankan development server, ambil screenshot dari halaman beranda dan simpan di `public/images/`.

## Teknologi

- Astro static output
- TypeScript strict mode
- Tailwind CSS
- Astro Content Collections
- Lucide Icons
- Bun
- Cloudflare Pages

## Instalasi

```bash
bun install
```

## Development

```bash
bun run dev
```

## Build

```bash
bun run check
bun run build
```

## Preview

```bash
bun run preview
```

## Mengganti Data Profil

Edit file `src/config/site.ts` untuk mengganti nama, email, WhatsApp, GitHub, LinkedIn, URL website, lokasi, status ketersediaan kerja, dan URL CV.

## Menambah Proyek Baru

Tambahkan file Markdown baru di `src/content/projects/`. Gunakan frontmatter yang sama seperti proyek yang sudah ada:

- `title`
- `slug`
- `summary`
- `role`
- `year`
- `status`
- `featured`
- `technologies`
- `repositoryUrl`
- `demoUrl`
- `coverImage`
- `gallery`
- `problem`
- `responsibilities`
- `solution`
- `architecture`
- `challenges`
- `results`
- `lessonsLearned`

Jika `repositoryUrl` atau `demoUrl` belum tersedia, hapus field tersebut agar tombol tidak tampil.

## Mengganti CV

Letakkan file CV asli di:

```text
public/cv/m-roubil-ridlo-cv.pdf
```

Jangan ubah path jika ingin tombol unduh CV tetap bekerja tanpa perubahan kode.

## Mengganti Gambar

Aset lokal berada di `public/images/`. Ganti `coverImage` dan `gallery` pada file Markdown proyek untuk memakai gambar baru. Gunakan gambar yang ringan seperti WebP, AVIF, SVG, atau PNG terkompresi.

## Deploy ke Cloudflare Pages

1. Push repository ke GitHub.
2. Buka Cloudflare Dashboard.
3. Masuk ke Workers & Pages.
4. Buat Pages project.
5. Hubungkan repository GitHub.
6. Pilih production branch `main`.
7. Gunakan build command `bun run build`.
8. Gunakan output directory `dist`.
9. Deploy.
10. Hubungkan custom domain jika tersedia.

Website ini menggunakan output static, sehingga tidak membutuhkan Astro Cloudflare adapter dan tidak membutuhkan environment variable wajib untuk build awal.

## Custom Domain

Setelah deploy, buka project Cloudflare Pages, masuk ke tab Custom domains, lalu tambahkan domain yang ingin digunakan. Setelah domain aktif, ganti `url` di `src/config/site.ts` dan `site` di `astro.config.mjs`.

## Struktur Folder

```text
src/
  components/
    layout/
    sections/
    projects/
    ui/
  config/
  content/
    projects/
  data/
  layouts/
  pages/
    projects/
  styles/
public/
  cv/
  icons/
  images/
```
