---
locale: "en"
title: "Studio Verval"
slug: "studio-verval"
category: "Data submission and verification system"
summary: "A data submission and verification app with draft, submit, review, revision, and tiered acceptance workflows."
role: "Full-stack Web Developer"
year: "2025"
status: "In development"
featured: true
technologies: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Fastify", "Prisma", "MariaDB", "Bun", "Docker"]
coverImage: "/images/project-studio-verval.png"
coverAlt: "Abstract workflow illustration for Studio Verval"
gallery:
  - src: "/images/project-studio-verval.svg"
    alt: "Studio Verval submission and verification workflow"
  - src: "/images/project-studio-verval.png"
    alt: "Studio Verval dashboard"
  - src: "/images/project-studio-verval2.png"
    alt: "Studio Verval user management"
problem: "The application needs a clear submission flow from draft, submit, verifier review, acceptance, or revision. Accepted data must continue to the next verification process with the correct access rights."
responsibilities:
  - "Built the frontend with Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui."
  - "Built the backend with Fastify and Prisma."
  - "Used a BFF or Next.js proxy pattern to keep API access boundaries clear."
  - "Handled server-side pagination, filtering, search, and sorting."
  - "Managed authentication, roles, and verification workflows."
  - "Prepared Docker deployment with separate internal and public API URLs."
solution: "The application uses Next.js as the frontend and BFF or route-handler layer, forwarding business processes to a Fastify API. Prisma keeps database access consistent, while server queries control table state so filtering, search, sorting, and pagination stay synchronized."
architecture:
  description: "The system flows from the browser to Next.js, through a BFF or route handler, then to the Fastify API, Prisma, and MariaDB."
  nodes: ["Browser", "Next.js", "BFF / Route Handler", "Fastify API", "Prisma", "MariaDB"]
decisions:
  - "Separated server fetch and client fetch according to rendering and table interaction needs."
  - "Used an API proxy so the internal backend URL does not need to be exposed to the browser."
  - "Made server queries the source of truth for pagination, filtering, search, and sorting."
  - "Managed roles in the backend so verification decisions do not rely on the UI alone."
challenges:
  - "Defining clear boundaries between server fetch and client fetch in Next.js App Router."
  - "Keeping the API proxy consistent across development and Docker deployment."
  - "Synchronizing table state with server queries without conflicting URL and UI state."
  - "Keeping roles and statuses understandable across the workflow."
results:
  - "The application foundation supports a tiered submission and verification workflow."
  - "The API and BFF structure separates the public API URL from the internal API URL."
  - "Data tables can use server-side pagination, filtering, search, and sorting."
lessonsLearned:
  - "Next.js App Router needs a clear boundary between server data and client interaction."
  - "An API proxy helps deployment, but URL configuration must be explicit from the start."
  - "Table state is more stable when server queries are the source of truth for filtering and pagination."
---

Studio Verval is a data submission and verification application focused on workflow, roles, and synchronizing table data with server queries.
