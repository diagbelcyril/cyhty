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
        { name: 'AK117', image: 'ak117.webp' },
        { name: 'Grau', image: 'grau.jpg' }
      ]
    },
    {
      title: 'SMGS',
      items: [
        { name: 'Fennec', image: 'fennec.jpg' },
        { name: 'QQ9', image: 'qq9.jpg' }
      ]
    },
    {
      title: 'SNIPERS',
      items: [
        { name: 'DL Q33', image: 'dlq.jpg' },
        { name: 'HDR', image: 'hdr.jpg' }
      ]
    },
    {
      title: 'SHOTGUNS',
      items: [
        { name: 'KRM-262', image: 'krm.jpg' },
        { name: 'BY15', image: 'by15.jpg' }
      ]
    }
  ];
}