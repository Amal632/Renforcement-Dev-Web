
// Diagnostic d'entrée — Inscription à un atelier.

// Complétez les deux fonctions. Fichier testé séparément avec Node.

// Ne pas ajouter d'import : gardez de simples export function.

export function estValide(texte) {
  if (typeof texte !== "string") {
    return false;
  }

  const texteTrimme = texte.trim();

  return texteTrimme.length >= 3 && texteTrimme.length <= 40;
}

export function extraireActifs(elements) {
  if (!Array.isArray(elements)) {
    return [];
  }

  return elements
    .filter(
      element =>
        element &&
        element.active === true &&
        typeof element.name === "string" &&
        element.name.trim() !== ""
    )
    .map(element => element.name.trim());
}
