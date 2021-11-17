// const voiture = {
//     marque : 'Ford',
//     annee : 2009,
//     couleur : 'Blanche',
//     rouler (){
//         console.log(this.annee);
//     }
// }
// //hasOnProperty = est ce qu'elle à cette propriété ?
// //Methode objets avec 'values' pour les valeurs ( mettre key pour les nom des valeurs) on passe l'argument voiture pour avoir un tableau avec tout nos propriété
// console.log(Object.values(voiture));

// class voiture{

// constructor(marque,annee,option){
//     this.marque = marque;
//     this.annee = annee;
//     this.option = option;
// }
// //Rajout d'option
// rajoutOption(nomOption){
//     this.option++;
//     console.log(`Rajout de ${nomOption}, nombre d'option : ${this.option}`);
//     return this;
// }

// //Methode dans la class Voiture
// dateSortie(){
//     console.log(`Date de sortie de notre voiture ${this.annee}`);
// }

// }

// const voiture1 = new voiture('Ford', 2009, 0);
// const voiture2 = new voiture('Toyota', 2012);
// const voiture3 = new voiture('Peugeot' , 2010);
// console.log(voiture1, voiture2, voiture3);

// voiture2.dateSortie();
// voiture1.dateSortie();
// voiture3.dateSortie();

// console.log(voiture1);
// voiture1
// .rajoutOption('2 portes')
// .rajoutOption('Peinture')
// .rajoutOption('Climatisation')
// .rajoutOption('Feu automatique')

// // extends permer de recuperer les meme propriété que la class voiture plutot que de tout réécrire.
// class Moto extends voiture{

//     assurance(){
//         console.log("Vous avez pris une assurance");
//     }
// }

// const moto1 = new Moto('Suzuki',2015,'Verte');

// moto1.assurance();

function Personnage(nom, taille){
    this.nom = nom ;
    this.taille = taille;
    this.avancer = function(){
        console.log(`${this.nom} avance ... `);
    }
}
const perso1 = new Personnage( 'Buddy', 190);
const perso2 = new Personnage( 'Anubis', 60);

perso1.avancer();

console.log(perso1, perso2);