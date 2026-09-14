---
locale: "en"
title: "ERP Attendance Optimization"
slug: "erp-attendance-optimization"
category: "Performance optimization and infrastructure"
summary: "Investigation and early improvements for an ERP attendance system with around 6,000 users."
role: "FullStack & Infrastructure Developer"
year: "2025"
status: "Phased analysis and optimization"
featured: true
technologies: ["CodeIgniter", "MariaDB", "Linux", "Redis", "Server Monitoring"]
coverImage: "/images/project-erp-attendance.png"
coverAlt: "Abstract performance monitoring visual for an attendance system"
gallery:
  - src: "/images/project-erp-attendance.png"
    alt: "Database and attendance application monitoring illustration"
  - src: "/images/project-erp-attendance2.png"
    alt: "Database and attendance application monitoring illustration"
problem: "An ERP attendance system with around 6,000 users experienced slowdowns. Investigation was needed to understand bottlenecks in the application, queries, database configuration, and server capacity."
responsibilities:
  - "Investigated slow application behavior from the application and database sides."
  - "Identified long-running GET_LOCK processes."
  - "Analyzed database configuration and InnoDB pressure."
  - "Improved the InnoDB buffer-pool configuration according to server capacity."
  - "Evaluated Redis as a future improvement."
  - "Promoted server monitoring as part of the diagnosis process."
solution: "Optimization was performed in stages by reading signals from database processes, server configuration, and application behavior. Changes focused on reducing database pressure and improving stability without claiming unmeasured performance numbers."
architecture:
  description: "The system runs from users to a CodeIgniter application and then to MariaDB. Redis was evaluated as a cache layer to reduce database load in a later improvement stage."
  nodes: ["Users", "CodeIgniter App", "MariaDB", "Monitoring", "Redis plan"]
decisions:
  - "Analyzed database processes before changing configuration."
  - "Adjusted the InnoDB buffer pool as an initial step to reduce database I/O pressure."
  - "Evaluated Redis as a cache rather than a replacement for query and database configuration improvements."
  - "Used monitoring to distinguish application, database, and server problems."
challenges:
  - "Distinguishing slowness caused by queries, locks, database configuration, or server capacity."
  - "Working on an active system with many users without high-risk changes."
  - "Prioritizing optimization based on evidence rather than assumptions."
results:
  - "The long-running GET_LOCK process was identified as an important investigation point."
  - "The InnoDB buffer-pool configuration was increased to help reduce database pressure."
  - "Redis and monitoring were evaluated as part of a plan to improve system stability."
lessonsLearned:
  - "Performance optimization should start with clear observation before architectural changes."
  - "Database locks and memory configuration can significantly affect application stability."
  - "Performance claims need measurements before they are published."
---

ERP Attendance Optimization focuses on bottleneck investigation and phased improvements for an attendance system with a large user base.
