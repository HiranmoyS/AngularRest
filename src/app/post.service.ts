import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string="http://localhost:3000/posts"
  posts:Post[];
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
  createPost(post){
    return this.http.post(this.url,post);
  }
  updatePost(post){
    return this.http.put(this.url+'/'+post.id,post);
  }
  deletePost(id){
    return this.http.delete(this.url+'/'+id);
  }
}
