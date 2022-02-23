function mafonctionAlerte(){
  alert("C'est une alerte");
}

function mafonctionVariables() {
  var monPrenom = "Olivier";
  var monNom = "Polack";
  var age = 44;
  alert("Mon prenom est: "+ monPrenom + " et mon nom est : "+ monNom + ".");
  alerte("Et j ai: "+ age.ToString()); // Cette fonction échoue. Pourquoi?

}

function unPrompt(){
    //alert("exec");
    let question = "Votre espèce?";
    let reponseParDefaut = "humaine";
    let reponse = prompt(question, reponseParDefaut);
    let text;
    if ( reponse === "" ) {
      text = "Vous n'avez rien saisi.";
    }
    else if ( reponse === null ) {
      text = "Vous avez appuyé sur Annuler";
    }
    else if ( reponse === reponseParDefaut){
      text = "Votre réponse est celle proposée par défaut: "+ reponse;
    }
    else {
      text = "Vous avez saisi: "+ reponse+ ". Vous êtes un extra-terrestre mais bienvenu quand-même";
    }
    document.getElementById("reponseDuPrompt").innerHTML = text;
}
