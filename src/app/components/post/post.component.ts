import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { MidiaComponent } from '../midia/midia.component';
import { BotoesComponent } from '../botoes/botoes.component';

@Component({
  selector: 'app-post',
  imports: [CabecalhoComponent, MidiaComponent, BotoesComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {}
