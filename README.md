# 🧱 Boilerplate Bash Project — Terminal-Only Web Starter

A developer journey through setting up a complete frontend boilerplate using **only the terminal**. This project reproduces and expands on the freeCodeCamp course “Learn Bash by Building a Boilerplate” — but completely offline, locally, and containerized.

---

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Environment Setup](#environment-setup)
3. [Styling the Interface](#styling-the-interface)
4. [Version Control with Git](#version-control-with-git)
5. [Deployment](#deployment)
6. [How to Run the Project Locally](#how-to-run-the-project-locally)
7. [Technologies & Tools Used](#technologies--tools-used)
8. [Reflections & Learnings](#reflections--learnings)
9. [License](#license)

---

## 📌 Project Overview

This project was created as a way to practice real-world terminal workflows and frontend setup without relying on visual editors or prebuilt scaffolds. From project structure to styling and deployment — everything was done manually, with precision.

---

## 🌀 Environment Setup

To simulate how professional developers set up an environment from scratch:

* Installed Docker and ran a container using a custom **Dockerfile** based on Ubuntu.
* Inside the container:

  * Installed `nano`, `curl`, `tree`, and other CLI tools.
  * Navigated and built all files with Bash: `mkdir`, `touch`, `nano`, `ls`, `tree`, etc.
  * Set up `asdf` to install Node.js v20.14.0.
  * Installed `pnpm` and launched a dev server with `serve`.

**File structure:**

```
/boilerplate-project/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

---

## 🎨 Styling the Interface

In this phase, we implemented a responsive **typewriter animation** entirely in CSS and JavaScript:

* Used `clamp()` for fluid typography
* Created two lines of animated text
* Designed the effect to work on **black background** with **white text**, centered on the screen
* Ensured full responsiveness and controlled the typewriter cursor precisely

---

## 🔁 Version Control with Git

* Initialized Git locally
* Created a custom branch `screen` for animation styling
* Added and committed changes manually via CLI
* Configured SSH authentication for GitHub with a secure token and SSH key
* Pushed `screen` branch and later merged it into `main` after code review

---

## 🌐 Deployment

* Activated **GitHub Pages** for the repository
* Published the final build to a live URL:

🔗 [Live](https://mspgosende.github.io/rd-project-1-boilerplate-bash)

---

## 💻 How to Run the Project Locally

```bash
# Clone the repository
$ git clone git@github.com:mspgosende/rd-project-1-boilerplate-bash.git

# Navigate to the folder
$ cd rd-project-1-boilerplate-bash

# Install a static server (only if not installed)
$ pnpm add -g serve

# Launch the project
$ serve .
```

> Make sure you have **pnpm**, **Node.js v20**, and optionally Docker if reproducing the setup.

---

## ⚙️ Technologies & Tools Used

| Tool    | Version    | Notes                       |
| ------- | ---------- | --------------------------- |
| Docker  | Latest     | CLI-only container (Ubuntu) |
| Node.js | 20.14.0    | Installed via asdf          |
| pnpm    | 10.12.1    | Global package manager      |
| serve   | 14.2.4     | Lightweight dev server      |
| Bash    | GNU        | Terminal-only workflow      |
| nano    | Ubuntu pkg | CLI text editor             |
| VS Code | Local      | Used only for preview phase |

---

## 🧠 Reflections & Learnings

* Learned to work 100% without graphical tools
* Mastered basic Bash file manipulation and navigation
* Set up secure GitHub authentication via SSH
* Deployed static pages from GitHub using GitHub Pages
* Reinforced the value of understanding what happens *behind* the IDE

---

## 📂 License

This repository is public and built for educational purposes and personal growth. Feel free to fork or reuse.

---

> ✨ Made by [@mspgosende](https://github.com/mspgosende)

