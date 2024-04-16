import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-highlighted',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-highlighted.component.html',
  styleUrl: './card-highlighted.component.css',
})
export class CardHighlightedComponent {
  public redirectLink() {
    window.open(
      'https://store.steampowered.com/app/377160/Fallout_4/',
      '_blank'
    );
  }
}
