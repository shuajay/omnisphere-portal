# OmniSphere Portal — Setup Guide

## Overview

OmniSphere Portal is a **micro-frontend employee management system** built as an **Nx monorepo** using **Angular Module Federation**. Each domain is an independently deployable remote application loaded dynamically by the Shell host.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20.x |
| npm | ≥ 10.x |
| Angular CLI | ≥ 19.x |

---

## Architecture

```
omnisphere-portal/
├── apps/
│   ├── shell/           # Host app — dashboard container, loads remotes based on user role
│   ├── shell-e2e/
│   ├── auth/            # Remote — login, token management, guards
│   ├── auth-e2e/
│   ├── core-hr/         # Remote — employee management, leave, documents
│   ├── core-hr-e2e/
│   ├── workforce/       # Remote — attendance, payroll, analytics
│   ├── workforce-e2e/
│   ├── talent/          # Remote — recruitment, training, performance
│   └── talent-e2e/
│
└── libs/
    ├── shared/
    │   ├── ui/          # Shared presentational components (buttons, tables, modals…)
    │   ├── data-access/ # HTTP services, interceptors, auth tokens, global state
    │   └── util/        # Pure helpers: pipes, guards, validators, constants
    │
    ├── core-hr/
    │   ├── feature-employees/
    │   ├── feature-leave/
    │   └── feature-documents/
    │
    ├── workforce/
    │   ├── feature-attendance/
    │   ├── feature-payroll/
    │   └── feature-analytics/
    │
    └── talent/
        ├── feature-recruitment/
        ├── feature-training/
        └── feature-performance/
```

### Module Federation topology

```
Browser
  └── shell (host, port 4200)
        ├── auth        (remote, port 4201)  — loaded pre-login
        ├── coreHr      (remote, port 4202)  — role: HR Manager / Admin
        ├── workforce   (remote, port 4203)  — role: Payroll / Operations
        └── talent      (remote, port 4204)  — role: Recruiter / L&D
```

> **Note:** `core-hr` uses the Module Federation name `coreHr` (JS identifier rules require no hyphens). The directory is `apps/core-hr`, the Nx project name is `coreHr`.

---

## Bootstrap Commands Reference

The commands below were executed in order to initialise the project from scratch.

### 1. Create the Nx workspace

```bash
npx create-nx-workspace@latest omnisphere-portal --preset=apps --pm=npm --no-interactive
cd omnisphere-portal
```

- `--preset=apps` — blank workspace with no default app.
- `--pm=npm` — use npm as the package manager.

---

### 2. Install the Angular Nx plugin

```bash
npm install @nx/angular --save-dev
```

Provides Angular generators and Module Federation support.

---

### 3. Generate the Shell host application

```bash
npx nx g @nx/angular:host apps/shell --standalone --style=scss --no-interactive
```

- **host** generator scaffolds a Webpack Module Federation host.
- `--standalone` — uses Angular standalone components (no NgModules).
- `--style=scss` — SCSS as the default stylesheet format.

---

### 4. Generate remote applications

Each remote is registered with `--host=shell` so the shell's `module-federation.config.ts` and `app.routes.ts` are automatically updated.

```bash
# Auth (authentication, login, token refresh)
npx nx g @nx/angular:remote apps/auth --host=shell --standalone --style=scss --no-interactive

# Core HR  (name=coreHr — valid JS identifier; directory=apps/core-hr)
npx nx g @nx/angular:remote apps/core-hr --name=coreHr --host=shell --standalone --style=scss --no-interactive

# Workforce
npx nx g @nx/angular:remote apps/workforce --host=shell --standalone --style=scss --no-interactive

# Talent
npx nx g @nx/angular:remote apps/talent --host=shell --standalone --style=scss --no-interactive
```

---

### 5. Generate shared libraries

```bash
npx nx g @nx/angular:library libs/shared/ui          --standalone --no-interactive
npx nx g @nx/angular:library libs/shared/data-access --standalone --no-interactive
npx nx g @nx/angular:library libs/shared/util        --standalone --no-interactive
```

| Library | Purpose |
|---------|---------|
| `shared/ui` | Reusable UI components (buttons, tables, forms, layouts) |
| `shared/data-access` | HTTP client wrappers, auth interceptors, environment tokens |
| `shared/util` | Pipes, guards, validators, date helpers, constants |

---

### 6. Generate domain feature libraries

#### Core HR

```bash
npx nx g @nx/angular:library libs/core-hr/feature-employees  --standalone --no-interactive
npx nx g @nx/angular:library libs/core-hr/feature-leave      --standalone --no-interactive
npx nx g @nx/angular:library libs/core-hr/feature-documents  --standalone --no-interactive
```

#### Workforce

```bash
npx nx g @nx/angular:library libs/workforce/feature-attendance --standalone --no-interactive
npx nx g @nx/angular:library libs/workforce/feature-payroll    --standalone --no-interactive
npx nx g @nx/angular:library libs/workforce/feature-analytics  --standalone --no-interactive
```

#### Talent

```bash
npx nx g @nx/angular:library libs/talent/feature-recruitment --standalone --no-interactive
npx nx g @nx/angular:library libs/talent/feature-training    --standalone --no-interactive
npx nx g @nx/angular:library libs/talent/feature-performance --standalone --no-interactive
```

---

## Running the project

### Serve all apps simultaneously (dev)

```bash
npx nx run-many --target=serve --all --parallel
```

### Serve individual apps

```bash
npx nx serve shell        # http://localhost:4200
npx nx serve auth         # http://localhost:4201
npx nx serve coreHr       # http://localhost:4202
npx nx serve workforce    # http://localhost:4203
npx nx serve talent       # http://localhost:4204
```

> Ports are defined in each app's `project.json` serve target. Update them if needed to avoid conflicts.

---

## Build

```bash
# Build all apps for production
npx nx run-many --target=build --all --configuration=production

# Build a single app
npx nx build shell --configuration=production
```

---

## Testing

```bash
# Unit tests — all projects
npx nx run-many --target=test --all

# E2E — single app
npx nx e2e shell-e2e
```

---

## Useful Nx commands

```bash
# Show all projects
npx nx show projects

# Visualise the project dependency graph
npx nx graph

# Show details of a specific project
npx nx show project shell
npx nx show project coreHr

# Lint everything
npx nx run-many --target=lint --all
```

---

## Default Dev Port Map

| App | Port |
|-----|------|
| shell | 4200 |
| auth | 4201 |
| coreHr | 4202 |
| workforce | 4203 |
| talent | 4204 |

---

## Key files to know

| File | Purpose |
|------|---------|
| `apps/shell/module-federation.config.ts` | Declares all remotes and their URLs |
| `apps/shell/src/app/app.routes.ts` | Lazy-loads each remote via Module Federation |
| `apps/<remote>/module-federation.config.ts` | Exposes the remote's entry routes |
| `apps/<remote>/src/app/remote-entry/entry.routes.ts` | Routes exported by the remote |
| `tsconfig.base.json` | Workspace-wide path aliases for all libs |
| `nx.json` | Nx configuration (caching, task runners) |
