# MontBlanc Ticket

Ici le projet de fin d'année de 6 wilders fan de ticketing (:

## Context

Nous avons pour mission de créer un outil de gestion de projet.

## Technos

Tout le projet est en Typescript

### Backend

- Base de donnée = MySQL
- Server = Apollo
- ORM = Prisma
- API = GraphQL

### Frontend

- ReactTS
- Tailwind

## Gestion de projet en mono-repo

### Introduction

La première chose à savoir est qu'il n'est plus question de npm. N'utilisez que yarn dans ce repo.
Le principe du mono-repo repose sur les "workspace" de yarn.
(https://classic.yarnpkg.com/lang/en/docs/workspaces/)

Vous remarquerez que la structure du dossier est différente de d'habitude, c'est comme si on avais initialiser un projet "root" qui contient notre back et notre front.

Dans ce dossier "root" nous avons:

- un dossier node-modules (qui reunis toutes les libraires du back et du front),
- un fichier package.json (qui nous permettra de tout run en même temps),
- nos deux dossier server et client,
- des fichiers additionel que je n'ai pas besoin de présenter (yarn.lock, .gitignore, README.md, ...)

### Installer des packages

Si vous souhaitez installer des packages utilisez cette commande :

"yarn workspace <nom du workspace> add <nom du package>"

Exemple je veux installer nodemon dans mon dossier server je me place au niveau root et je tape:

"yarn workspace server add nodemon"

Les nom des workspace sont trouvable dans le package.json "root".

Si vous souhaitez supprimer des package, même commande avec "remove"
Exemple:

"yarn workspace client remove react"

### Run son code

Pour run tout le projet rien de plus simple, au niveau root du projet tapez "yarn start"

Si vous souhaitez run que le server ou que le client, deux solution:

soit au niveau root:
"yarn workspace server start"

soit au niveau de votre dossier:
"yarn start"

### Pour la suite

Note à l'attention de tout le monde:

Si vous souhaitez mieux comprendre comment le mono-repo fonctionne je vous invite à aller voir cette vidéo -> https://youtu.be/ACDGXHR_YmI (7min et c'est très clair)

Note à l'attention des future travailleur du backend:

Actuellement le dossier server est composé du strict minimum, un server express y à été initialiser afin de tester le bon fonctionnement du mono-repo. Les librairies installer sont donc express et nodemon, rien de plus. Je vous invite donc à désinstaller express avec les commande décrite au dessus, puis à supprimer le fichier index.js car comme son nom l'indique, il est en JS. Vous n'aurez ensuite que le strict minimum, un dossier node-modules, un fichier package.json (que je vous invite également à aller modifier, notamenent le script "start") et c'est tout !

Happy Hacking :)
