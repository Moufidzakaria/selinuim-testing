Bash


cat << 'EOF' > README.md
# Selenium Automation Testing Project 🚀

📌 Description
Ce projet contient des scripts d’automatisation de tests et de web scraping utilisant **Selenium WebDriver** avec **Node.js**. Il inclut :
* Le scraping complet de livres depuis un site web.
* Des tests de authentification (login) automatisés.
* La capture automatique de captures d'écran (screenshots).
* L'export des données extraites au format JSON.

---

## 🛠️ Technologies utilisées
* **Node.js** (v20+)
* **Selenium WebDriver**
* **ChromeDriver** (Headless mode en CI/CD)
* **JavaScript (ES6)**

---

## 📂 Structure du projet
```text
project/
│── .github/workflows/
│   └── selenium-test.yml   # Configuration CI/CD GitHub Actions
│── selnuim.js              # Script de test Login & Screenshots
│── bokkscraping.js         # Script de scraping de livres (Headless compatible)
│── fromscrenshot.js        # Script utilitaire de capture d'écran
│── books.json              # Données extraites (généré après exécution)
│── login_success.png       # Capture d'écran suite à un login réussi
│── login_invalid_username.png
│── package.json
└── README.md
🚀 Installation & Usage
1. Cloner le projet
Bash


git clone [https://github.com/Moufidzakaria/selinuim-testing.git](https://github.com/Moufidzakaria/selinuim-testing.git)
cd selinuim-testing
2. Installer les dépendances
Bash


npm install
▶️ Exécution des tests (En local)
📚 Scraping des livres
Bash


node bokkscraping.js
Résultat : Génération automatique du fichier books.json.

🔐 Test de login (Herokuapp)
Bash


node selnuim.js
Résultat : Création des captures d'écran login_success.png et login_invalid_username.png.

⚙️ Intégration Continue (CI/CD)
Le projet intègre un pipeline GitHub Actions afin d'exécuter automatiquement l'ensemble des scripts de test et de scraping à chaque interaction avec le dépôt.

📋 Fonctionnalités du Pipeline :
Déclencheurs automatiques : S'exécute à chaque push ou pull_request sur la branche main, ainsi que via un cron tous les jours à minuit.

Mode Headless : Chrome s'exécute en mode invisible (--headless=new) sur les serveurs distants d'Ubuntu.

Gestion des Artifacts : Les rapports générés (books.json) et les captures d'écran (*.png) sont automatiquement sauvegardés et téléchargeables directement depuis l'interface GitHub Actions à la fin de chaque build.

Pour suivre l'exécution, rendez-vous simplement dans l'onglet Actions de votre dépôt GitHub.

⚙️ Détails des fonctionnalités
📌 Scraping
Navigation automatique et gestion de la pagination (Suivant ➡️).

Extraction : Titre, prix, état du stock, note (rating).

Structuration et sauvegarde propre en JSON.

📌 Test Login
Remplissage dynamique des formulaires.

Validation des messages d’erreur et de succès de la plateforme.

Capture automatique des états du navigateur avant déconnexion.

🧠 Bonnes pratiques incluses
Waits explicites (until) : Pour éviter les tests instables (flaky tests) liés au temps de chargement.

Gestion des erreurs (try/catch/finally) : Capture des exceptions et isolation des pannes.

Fermeture propre (driver.quit()) : Libération systématique de la mémoire vive et des instances de Chrome.

📈 Améliorations futures
🔄 Migration vers Playwright ou Cypress pour une exécution encore plus rapide.

📊 Génération de rapports graphiques avancés avec Allure Report.

🏗️ Refactoring du code sous l'architecture Page Object Model (POM).

⚡ Exécution des tests en parallèle.

👨‍💻 Auteur
Projet réalisé avec passion par Zakaria 🇲🇦

Objectif : Devenir QA Automation Engineer de haut niveau ! 🚀

⭐ Note
Si ce projet vous a aidé ou vous inspire, n'hésitez pas à laisser une ⭐ sur GitHub et à Fork le repository !
EOF

Commandes Git pour envoyer le README mis à jour sur GitHub
git add README.md
git commit -m "docs: ajouter les sections CI/CD au fichier README"
git push origin main
