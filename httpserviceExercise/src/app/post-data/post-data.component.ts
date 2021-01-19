import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  posts: any;
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(response);
      });
  }

  createPost(input: HTMLInputElement) {
    //console.log("hi");
    let post = { id: input.value };
    input.value = '';

      this.service.createPost(post).subscribe(
        (response : any) => {
          post['id'] = response.id;
         
          this.posts.splice(0, 0, post);
          console.log(response);
      })
  }

}
