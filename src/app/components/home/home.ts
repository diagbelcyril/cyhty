import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  categories = [
    { name: 'Assault Rifles', desc: 'Balanced and powerful weapons.' },
    { name: 'SMGs', desc: 'Fast firing close-range weapons.' },
    { name: 'Snipers', desc: 'High damage long-range weapons.' },
    { name: 'LMGs', desc: 'Heavy weapons with large ammo.' },
    { name: 'Shotguns', desc: 'Deadly at close range.' },
    { name: 'Marksman', desc: 'Precision semi-auto rifles.' }
  ];

}