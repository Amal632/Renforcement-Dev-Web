# Suivi J1 — Cap Web

Note ton avancée après chaque TP. Reste factuel, sans données personnelles. Ce fichier te sert pour la capsule et le bilan.

## TP00 — Diagnostic

- Hypothèse : Le HTML, le CSS et le JavaScript contiennent plusieurs erreurs ou éléments incomplets qui peuvent provoquer des problèmes de structure, de mise en page et de fonctionnement des fonctions JavaScript.

- Action : J’ai corrigé les trois fichiers. En HTML, j’ai vérifié la structure avec main, le titre principal, les titres de section, les étiquettes associées aux champs et le bouton du formulaire. En CSS, j’ai corrigé la gestion des boîtes avec box-sizing: border-box, remplacé les largeurs fixes par des largeurs souples et adapté la page aux petits écrans. En JavaScript, j’ai complété estValide() et extraireActifs() conformément aux consignes, puis j’ai testé les fonctions avec Node.js.

- Résultat : La page s’affiche correctement, les champs et les textes restent lisibles sur une petite largeur d’environ 360 px et le JavaScript retourne les résultats attendus lors des tests avec Node.js.

- Point non compris : Je comprends maintenant que le CSS n’a pas besoin d’être compilé et que le JavaScript peut être testé avec Node.js. Je n’ai pas de point particulier qui reste incompris. Je n’ai jamais fait du JS donc j’apprends toujours ce langage de programmation.


## TP01 — Démarrer

- Hypothèse : Si le serveur est en cours d'exécution mais que le JavaScript ne se charge pas, la page HTML devrait tout de même s'afficher, mais l'état géré par le JavaScript ne devrait pas apparaître.
- Action : J'ai vérifié la version de Node à l'aide de la commande `node --version`, puis je me suis rendu dans le dossier `atelier` et j'ai lancé `npm start`. Une première tentative a indiqué que le port 3000 était déjà utilisé. J'ai ensuite relancé le serveur depuis le dossier `atelier` et vérifié la page dans le navigateur.
- Résultat : La version de Node est la v24.21.0. Le serveur fonctionne et la page est accessible à l'adresse http://127.0.0.1:3000. Le navigateur affiche « Cap Web » ainsi que le statut « The server is running. Today, we are building our interface. ». L'erreur `EADDRINUSE` était due au fait que le port 3000 était déjà utilisé.
- Points à éclaircir : Aucun.

## TP02 — HTML

- Hypothèse : Si je remplace `main` par `div`, le rendu visuel devrait rester quasi identique avec le CSS actuel, mais la structure sémantique et les marqueurs d'accessibilité seraient modifiés.
- Action : J'ai ajouté un `header` contenant le `h1`, une `section` avec un `h2` intitulé « Discussion », une liste vide pour les messages, le paragraphe d'état et un `footer` contenant la version.
- Résultat : La page s'affiche correctement avec la nouvelle structure HTML. Le titre « Cap Web », le titre « Discussion », l'état et la version sont visibles.
- Point non compris : Aucun.

## TP03 — Formulaire

- Hypothèse : Dans un champ de texte multiligne (`textarea`), la touche Entrée crée un saut de ligne au lieu de soumettre directement le formulaire.
- Action : J'ai ajouté le formulaire comprenant une étiquette, une zone de texte limitée à 280 caractères et un bouton de soumission. J'ai également copié le code JavaScript fourni dans `atelier/public/js/app.js`.
- Résultat : Le formulaire fonctionne. Je peux saisir un message, utiliser la touche Entrée pour créer une nouvelle ligne, puis naviguer avec la touche Tabulation et valider le bouton de soumission avec la touche Entrée. Le statut affiche « Interface prête ; les réponses arrivent sur J2 ».
- Points à éclaircir : Aucun.

## TP04 — Responsive

Que se passe-t-il si un mot de 60 lettres se retrouve dans un conteneur étroit, sans règles de césure ?
- Prédiction : un mot très long ne contenant aucun espace risque de dépasser la largeur du conteneur et de provoquer un débordement horizontal de la page.


