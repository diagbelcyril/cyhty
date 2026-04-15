import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './weapons.html',
  styleUrls: ['./weapons.css']
})
export class WeaponsComponent {
  menuOpen = false;

  categories = [
    {
      title: 'ASSAULT',
      items: [
        { id: 'ak117', name: 'AK117', image: 'ak117.webp' },
        { id: 'grau', name: 'Grau', image: 'grau.jpg' }
      ]
    },
    {
      title: 'SMGS',
      items: [
        { id: 'fennec', name: 'Fennec', image: 'fennec.jpg' },
        { id: 'qq9', name: 'QQ9', image: 'qq9.jpg' }
      ]
    },
    {
      title: 'SNIPERS',
      items: [
        { id: 'dl-q33', name: 'DL Q33', image: 'dlq.jpg' },
        { id: 'hdr', name: 'HDR', image: 'hdr.jpg' }
      ]
    },
    {
      title: 'SHOTGUNS',
      items: [
        { id: 'krm-262', name: 'KRM-262', image: 'krm.jpg' },
        { id: 'by15', name: 'BY15', image: 'by15.jpg' }
      ]
    },
    {
      title: 'MYTHIC BLUEPRINTS',
      isMythic: true,
      items: [
        { id: 'ak117-mythic', name: 'AK117 - Grim Ending', image: 'mento.jpg' },
        { id: 'grau-mythic', name: "Grau - Phantom's Core", image: 'grau2.jpg' },
        { id: 'dlq-mythic', name: 'DL Q33 - Lotus Flawless', image: 'dlq12.jpg' }
      ]
    }
  ];
}