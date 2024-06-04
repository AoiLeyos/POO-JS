'use strict'
class Animal {
    FaireDuBruit() {
        console.log("Un animal fait un bruit.")
    }
}

class Chien extends Animal {
    FaireDuBruit() {
        console.log("Le chien aboie.");
    }
}

class Chat extends Animal {
    FaireDuBruit() {
        console.log("Le chat miaule.");
    }
}

const animal = new Animal();
const chien = new Chien();
const chat = new Chat();

animal.FaireDuBruit();
chien.FaireDuBruit();
chat.FaireDuBruit();