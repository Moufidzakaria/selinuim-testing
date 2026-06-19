
Selenium Automation Testing Project 🚀

📌 Description Ce projet contient des scripts d’automatisation de tests et de web scraping utilisant Selenium WebDriver avec Node.js. Il inclut :
Le scraping complet de livres depuis un site web.
Des tests de authentification (login) automatisés.
La capture automatique de captures d'écran (screenshots).
L'export des données extraites au format JSON.

🛠️ Technologies utilisées
Node.js (v20+)
Selenium WebDriver
ChromeDriver (Headless mode en CI/CD)
JavaScript (ES6)

📂 Structure du projet
project/
│── .github/workflows/
│   └── selenium-test.yml   # Configuration CI/CD GitHub Actions
│── azure-pipelines.yml     # Configuration CI/CD Azure Pipelines 🆕
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
```bash
git clone [https://github.com/Moufidzakaria/selinuim-testing.git](https://github.com/Moufidzakaria/selinuim-testing.git)
cd selinuim-testing
Installer les dépendances

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
Le projet prend en charge deux plateformes d'intégration continue afin d'exécuter automatiquement les tests à chaque modification du code :

GitHub Actions (.github/workflows/selenium-test.yml)

Déclenchement automatique sur les évènements push et pull_request sur la branche main.

Planification (cron) : Exécution quotidienne automatique à minuit UTC.

Stockage des fichiers générés (books.json et .png) directement dans les artefacts de build de GitHub.

Azure Pipelines (azure-pipelines.yml) 🆕

Déclenchement automatique lié à votre dépôt GitHub lors des push et pr sur main.

Planification (schedules.cron) : Run quotidien à minuit UTC.

Publication des rapports et captures sous forme d'artefacts d'Azure DevOps via la tâche PublishPipelineArtifact@1.

📋 Fonctionnalités Communes des Pipelines :

Mode Headless : Chrome s'exécute de façon invisible (--headless=new) sur des agents distants ubuntu-latest.

Isolation : Installation à la volée de Node.js (v20) et de ses dépendances dans un environnement propre.

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


---

### 2. Commandes Git pour envoyer les modifications sur GitHub

Exécutez ces commandes les unes après les autres dans votre terminal pour pousser le fichier `README.md` mis à jour :

```bash
git add README.md
git commit -m "docs: ajouter la section Azure Pipelines au fichier README"
git push origin main
