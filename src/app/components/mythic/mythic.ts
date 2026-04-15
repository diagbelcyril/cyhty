import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mythic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mythic.html',
  styleUrl: './mythic.css'
})
export class MythicComponent {
  mythicWeapons = [
    { name: 'AK117 - Grim Ending', image: 'assets/images/ak117-mythic.webp', tier: 'Mythic' },
    { name: 'Grau 5.56 - Phantom\'s Core', image: 'assets/images/grau-mythic.jpg', tier: 'Mythic' },
    { name: 'DL Q33 - Lotus Flawless', image: 'assets/images/dlq-mythic.jpg', tier: 'Mythic' },
    { name: 'Kilo 141 - Demons Song', image: 'assets/images/kilo-mythic.jpg', tier: 'Mythic' }
  ];
}