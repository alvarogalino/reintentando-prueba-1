import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-heroes.component.html',
  styleUrl: './list-heroes.component.css'
})
export class ListHeroesComponent {

  public heroesName : string[] = ['Spiderman', 'Hulk', 'Batman', 'Thor', 'Superman'];
  public deletedHeroe?: string;

  borrarHeroes(){
    this.deletedHeroe = this.heroesName.pop();
  }

  changeHeroes(){
    this.heroesName[3] = 'Flash';
  }

}
