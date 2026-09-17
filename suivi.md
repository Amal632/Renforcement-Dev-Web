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


## Commandes essayées

Note chaque commande avec son dossier de lancement et son résultat exact. Exemple d'état local, depuis la racine étudiante :

```sh
# depuis RACINE_ETUDIANT
git status
git diff
```

Mes essais :

- Dossier :
- Commande et résultat :
- Problème exact si blocage :

Si Node ou Git bloque, note le message exact et continue en local sans attendre. Le double-clic sur `diagnostic/index.html` ne remplace pas le serveur pour les modules et l'envoi du TP03.

## Auto-revue finale

- Ce qui s'affiche bien :
- Ce qui reste fragile au clavier ou à 360 px :
- Ce que je veux revoir en capsule :

## Rappel Git prudent

Git reste optionnel le matin. Vérifie l'état local, ne valide que des fichiers nommés un par un et seulement si Git est configuré. Reste en local ou en ZIP sauf si le formateur précise le circuit avec fork personnel. Aucune invitation ni demande de fusion requise le matin.

## Liens

- [README](README.md)
- [TP00](tp/00-diagnostic.md)
- [TP05](tp/05-bilan.md)
- [Aide-mémoire](ressources/aide-memoire.md)
