import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/characters.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [];

}
