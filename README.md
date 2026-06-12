# Selenium Automation Testing Project 🚀

## 📌 Description

Ce projet contient des scripts d’automatisation de tests utilisant **Selenium WebDriver avec Node.js**.
Il inclut :

* Scraping de livres depuis un site web
* Test de login automatisé
* Capture de screenshots
* Export des données en JSON

---

## 🛠️ Technologies utilisées

* Node.js
* Selenium WebDriver
* ChromeDriver
* JavaScript (ES6)
* File System (fs)

---

## 📂 Structure du projet

```
project/
│── selnuim.js
│── bokkscraping.js
│── fromscrenshot.js
│── books.json
│── login_success.png
│── login_invalid_username.png
│── package.json
│── node_modules/
```

---

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Moufidzakaria/selinuim-testing.git
cd selinuim-testing
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Installer Selenium WebDriver

```bash
npm install selenium-webdriver
```

---

## ▶️ Exécution des tests

### 📚 Scraping des livres

```bash
node bokkscraping.js
```

📄 Résultat : fichier `books.json`

---

### 🔐 Test login (Herokuapp)

```bash
node selnuim.js
```

📸 Résultat :

* Screenshot login success : `login_success.png`
* Screenshot login failed : `login_invalid_username.png`

---

## ⚙️ Fonctionnalités

### 📌 Scraping

* Navigation automatique sur plusieurs pages
* Extraction : titre, prix, stock, rating
* Sauvegarde en JSON

### 📌 Test Login

* Remplissage automatique du formulaire
* Validation des messages d’erreur/succès
* Capture automatique de screenshots
* Logout automatique

---

## 🧠 Bonnes pratiques incluses

* Waits explicites (`until`)
* Gestion des erreurs (`try/catch`)
* Fermeture propre du browser (`driver.quit`)
* Séparation logique des tests

---

## 📈 Améliorations futures

* Intégration Playwright (plus rapide)
* CI/CD avec GitHub Actions
* Reports avec Allure
* Architecture Page Object Model (POM)
* Tests parallèles

---

## 👨‍💻 Auteur

Projet réalisé par **Zakaria** 🇲🇦
Objectif : devenir QA Automation Engineer 🚀

---

## ⭐ Note

Si tu utilises ce projet :

* Ajoute une ⭐ sur GitHub
* Fork le repo
