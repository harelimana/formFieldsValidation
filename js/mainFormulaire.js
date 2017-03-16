
/*
 Exercice 2
 Vous devez créer un formulaire reprenant le nom, le prénom,
 la date de naissance et l'email d'un élève.
 Si une valeur n'est pas valide (à contrôler à l'aide de regex :
 longueurs du nom et du prénom, format date et email), vous
 afficherez un message (via console.log).
 Lorsque toutes les valeurs sont valides, vous sauvegardez
 celles-ci dans un objet Eleve que vous afficherez ensuite
 dans la console.
 */
var nom = "";
var prenom = "";
var email = "";
var date_naissance = "";

function Eleve(nom, prenom, email, date_naissance) {
    this.nom = nom,
            this.prenom = prenom,
            this.email = email,
            this.date_naissance = date_naissance;
}
var errorField = {
    errorName: function () {
        return document.getElementByClassName('errorName');
    },
    errorSurname: function () {
        return document.getElementByClassName('errorName');
    }
};

function checkForm(nom, prenom, email, date_naissance) {

    var nom = document.getElementById('nom').value;
    var regex_nom = /^[a-zA-Z]{2,}/gi;
    if (!regex_nom.exec(nom)) {
      errorField.errorName;
        console.log('Le nom a au moins deux caractères');
    } else {
        // console.log(nom);
        this.nom = nom;
    }

    var prenom = document.getElementById('prenom').value;
    var regex_prenom = /^[a-zA-Z]{2,}/gi;
    if (!regex_prenom.exec(prenom)) {
        errorField.errorSurname();
        console.log('Le prenom a moins deux caractères');
    } else {
        //  console.log(prenom);
        this.prenom = prenom;
    }

    var email = document.getElementById('email').value;
    var regex_email = /^[a-z_0-9-.]+@[a-z_0-9-.]+\.[a-z]{2,4}$/i;
    if (!regex_email.exec(email)) {
        console.log('This email ' + email + ' is invalid !');
    } else {
        // console.log(email);
        this.email = email;
    }

    var date_naissance = document.getElementById('date_naissance').value;
    // var date_naissance = new Date('YYYY/mm/dd', date_naissance);

    var eleve = new Eleve(nom, prenom, email, date_naissance);

    console.log(eleve);
    return false;
}
