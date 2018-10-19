import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post.component';

@Component({
  selector: 'app-root',
  template: `
      <input [(ngModel)]="text" value="" >
      <div *ngFor="let post of posts"> 
          <mypost [post]="post" *ngIf="post.body.includes(text)" ></mypost>
      </div> 
  `,
  styles: ['']
})
export class AppComponent implements OnInit{

  private posts: Post[];
  private text: string = "";

  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.getPosts().subscribe((data:Post[]) => this.posts = data);
  }

}


