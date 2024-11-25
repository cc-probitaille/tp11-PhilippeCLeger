/**
 * Crée une classe dont le nom est a la valeur fournie en argument.
 *
 * @param nomClasse Nom de la classe.
 */
export function creerClasseDynamique(nomClasse: string) {
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class
  const NouvelleClasse = class {
    constructor() {}
  };

  // On assigne séparément la propriété "name" de la class afin d'éviter de devoir utiliser la fonction eval(...).
  // En effet, celle-ci représente un risque important de sécurité, similairement à l'injection SQL.
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  Object.defineProperty(NouvelleClasse, "name", { value: nomClasse });
  return NouvelleClasse;
}
