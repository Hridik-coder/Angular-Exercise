import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularexercise';

  constructor(){
    console.log("unlike");
   }
  
   public num: number = 0;
   
      // getLikes(){
         
      //      if(this.num==0){
      //       this.num++;
      //       console.log("liked", this.num);
      //      }
      //      else{
      //        this.num--;
      //        console.log("unliked", this.num);
      //      }
              
      //     }
  }
  













