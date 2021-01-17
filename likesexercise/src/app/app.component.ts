import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1> HELLO </h1> <button (click) = "getLikes()">LIKE</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'likesexercise';

  constructor(){
    console.log("unlike");
   }
  
   public num: number = 0;
    getLikes(){
         
           if(this.num==0){
            this.num++;
            console.log("liked", this.num);
           }
           else{
             this.num--;
             console.log("unliked", this.num);
           }
              
          }
}
// './app.component.html'