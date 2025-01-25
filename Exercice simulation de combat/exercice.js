const originalLog = console.log;
console.log = function (message) {
  originalLog(message);
  const logDiv = document.getElementById("log");
  if (logDiv) {
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = message;
    logDiv.appendChild(entry);
  }
};

class Guerrier {
    constructor(nom, attack, defense, precision) {
      this.nom = nom;
      this.attack = attack;
      this.defense = defense;
      this.precision = precision;
      this.pointsDeVie = 30;
    }

    getAttack() {
      return this.attack;
    }

    attaquer(adversaire) {
      const chance = Math.random();
      if (chance < this.precision) {
        const degats = this.attack - adversaire.defense;
        adversaire.pointsDeVie -= degats > 0 ? degats : 0;
        console.log(`${this.nom} attaque ${adversaire.nom} et inflige ${degats} points de degats`);
      } else {
        console.log(`${this.nom} rate son attaque contre ${adversaire.nom}`);
      }
    }

    estEnVie() {
      return this.pointsDeVie > 0;
    }
  }
  
  const guerrier1 = new Guerrier("Link", 18, 5, 0.5);
  const guerrier2 = new Guerrier("Ganon", 10, 7, 0.8); 
  

  console.log(`Commencement du combat entre ${guerrier1.nom} et ${guerrier2.nom}`);
  while (guerrier1.estEnVie() && guerrier2.estEnVie()) {
    guerrier1.attaquer(guerrier2);
    if (!guerrier2.estEnVie()) {
      console.log(`le vainqueur est ${guerrier1.nom}`);
      break;
    }
  
    guerrier2.attaquer(guerrier1);
    if (!guerrier1.estEnVie()) {
      console.log(`le vainqueur est ${guerrier2.nom}`);
      break;
    }
  
    console.log(`-> Points de vie : ${guerrier1.nom} (${guerrier1.pointsDeVie} PV) | ${guerrier2.nom} (${guerrier2.pointsDeVie} PV)`);
  }
  console.log("Combat terminer");
