import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CardHighlightedComponent } from '../../components/card-highlighted/card-highlighted.component';
import { CardComponent, GamesInfo } from '../../components/card/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TitleComponent,
    MenuBarComponent,
    CardHighlightedComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public games_info: GamesInfo[] = [
    {
      title: 'God of War Ragnarok',
      img_url: '../../../assets/GOW_Ragnarok.jpeg',
      url: 'https://www.playstation.com/pt-br/games/god-of-war-ragnarok/',
    },
    {
      title: 'Bloodborne',
      img_url: '../../../assets/bloodborne.jpg',
      url: 'https://www.playstation.com/pt-br/games/bloodborne/',
    },
    {
      title: "Baldur's Gate 3",
      img_url: '../../../assets/BG3.jpg',
      url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    },
    {
      title: 'Borderlands 3',
      img_url: '../../../assets/borderlands.jpg',
      url: 'https://store.steampowered.com/app/397540/Borderlands_3/',
    },
    {
      title: 'Batman Arkham knight',
      img_url: '../../../assets/batman.jpg',
      url: 'https://store.steampowered.com/app/208650/Batman_Arkham_Knight/',
    },
  ];
}
