
const  url = 'https://blockchain.info/ticker';


function recupPrix () {
// crée un requete 

let requete = new XMLHttpRequest(); // Crée un objet 

requete.open('GET',url); // premier params GET( utilisation d'uune url) POST - deuxiem params url de l'API

requete.responseType = 'json' ; // Nous attendons du JSON

requete.send(); // Nous envoyer notre quette 

// Des qu'on recoit une reponse on exécute une fonction

requete.onload = function(){
  if(requete.readyState === XMLHttpRequest.DONE){ // State état actuel est bien terminer et que c'est bien égal à xmlhttprequest
    if(requete.status === 200){ //erreur 200 c'est que tout c'est bien passée 
      let reponse = requete.response; // On stock la réponse
      console.log ("ok");
      let prixEnEuros = reponse.EUR.last;
      console.log(prixEnEuros);
      document.querySelector('#price_label').textContent = prixEnEuros; // Affichage dans le document
      
    }
    else{
      alert('Un probleme est intervenue , merci de réessayer plus tard.');
    }
  }
}
}
setInterval(recupPrix, 1000) // Interval actualiser toute les 1000 secondes