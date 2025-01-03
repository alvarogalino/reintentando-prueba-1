import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListHeroesComponent } from './heroes/list-heroes/list-heroes.component';
import { MainPagesComponent } from './dbz/pages/main-pages.component/main-pages.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListHeroesComponent, MainPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-1';

  public cualquierCosa: string = 'Contador';

  public contarNumeros: number = 0;

  sumarNumeros(){
    this.contarNumeros= this.contarNumeros + 1;
  }

  restarNumeros(){
    this.contarNumeros= this.contarNumeros -1;
  }

  resetearContador(){
    this.contarNumeros = 0;
  }


}
