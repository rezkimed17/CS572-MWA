import { Component, Input } from '@angular/core';

@Component({
  selector: 'mypost',
  template: `
      <p> {{ post.body }} </p>
  `,
  styles: ['']
})
export class MyPostComponent {
    @Input() post: Post;
    constructor(){}
}
export interface Post {
    id: number,
    title: string,
    body: string
}