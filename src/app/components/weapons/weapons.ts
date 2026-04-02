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
        { name: 'AK-117', image: 'ak117.webp' },
        { name: 'Grau', image: 'images/gun2.jpg' }
      ]
    },
    {
      title: 'SMGS',
      items: [
        { name: 'Fennec', image: 'images/gun3.jpg' },
        { name: 'QQ9', image: 'images/gun4.jpg' }
      ]
    },
    {
      title: 'SNIPERS',
      items: [
        { name: 'DL Q33', image: 'images/gun5.jpg' },
        { name: 'HDR', image: 'images/gun6.jpg' }
      ]
    },
    {
      title: 'SHOTGUNS',
      items: [
        { name: 'KRM-262', image: 'images/gun7.jpg' },
        { name: 'BY15', image: 'images/gun8.jpg' }
      ]
    }
  ];
}