- Hypothèse : Un mot très long sans espaces pourrait dépasser la largeur d'un conteneur étroit et provoquer un défilement horizontal en l'absence de règle de césure.

- Action : J'ai appliqué `box-sizing: border-box` à tous les éléments, rendu flexibles les sections d'en-tête, de contenu principal et de pied de page (largeur de 100 % avec un maximum de 760 px), supprimé la marge du `body`, ajouté des espacements ainsi qu'un état de focus visible, et disposé le formulaire en colonne à l'aide de Flexbox. J'ai temporairement ajouté deux mots très longs à la liste pour tester le comportement en cas de débordement.

- Résultat : Les mots très longs restent dans les limites de la largeur de la page grâce à `overflow-wrap: anywhere`. Le formulaire reste lisible ; le champ de saisie et le bouton demeurent entièrement visibles. Après le test, j'ai retiré les éléments temporaires pour rétablir la liste vide.

- Problèmes/Remarques (tests à 360 px / 1280 px) : Aucun. La page a été vérifiée aux résolutions de 360 ​​px et 1280 px : aucun défilement horizontal, le champ de saisie était entièrement visible, le bouton était visible et le texte restait lisible.

## TP05 — Revue

* Hypothèse : Passer en revue les exercices terminés me permet de vérifier la cohérence des modifications apportées et d'identifier les points à revoir demain.

* Action : J'ai passé en revue les exercices terminés et vérifié l'état final du fichier `atelier/public/index.html`. J'ai également mis à jour le journal de suivi en y consignant les hypothèses, les actions, les résultats et les points restés flous. J'ai vérifié les commandes Git utilisées ainsi que l'état local du projet.

* Résultat : Les exercices fonctionnent comme prévu. La page présente une structure HTML accessible, un formulaire contenant une zone de texte (*textarea*) et un bouton, ainsi que les styles adaptatifs (*responsive*) issus du TP04. Les tests effectués aux résolutions de 360px et 1280px n'ont pas provoqué de défilement horizontal. Le formulaire et le bouton restent visibles et utilisables.

* Points flous : Aucun point bloquant pour le moment.

### Commandes testées

* Depuis le répertoire `atelier/` :

* `npm start` — lance le serveur local à l'adresse `http://127.0.0.1:3000/`.
* `git status` — vérifie l'état des fichiers.
* `git add public/index.html public/styles.css ../suivi.md` — prépare (*stage*) les fichiers du TP04 pour le commit.
* `git commit -m "TP04 - responsive"` — crée le commit pour le TP04.
* `git push` — envoie le commit vers la branche personnelle `travail/Amal632/j1`.

* Erreur rencontrée précédemment : `EADDRINUSE` lors du lancement du serveur alors que le port 3000 était déjà utilisé. Le serveur a fonctionné correctement par la suite.

### Auto-évaluation

* Affichage : le rendu de la page est correct.
* À 360px : pas de défilement horizontal ; le champ de saisie et le bouton restent entièrement visibles, et le texte demeure lisible.
* À 1280px : la page reste centrée et lisible. * Navigation au clavier : la zone de texte permet d'utiliser la touche Entrée pour créer une nouvelle ligne ; le bouton est accessible via la touche Tabulation et peut être activé avec la touche Entrée.
* Sujets à revoir issus du module de cours : approfondir la compréhension de Flexbox, de `box-sizing` et des règles de conception adaptative (*responsive design*) appliquées lors du TP04. ### Prévision

Je prévois que le TP03 nécessitera le plus de retouches demain, notamment en ce qui concerne les fonctionnalités du formulaire et le code JavaScript.

### Points à vérifier

Je passerai en revue les modules du cours demain et vérifierai les concepts que je ne maîtrise pas encore tout à fait, en particulier la logique JavaScript du formulaire et les règles CSS pour le responsive design.


## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```


## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
