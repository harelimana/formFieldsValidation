
(function () { /* une IEF utile pour ne pas polluer l'espace global */
// Fonction de désactivation (hidding) de l'affichage des « errortools »
    function deactivateTooltips() {
        var spans = document.getElementsByTagName('span');
        var spansLength = spans.length;
        for (var i = 0; i < spansLength; i++) {
            if (spans[i].className === 'errortool') {
                spans[i].style.display = 'none';
            }
        }
    }
    /* La fonction ci-dessous permet de récupérer la « tooltip »
     qui correspond à tous les inputs */
    function getTooltip(element) {
        while (element === element.nextSibling) {
            if (element.className === 'errortool') {
                return element;
            }
        }
        return false;
    }
    /* Fonctions de vérification du formulaire, elles renvoient «true» si tout est OK */
    var fieldCheck = {}; /* an litteral objet that keeps all functions in the same space  */

    fieldCheck['sex'] = function () {
        var sex = document.getElementsByName('sex');
        var tooltipStyle = getTooltip(sex[1].parentNode).style;

        if (sex[0].checked || sex[1].checked) {
            tooltipStyle.display = 'none';
            return true;
        } else {
            tooltipStyle.display = 'inline-block';
            return false;
        }
    };

    fieldCheck['lastName'] = function () {
        var name = document.getElementById('lastName');
        tooltipStyle = getTooltip(name).style;
        if (name.value.length >= 2) {

            name.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            name.className = 'errortool';
            name.nextElementSibling.style.display = 'inline-block';
            return false;
        }
    };

    fieldCheck['firstName'] = function () {
        var surname = document.getElementById('firstName');
        tooltipStyle = getTooltip(surname).style;
        if (surname.value.length >= 2) {

            surname.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            surname.className = 'errortool';
            surname.nextElementSibling.style.display = 'inline-block';
            return false;
        }
    };

    fieldCheck['email'] = function () {
        var email = document.getElementById('email');
        var regex_email = /^[a-z_0-9.-]+@[a-z_0-9.-]+\.[a-z]{2,4}$/gi;
        if (!regex_email.exec(email)) {
            email.nextElementSibling.style.display = 'inline-block';
            console.log('This email ' + email + ' is invalid !');
        } else {
            this.email = email;
        }
    };

    fieldCheck['age'] = function () {
        var age = document.getElementById('age');
        var tooltipStyle = getTooltip(age).style;
        var ageValue = parseInt(age.value);
        if (!isNaN(ageValue) || (ageValue >= 6 && ageValue <= 90)) {
            age.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            age.className = 'incorrect';
            tooltipStyle.display = 'inline-block';
            return false;
        }
    };
    fieldCheck['login'] = function () {
        var login = document.getElementById('login');
        var tooltipStyle = getTooltip(login).style;
        if (login.value.length >= 4) {
            login.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            login.className = 'incorrect';
             login.nextElementSibling.style.display = 'inline-block';
           // tooltipStyle.display = 'inline-block';
            return false;
        }
    };
    fieldCheck['pwd1'] = function () {
        var pwd1 = document.getElementById('pwd1');
        var tooltipStyle = getTooltip(pwd1).style;
        if (pwd1.value.length >= 6) {
            pwd1.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            pwd1.className = 'incorrect';
             pwd1.nextElementSibling.style.display = 'inline-block';
          //  tooltipStyle.display = 'inline-block';
            return false;
        }
    };
    fieldCheck['pwd2'] = function () {
        var pwd1 = document.getElementById('pwd1');
        var pwd2 = document.getElementById('pwd2');
        var tooltipStyle = getTooltip(pwd2).style;
        if (pwd1.value === pwd2.value && pwd2.value !== '') {
            pwd2.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            pwd2.className = 'incorrect';
             pwd2.nextElementSibling.style.display = 'inline-block';
          //  tooltipStyle.display = 'inline-block';
            return false;
        }
    };
    fieldCheck['country'] = function () {
        var country = document.getElementById('country');
        var tooltipStyle = getTooltip(country).style;
        if (country.options[country.selectedIndex].value !== 'none')
        {
            tooltipStyle.display = 'none';
            return true;
        } else {
            country.getElementSibling.style.display = 'inline-block';
            tooltipStyle.display = 'inline-block';
            return false;
        }
    };

    /* ======================================= */
    /*          Fields validation events       */
    /* ======================================= */

    (function () { /* Utilisation d'une fonction anonyme permet l'économie
     de variables globales. */

        var myForm = document.getElementById('myForm');
        var inputs = document.getElementsByTagName('input');
        var inputsLength = inputs.length;
        for (var i = 0; i < inputsLength; i++) {
            if (inputs[i].type === 'text' || inputs[i].type ===
                    'password') {
                inputs[i].onkeyup = function () {
                    fieldCheck[this.id](this.id); /* « this » représente
                     l'input actuellement modifié */
                };
            }
        }
        myForm.onsubmit = function () {
            var result = true;
            for (var i in fieldCheck) {
                result = fieldCheck[i](i) && result;
            }
            if (result) {
                alert('Le formulaire est bien rempli.');
            }
            return false;
        };
        myForm.onreset = function () {

            for (var i = 0; i < inputsLength; i++) {
                if (inputs[i].type === 'text' || inputs[i].type === 'password') {
                    inputs[i].className = '';
                }
            }
            deactivateTooltips();
        };
    })();
    /* The form is initialized. The «
     tooltips » may get desabled */
    deactivateTooltips();
})();
