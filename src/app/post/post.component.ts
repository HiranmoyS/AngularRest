import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
url:string="http://localhost:3000/posts"
posts:Object=[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getData()
    .subscribe(Response => {
        console.log("Executing Get");
        console.log(Response);
        this.posts=Response;
        console.log(this.posts);
    })
  }
createPost(){
  let post={
    "userId":2,
    "id":11,
    "title":"Using post with rest api in angular 10",
    "body":"Creating a new post"
  }
  this.postService.createPost(post)
  .subscribe(Response => {
    console.log('New Post Created');
    console.log(Response);
  });
}
updatePost(mypost){
     mypost ={
      "userId": 2,
      "id": 11,
      "title": "Using Post with Rest API in MyAngular App",
      "body": " Data  update using put "
     }
      this.postService.updatePost(mypost)
      .subscribe(response =>{
        console.log(response);
      })             
    }
  
    deletePost(post){
      this.postService.deletePost(post.id)
      .subscribe(response =>{
        console.log('Record get deleted')
      })
    }
}


