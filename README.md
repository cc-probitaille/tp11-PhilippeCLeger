[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mfgz7p4a)

# typescript-tdd-kata

Ce dépôt est une base pour faire des kata TDD (Test Driven Development) en TypeScript avec Jest comme moteur de test.

`./src/helloworld.ts` et `./src/hello.ts` sont des exemples d'applications en TypeScript.

`./src/__tests__/helloworld.test.ts` et `./src/__tests__/hello.test.ts` sont des exemples de tests simples.

Après avoir fait un clone de ce dépôt:

- `npm install` pour installer les dépendances.
- `npm test` pour lancer Jest en mode d'exécution automatique de test (lors d'une modification de fichiers).

# Utilisation

Il faut d'abord installer les dépendances: `npm i`

> Note: il est attendu que le script main.ts soit directement exécuté à l'aide de ts-node.

Ensuite, avant d'exécuter le script main.ts, il faut définir la variable d'environnement NOM_CLASSE

## Exemple d'utilisation Windows:

```
$Env:NOM_CLASSE = "MaClasseDynamique"
npm run start
```

## Exemple d'utilisation linux

```
export NOM_CLASSE="MaClasseDynamique"
npm run start
```
