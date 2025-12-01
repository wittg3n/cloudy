<div align="center">
   <img align="center" width="128px" src="https://github.com/wittg3n/cloudy/blob/master/src-tauri/icons/128x128%402x.png" />
   <h1 align="center"><b> Cloudy |  Effortlessly Change Your DNS 🚀</b></h1>
   <h2 align="center">
</div>
<br />

![cloudy_clientt](https://github.com/wittg3n/cloudy/blob/master/public/cloudy.jpg)

[![Tauri][s0]][l0] [![Next.js][s1]][l1] [![Rust][s2]][l2] [![TypeScript][s3]][l3] [![JavaScript][s4]][l4] [![Tailwind CSS][s5]][l5]

[s0]: https://img.shields.io/badge/Tauri-v2-ffc131?logo=Tauri&logoColor=black
[l0]: https://tauri.app/
[s1]: https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white
[l1]: https://nextjs.org/
[s2]: https://img.shields.io/badge/Rust-%23000000.svg?logo=rust&logoColor=white
[l2]: https://www.rust-lang.org/
[s3]: https://img.shields.io/badge/TypeScript-%23007ACC.svg?logo=typescript&logoColor=white
[l3]: https://www.typescriptlang.org/
[s4]: https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black
[l4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[s5]: https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white
[l5]: https://tailwindcss.com/

Welcome to **Cloudy**, the ultimate DNS management app built with **Tauri v2** and **Next.js**! 🌐 Whether you're optimizing internet speed, enhancing privacy, or just exploring alternative DNS providers, Cloudy makes managing DNS settings easy and efficient.

This lightweight app allows you to seamlessly switch between trusted DNS providers like **Google DNS**, **Cloudflare**, **OpenDNS**, and many more. Ready to turbocharge your browsing experience? Let’s dive in! 💻✨

---

## 🌟 Why Choose Cloudy for DNS Management?

- 🚀 **Effortless DNS Switching:** Change DNS settings in just a few clicks.
- 🔒 **Enhanced Privacy & Speed:** Choose from a curated list of reliable DNS servers.
- ⚡ **Lightweight & Fast:** Built with Tauri v2 for optimal performance.
- 🎨 **Beautiful Interface:** Modern design powered by **Next.js** and **Tailwind CSS**.

---

## 📋 Key Features

- **DNS List with Trusted Providers:**  
  Select from popular DNS providers, including:

  - **Google DNS:** 8.8.8.8, 8.8.4.4
  - **Cloudflare DNS:** 1.1.1.1, 1.0.0.1
  - **AdGuard DNS:** 94.140.14.14, 94.140.15.15
  - And more.

- **Open Source:** Fully transparent and customizable.

---

## 📂 Project Structure

Cloudy’s modular structure makes it beginner-friendly and highly maintainable:

```plaintext
cloudy
  ├── app
  │   ├── favicon.ico
  │   ├── globals.css
  │   ├── layout.tsx
  │   ├── page.tsx
  ├── components
  │   ├── Footer.tsx
  │   ├── Form.tsx
  │   ├── Spinner.tsx
  │   ├── TopBar.tsx
  ├── hooks
  │   ├── use-current-DNS.ts
  │   ├── use-toast.ts
  ├── lib
  │   ├── dnsMap.ts
  │   ├── fonts.ts
  │   ├── utils.ts
  ├── node_modules
  ├── out
  ├── public
  │   ├── fonts
  │   ├── loading.gif
  │   ├── logo.svg
  ├── src-tauri
  │   ├── capabilities
  │   ├── gen
  │   ├── icons
  │   ├── src
  │   │   ├── lib.rs
  │   │   └── main.rs
  │   ├── target
  │   ├── .gitignore
  │   ├── 2
  │   ├── build.rs
  │   ├── Cargo.lock
  │   ├── Cargo.toml
  │   └──tauri.conf.json
  ├── .eslintrc.json
  ├── components.json
  ├── next-env.d.ts
  ├── next.config.mjs
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.mjs
  ├── README.md
  ├── tailwind.config.ts
  └── tsconfig.json

```

---

## 🚀 Installation Guide (for Developement 🔧)

### Step 1: Install Dependencies

Before we get started, make sure you have these installed on your machine:

#### 1.1 Node.js

Cloudy uses **Node.js** for the frontend (Next.js), so you’ll need to install it if you haven’t already.

- Go to the [Node.js](https://nodejs.org/en) website and download the latest stable version.
- Install Node.js by following the instructions for your OS.

#### 1.2 Rust

Cloudy uses **Rust** via Tauri to build a native desktop app. You can install Rust by running the following command:

bash

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

Follow the prompts to complete the installation.

If you encounter any issues, watch this on [Youtube](https://www.youtube.com/watch?v=p-HfqVNPPX0&ab_channel=WillVelida).

#### 1.3 Tauri v2

Now, let’s install **Tauri v2**. This is the core framework that enables the desktop capabilities of Cloudy.

bash

`cargo install tauri-cli`

This will install the latest version of Tauri CLI.

### Step 2: Clone the Cloudy Repo

Clone the Cloudy repository to your local machine:

bash

`git clone https://github.com/yourusername/cloudy.git cd cloudy`

### Step 3: Install Node.js Dependencies

Run the following command to install all the Node.js dependencies for the frontend (Next.js):

bash

`npm install`

### Step 4: Build the Tauri App

Next, let’s build the Tauri app:

bash

`npm run tauri dev`

This will start the app in development mode. You should now see Cloudy up and running! 🚀

## ⚙️ How Cloudy Works

Cloudy makes changing your DNS easy! Here’s how it works:

1.  **User Interface:** A simple form lets you select a DNS from the list.
2.  **Tauri Backend:** Cloudy communicates with Tauri to change your system’s DNS settings.
3.  **DNS List:** Cloudy uses the following DNS servers for users to choose from:

- **Radar:** 10.202.10.10, 10.202.10.11
- **Electro:** 78.157.42.100, 78.157.42.101
- **Shecan:** 178.22.122.100, 185.51.200.2
- **Yandex:** 77.88.8.8, 77.88.8.1
- **Google:** 8.8.8.8, 8.8.4.4
- **Cloudflare:** 1.1.1.1, 1.0.0.1
- **OpenDNS:** 208.67.222.222, 208.67.220.220
- **Quad9:** 9.9.9.9, 149.112.112.112
- **CleanBrowsing:** 185.228.168.168, 185.228.169.168
- **AdGuard:** 94.140.14.14, 94.140.15.15
- **DNSWatch:** 84.200.69.80, 84.200.70.40
- **Comodo:** 8.26.56.26, 8.20.247.20
- **Verisign:** 64.6.64.6, 64.6.65.6

## 🤖 Contributing

We welcome contributions! Feel free to submit issues, suggestions, or pull requests to improve Cloudy.

## 📜 License

Cloudy is open-source and available under the MIT License.
