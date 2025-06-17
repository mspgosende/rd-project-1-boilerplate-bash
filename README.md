# 🧱 Boilerplate Bash Project — Terminal-Only Web Starter

This project was developed by building a basic web boilerplate (HTML, CSS, JS) using **only Bash and the terminal**, as an advanced reproduction of the [“Learn Bash by Building a Boilerplate”](https://www.freecodecamp.org/learn/relational-database/learn-bash-by-building-a-boilerplate/build-a-boilerplate) course from freeCodeCamp — without relying on Gitpod or broken extensions like CodeRoad.

---

## 🌀 Phase 1 — Build a reproducible professional environment

> Understand how a real developer sets up a containerized local environment **without depending on online tools** like Gitpod Classic or CodeRoad.

### Highlight:
- This project was done completely **locally with Docker and VS Code**

### 💻 Local setup & environment configuration:

- Installed Docker and ran it successfully (`hello-world`)
- Created a personalized `Dockerfile` with Ubuntu + custom tools:
  - `curl`, `nano`, `tree`, etc.
- Entered Ubuntu container as root
- Built a functional web boilerplate with:

/boilerplate-project/
├── index.html
├── css/
│ └── styles.css
└── js/
└── main.js

- ✅ Used terminal-only Bash commands: `mkdir`, `touch`, `cat`, `nano`, `ls`, `tree`, `cd`
- ✅ Installed `Node.js v20.14.0` using `asdf`
- ✅ Created and launched local server using `pnpm` + `serve`

---

## ⚙️ Technologies & Tools Used

| Tool       | Version      | Notes                          |
|------------|--------------|--------------------------------|
| Docker     | Latest       | Custom image, CLI-only Ubuntu |
| Node.js    | 20.14.0      | Installed via `asdf`          |
| pnpm       | 10.12.1      | Installed globally             |
| serve      | 14.2.4       | Local dev server               |
| Bash       | GNU          | Terminal-only workflow         |
| nano       | Ubuntu pkg   | Text editing in CLI            |
| VS Code    | Local        | Only for final viewing         |

---

## 🚀 Phase 2 — Project context

This repo reproduces and extends the learning goals of the freeCodeCamp course:

> **“Learn Bash by Building a Boilerplate”**

### 🔍 Course Goals Recreated Locally:

- Learn how to use Bash/CLI in web development
- Build project structure manually:
- `mkdir`, `touch`, `nano`
- Avoid using any GUI or VS Code until final result
- Understand how to automate tasks and structure projects reproducibly
- Replace Gitpod + CodeRoad with a stable local setup

---

## 🧠 Reflections

This project was developed as a **real-world workaround** to technical barriers (broken extensions, deprecated platforms) and ended up becoming a **deep learning experience** on how to:

- Set up a full frontend-ready environment with containers
- Use Bash fluently
- Work without depending on web-based IDEs
- Document and control every step

---

## 📌 Status

-  Project complete
-  Repository is public
- 🛠️ Can be reused as a starter template for terminal-based projects or frontend DevOps training

---

## 📂 License

This repo is for educational purposes and personal growth documentation.
