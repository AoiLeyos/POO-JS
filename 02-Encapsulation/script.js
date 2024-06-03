'use strict'
class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;

    constructor(marque, modele, annee, couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }
    afficherDetails() {
        console.log(this.#marque, this.#modele, this.#annee, this.#couleur)
    }
    get marque() {
        return this.#marque;
    }

    get modele() {
        return this.#modele;
    }

    get annee() {
        return this.#annee;
    }

    get couleur() {
        return this.#couleur;
    }


    set marque(nouvelleMarque) {
        this.#marque = nouvelleMarque;
    }

    set modele(nouveauModele) {
        this.#modele = nouveauModele;
    }

    set annee(nouvelleAnnee) {
        this.#annee = nouvelleAnnee;
    }

    set couleur(nouvelleCouleur) {
        this.#couleur = nouvelleCouleur;
    }
}

let voitureUne = new Voiture('Toyota', '305', '2016', 'verte')

voitureUne.afficherDetails()