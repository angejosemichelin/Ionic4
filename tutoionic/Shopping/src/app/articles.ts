import { Injectable } from '@angular/core';

@Injectable()
export class Articles { 
    articles = [
        {id:1,nom:"tele",prix:2000,detail:"okok1"},
        {id:2,nom:"smartphone",prix:150,detail:"okok2"},
        {id:3,nom:"ordinateur",prix:150,detail:"okok3"}
    ];
}