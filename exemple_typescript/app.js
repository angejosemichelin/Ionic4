console.log("Hello World!");
// string
var monNom = "Ange";
console.log("1ere valeur:", monNom);
// boolean
// monNom = true; Erreur...
// string, number, boolean, undefined, null, void
// le type Any
var x = "salut!";
console.log("1ere valeur x:", x);
x = false;
console.log("2eme valeur x:", x);
x = 44;
console.log("2eme valeur x:", x);
// le type tuple
var y = ["Ange", true];
// y = [false, "Ange"]; erreur
// type multiple (union type
var z;
z = 5;
console.log("1ere valeur de z:", z);
z = "Coucou!";
console.log("2eme valeur de z:", z);
// object comme type (object as type)
// formule serai 
/*
nom_de_la_variable : {
    propriete1 : x,
    propriete2 : y,
    propriete3 : z,
    ...
    proprieten : a,
}
*/
var data;
data = {
    nom: 'Ange',
    age: 45,
    marie: false
};
//data = 5 erreur..
// fonction comme type (function as type)
//var myFx : (arg1:x,arg1:y,arg1:z,....,arg1:a), b
var myFx;
myFx = function (nom, age) {
    return age * 2;
};
console.log("ma fonction est", myFx("Julien", 5));
var maFonction2 = function (nom, age) {
    return age * 5;
};
console.log("ma 2eme fonction est", maFonction2("Ange", 10));
//Array 
var tab1;
tab1 = [0, 1, 2, 3];
var tab2;
tab2 = ["junior", 2, 6, "marc"];
var monStatut = {
    nom: "ange",
    age: 26,
    marié: false,
    salary: function (x, y) {
        return x * y;
    }
};
var monStatus2 = {
    adresse: "55 bd de charonne",
    nom: "ange",
    age: 26,
    marié: false,
    salary: function (x, y) {
        return x * y;
    }
};
//fonctions fléchés (arrow functions)
var fx1 = function (value) {
    console.log(value);
};
var fx2 = function (value) { return console.log(value); };
fx1("fonction non fleché");
fx2("fonction fleché");
/*
1) fonctions avec plusieurs arguments
(liste d'arguments avec leur types) => console.log(value)
(liste d'arguments avec leur types) => {
    value = value + "salut";
    console.log(value);
}
*/
var fx3 = function (x, y) {
    x = x + y;
    return x;
};
/*
2) fonctions avec un seul argument
*/
var fx4 = function (x) {
    console.log(x);
};
// 3) fonctions avec 0 arguments
var fx5 = function () {
    console.log("je n'ai aucun argument");
};
// Les classes
// nom_de_la_classe {}
// les modificateurs d'acces
// private, protected, public
var user = /** @class */ (function () {
    function user(nom, mail, password) {
        this.age = 20;
        console.log("je suis le contructeur");
        this.createUser(nom, mail, password);
    }
    user.prototype.createUser = function (nom, email, pass) {
        this.nom = nom;
        this.email = email;
        this.password = pass;
    };
    return user;
}());
var myUser = new user("ange", "ange@test.com", "aero");
console.log("my user est ", myUser);
/*
let age = myUser.age;
console.log("age", age);
myUser.age = 45;
console.log("age2", myUser.age);
*/ 
