import { Character } from '../../interfaces/characters.interface';
import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-main-pages',
  standalone: true,
  imports: [ListComponent,FormComponent],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.css'
})
export class MainPagesComponent {

  public characters: Character[] = [{
    name :'Krilin',
    power: 1000
  }, {
    name: 'Goku',
    power : 9500
  }, {
    name: 'Vegeta',
    power : 7500
  }];

}
