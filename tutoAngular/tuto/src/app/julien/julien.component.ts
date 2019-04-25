import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-julien',
  templateUrl: './julien.component.html',
  styleUrls: ['./julien.component.css']
})
export class JulienComponent implements OnInit {

  addition:number = 15;
  x:number;
  y:number;
  isLoggedIn:boolean = false;
  monNom:string;
  myList:any[];
  connectedAt:Date;

  constructor(public http:HttpClient) {
    this.x = 7;
    this.y = 3;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) =>{console.log("data is",data)});

    //this.login();
    this.myList = [
      {
        nom:"meteor",
        disponible:true
      },
      {
        nom:"electron",
        disponible:false
      },
      {
        nom:"react",
        disponible:false
      },
      {
        nom:"webpack",
        disponible:true
      }
    ];
  }

  getStatus(){
    if(this.isLoggedIn){
      return 'green';
    } else {
      return 'red';
    }
  }

  ngOnInit() {
  }

  multiplication() : number{
    return this.x * this.y;
  }

  login(){
    setTimeout(()=>{
      this.isLoggedIn = true;
      alert("Vous etes maintenant connecté en tant que " + this.monNom);
      this.connectedAt = new Date;
    },4000);
  }
}
