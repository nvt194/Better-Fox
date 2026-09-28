# 🦊 Better-Fox
> An up-to-date, tweaked `user.js` configuration to immensely speed up and secure your Mozilla Firefox browsing experience.

This is a personal fork of **@yokoffing/Betterfox**, optimized to maintain a single-file setup for seamless deployment and set-and-forget usability.

---

## 🎯 Core Goals

*   **Minimalism:** Strip away unnecessary bloat, components, and telemetry that clutter the browser.
*   **Efficiency:** Unleash Firefox's full engine potential to achieve blazing-fast speeds.
*   **Security:** Enforce practical privacy and security baselines without causing web page breakage.

---

## ⚙️ Configuration Breakdown

| Feature Pack | Main Objective |
| :--- | :--- |
| **⚡ Fastfox** | Immensely increases Firefox's rendering, connection, and browsing speed. |
| **🛡️ SecureFox** | Removes Telemetry, Mozilla experiments, Google Safe Browsing, and URL bar suggestions. Auto-upgrades to HTTPS. |
| **🧹 PeskyFox** | Unclutters the new tab page, removes Pocket/form autofill, and blocks annoying website notifications. |
| **📄 user.js** | Merges all essential preferences into a single, cohesive file for easy download. |

---

## 🔍 What's Different in This Fork?

Unlike the upstream repository which frequently balances different experimental configurations across multiple branches before merging, this repository prioritizes keeping everything consolidated into a **single, unified `user.js` file**. It is ready to deploy immediately without making you jump through developmental hoops.

---

## 👤 Who Is This Setup For?

**If you want a secure, blazing-fast browsing experience without dealing with broken web elements, this setup is for you.** 

The overriding principle here is: *"If it breaks it, it doesn't make it!"* Advanced and disruptive privacy configurations (like `privacy.resistFingerprinting`, WebGL disabling, or DRM blocks) are left untouched so that mainstream streaming apps (Netflix, YouTube), web games, and enterprise sites work flawlessly out of the box. It is smooth enough for daily use by anyone.

---

## ⚠️ Important Assumptions & Recommendations

To maintain its "less-is-more" approach, this configuration makes a few baseline assumptions about your setup:
*   **Google Safe Browsing is removed:** If you do not have native OS-level protection or hardware firewalls, review the code to comment out this section.
*   **Native Password Manager is disabled:** It is highly recommended to transition to dedicated solutions like **Bitwarden** or **1Password**.
*   **Content Blocking:** You should pair this file with extensions like **uBlock Origin** and use network-level protections like **NextDNS**.
*   *Note: If your threat model demands absolute anonymity rather than practical privacy, please use the **Tor Browser** instead.*

---

## 🚀 Installation Guide

### Manual Setup (Recommended)
1. Download the `user.js` file from this repository to your local machine.
2. Launch Firefox, type `about:support` in the URL search bar, and hit **Enter**.
3. Locate the **Profile Folder** row and click the **Open Folder** button next to it.
4. Drop your downloaded `user.js` file directly into this folder.
5. **Restart** Firefox for the speed and security tweaks to take effect.

---

## 📖 Wiki & Credits
*   For deep structural documentation, read through the upstream [Betterfox Wiki](https://github.com).
*   All core credits go out to the original author [@yokoffing](https://github.com) and its wonderful community contributors.

---

## 📄 License
This project is open-sourced software licensed under the [MIT License](LICENSE).
