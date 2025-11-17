import { Component } from '@angular/core';

import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';

@Component({
  selector: 'app-root',
  imports: [ListaPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meu-insta';
}
