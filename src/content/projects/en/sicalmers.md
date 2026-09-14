---
locale: "en"
title: "Sicalmers"
slug: "sicalmers"
category: "Government information and administration system"
summary: "An administration application for managing drinking water, wastewater, housing, and waste data across regions."
role: "Full-stack Web Developer"
year: "2024"
status: "Actively developed"
featured: true
technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query", "Express", "MariaDB", "Docker", "Nginx", "GCP"]
coverImage: "/images/project-sicalmers.png"
coverAlt: "Abstract regional data dashboard for Sicalmers"
gallery:
  - src: "/images/project-sicalmers.png"
    alt: "Sicalmers dashboard and API illustration"
  - src: "/images/project-sicalmers2.png"
    alt: "Sicalmers dashboard and API illustration"
problem: "Administrative data for water, wastewater, housing, and waste sectors needs an application that handles regional relationships, authentication, reporting, and stable deployment."
responsibilities:
  - "Built the frontend with React, Vite, TypeScript, Tailwind CSS, Zustand, and TanStack Query."
  - "Built a REST API with Express and TypeScript."
  - "Implemented JWT access-token and refresh-token authentication."
  - "Managed province, regency, district, and village state."
  - "Managed database queries with many table relationships."
  - "Handled reports containing tens of thousands of rows."
  - "Prepared deployment with Docker and Nginx."
  - "Configured the reverse proxy and migrated deployment from VPS to Google Cloud Platform."
solution: "The system separates the React frontend, Nginx reverse proxy, Express REST API, and MariaDB database. This makes UI, API, and deployment easier to manage and helps isolate browser and server issues."
architecture:
  description: "The main application flow goes from the browser to the React frontend, through Nginx as a reverse proxy, then to the Express API and MariaDB."
  nodes: ["Browser", "React frontend", "Nginx reverse proxy", "Express API", "MariaDB"]
decisions:
  - "Used TanStack Query for server-data synchronization and query caching."
  - "Used Zustand for UI state and regional data shared across components."
  - "Separated cookie and proxy configuration to make browser authentication easier to trace."
  - "Packaged the application with Docker for more consistent deployments."
challenges:
  - "Handling relationships between regional and sector data."
  - "Managing large reports without making the interface difficult to use."
  - "Handling cross-browser cookie behavior in token-based authentication."
  - "Keeping reverse-proxy configuration correct while migrating from VPS to Google Cloud Platform."
results:
  - "The application has a clearly separated frontend and backend foundation."
  - "Deployment moved from VPS to Google Cloud Platform with more structured configuration."
  - "Authentication, proxy, and query debugging became easier to trace because system boundaries are explicit."
lessonsLearned:
  - "Cookie- and token-based authentication should be tested across browsers early."
  - "Large reporting queries should be designed together with UI requirements."
  - "Container deployment improves consistency, but proxy configuration still needs clear documentation."
---

Sicalmers is an information and administration system for drinking water, wastewater, housing, and waste data. The work focuses on frontend, backend, database integration, authentication, and deployment.
