'use strict'
class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails() {
        console.log(this.marque, this.modele, this.annee, this.couleur)
    }
}

let voitureUne = new Voiture('Toyota', '305', '2016', 'verte')

voitureUne.afficherDetails()