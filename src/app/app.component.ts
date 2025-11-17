import { Component } from '@angular/core';

import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';
import { CarrosselStoriesComponent } from './components/carrossel-stories/carrossel-stories.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { HeaderPaginaComponent } from './components/header-pagina/header-pagina.component';

@Component({
  selector: 'app-root',
  imports: [
    ListaPostsComponent,
    CarrosselStoriesComponent,
    BarraLateralComponent,
    HeaderPaginaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meu-insta';
}
