import { Component, OnInit, Input } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//interface start
interface Post {
  title: string;
  content: string;
  id: string; 
}
//interface end

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title:string;
  content:string;
  date:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  postsCol: AngularFirestoreCollection<Post>;
  //posts: Observable<Post[]>;
  posts: any;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'date': this.date});
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}
