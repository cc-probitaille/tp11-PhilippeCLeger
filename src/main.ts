/**
 * Il faut d'abord définir la variable d'environnement NOM_CLASSE
 *
 * Exemple d'utilisation Windows:
 * $Env:NOM_CLASSE = "MaClasseDynamique"
 * npm run start
 *
 * Exemple d'utilisation linux
 * export NOM_CLASSE="MaClasseDynamique"
 * npm run start
 */

import { creerClasseDynamique } from "./CreateurClasse";

const nomClasse = process.env.NOM_CLASSE as string;

if (!nomClasse)
  console.error(
    "Veuillez spécifier le nom de la class à construire dans la variable d'environnement NOM_CLASSE"
  );
else {
  const ClasseDynamique = creerClasseDynamique(nomClasse);

  const instance = new ClasseDynamique();

  console.info(
    `Une instance de la classe dynamique ${nomClasse} a été créée: ${JSON.stringify(
      instance
    )}`
  );
  if (instance instanceof ClasseDynamique)
    console.info(
      `L'instance est bien une instance de la class dynamique ${nomClasse}`
    );
  else
    console.error(
      `L'instance n'est pas une instance de la class dynamique ${nomClasse}`
    );
}
