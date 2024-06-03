'use strict'
class Vehicule {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    afficherDetails() {
        console.log(this.marque, this.modele, this.annee)
    }
}

class Voiture extends Vehicule {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
    }
    afficherCouleurs() {
        console.log(this.couleur);
        this.afficherDetails();
    }
}

let voitureUne = new Voiture('Toyota', '305', '2016', 'verte')

voitureUne.afficherCouleurs();