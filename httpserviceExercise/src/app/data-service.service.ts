import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

private url = "./assets/data.json";

getPosts() {
 return this.http.get(this.url);
}

createPost(post : any) {
 return this.http.post(this.url, JSON.stringify(post))
}

// updatePost(post){
//  return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
// }

// deletePost(id) {
//  return this.http.delete(this.url + '/' + id);
// }
// }
}
