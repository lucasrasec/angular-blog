import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface GamesInfo {
  title: string;
  img_url: string;
  url: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() game_info!: GamesInfo;

  public hovered = false;

  public hoverCard(value: boolean) {
    this.hovered = value;
  }

  public redirectAction() {
    window.open(this.game_info.url, 'blank');
  }
}
