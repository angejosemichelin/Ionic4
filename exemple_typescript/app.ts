console.log("Hello World!");

// string
var monNom:string = "Ange";
console.log("1ere valeur:", monNom);

// boolean
// monNom = true; Erreur...
// string, number, boolean, undefined, null, void
// le type Any
var x:any = "salut!";
console.log("1ere valeur x:", x);
x = false;
console.log("2eme valeur x:", x);
x = 44;
console.log("2eme valeur x:", x);
// le type tuple
var y : [string, boolean] = ["Ange", true];
// y = [false, "Ange"]; erreur
// type multiple (union type
var z : string | number;
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
var data: {
    nom:string,
    age:number,
    marie:boolean
};
data = {
    nom:'Ange',
    age:45,
    marie:false 
};
//data = 5 erreur..
// fonction comme type (function as type)
//var myFx : (arg1:x,arg1:y,arg1:z,....,arg1:a), b
var myFx : (nom : string, age : number) => number;
myFx = function(nom,age){
    return age*2;
}
console.log("ma fonction est", myFx("Julien", 5));
//Nos propres types (custom types)
//Formule ==>
//type nom_du_type = x
type mesFonctions = (nom:string, age:number) => number;
var maFonction2 : mesFonctions = function(nom,age) : number{
    return age*5;
};
console.log("ma 2eme fonction est", maFonction2("Ange", 10));
//Array 
var tab1 : number[];
tab1 = [0, 1, 2, 3];
var tab2 : (string | number)[];
tab2 = ["junior", 2, 6, "marc"];
//les interfaces
/*Formule ==>
interface nom_interface= {
    propriete1 : x,
    propriete2 ?: y, //optionnel
    methodes(les arguments et leur types) => x
}
*/
interface statut {
    nom: string,
    age: number,
    marié:boolean,
    nbrEnfants ?: number,
    salary(age: number, enfants: number):number;
}
var monStatut : statut = {
    nom: "ange",
    age: 26,
    marié:false,
    salary: function(x:number, y:number):number{
        return x*y;
    }
}
interface statut2 extends statut {
    adresse: string
}
var monStatus2 : statut2 = {
    adresse: "55 bd de charonne",
    nom: "ange",
    age: 26,
    marié:false,
    salary: function(x:number, y:number):number{
        return x*y;
    }
}
//fonctions fléchés (arrow functions)
var fx1 = function(value){
    console.log(value)
}
var fx2 = (value : any) => console.log(value);
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
var fx3 = (x:number,y:number):number=>{
    x = x + y;
    return x;
}
/*
2) fonctions avec un seul argument
*/
var fx4 = x => {
    console.log(x);
}
// 3) fonctions avec 0 arguments
var fx5 = () : void => {
    console.log("je n'ai aucun argument");
}
// Les classes
// nom_de_la_classe {}
// les modificateurs d'acces
// private, protected, public
class user {
    nom:string;
    email:string;
    password:string;
    protected isLoggedIn:boolean;
    private age:number;
    constructor(nom:string,mail:string,password:string){
        this.age = 20;
        console.log("je suis le contructeur");
        this.createUser(nom,mail,password);
    }
    createUser(nom:string,email:string,pass:string):void{
        this.nom = nom;
        this.email = email;
        this.password = pass;
    }
}
let myUser = new user("ange","ange@test.com","aero");
console.log("my user est ", myUser);
/*
let age = myUser.age;
console.log("age", age);
myUser.age = 45;
console.log("age2", myUser.age);
*/