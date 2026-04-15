import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapon-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './weapon-detail.html',
  styleUrls: ['./weapon-detail.css']
})
export class WeaponDetailComponent {
  menuOpen = false;
  weaponId = '';
  currentWeapon: any;

  weapons: any = {
    'ak117': {
      name: 'AK117',
      role: 'META MID-RANGE BUILD',
      image: 'ak117.webp',
      stats: { damage: 82, accuracy: 90, range: 76, mobility: 68 },
      attachments: [
        'OWC Ranger Barrel',
        'Red Dot Sight',
        'Granulated Grip Tape',
        '40 Round Extended Mag',
        'OWC Laser Tactical'
      ]
    },

    'grau': {
      name: 'Grau',
      role: 'LOW RECOIL META',
      image: 'grau.jpg',
      stats: { damage: 80, accuracy: 92, range: 78, mobility: 70 },
      attachments: [
        'Tempus Barrel',
        'No Stock',
        'Granulated Grip Tape',
        '60 Round Mag',
        'Tactical Laser'
      ]
    },

    'fennec': {
      name: 'Fennec',
      role: 'CLOSE RANGE BEAST',
      image: 'fennec.jpg',
      stats: { damage: 88, accuracy: 85, range: 55, mobility: 95 },
      attachments: [
        'MIP Extended Barrel',
        'No Stock',
        'Extended Mag A',
        'Granulated Grip Tape',
        'OWC Laser Tactical'
      ]
    },

    'qq9': {
      name: 'QQ9',
      role: 'FAST RUSH BUILD',
      image: 'qq9.jpg',
      stats: { damage: 86, accuracy: 84, range: 58, mobility: 93 },
      attachments: [
        'Monolithic Suppressor',
        'No Stock',
        '45 Round Extended Mag',
        'OWC Laser Tactical',
        'Strike Foregrip'
      ]
    },

    'dl-q33': {
      name: 'DL Q33',
      role: 'LONG RANGE ONE SHOT',
      image: 'dlq.jpg',
      stats: { damage: 98, accuracy: 95, range: 99, mobility: 60 },
      attachments: [
        'OWC Light Suppressor',
        'Extended Barrel',
        'Fast ADS Laser',
        'Stippled Grip Tape',
        'FMJ'
      ]
    },

    'hdr': {
      name: 'HDR',
      role: 'HEAVY SNIPER BUILD',
      image: 'hdr.jpg',
      stats: { damage: 99, accuracy: 94, range: 100, mobility: 55 },
      attachments: [
        '26.9 HDR Pro',
        'FTAC Stalker Scout',
        '9 Round Mag',
        'Stippled Grip Tape',
        'FMJ'
      ]
    },

    'krm-262': {
      name: 'KRM-262',
      role: 'ONE PUMP SHOTGUN',
      image: 'krm.jpg',
      stats: { damage: 100, accuracy: 80, range: 52, mobility: 88 },
      attachments: [
        'Marauder Suppressor',
        'Extended Barrel',
        'No Stock',
        'OWC Laser Tactical',
        'Sleight of Hand'
      ]
    },

    'by15': {
      name: 'BY15',
      role: 'FAST SHOTGUN RUSH',
      image: 'by15.jpg',
      stats: { damage: 95, accuracy: 82, range: 56, mobility: 86 },
      attachments: [
        'Marauder Suppressor',
        'RTC Extended Light Barrel',
        'No Stock',
        'Slug Reload',
        'OWC Laser Tactical'
      ]
    },
    'ak117-mythic': {
      name: 'AK117 - Grim Ending',
      role: 'PREMIUM MYTHIC BUILD',
      image: 'mento.jpg',
      stats: { damage: 82, accuracy: 92, range: 76, mobility: 70 },
      attachments: ['OWC Ranger Barrel', 'Integral Suppressor', 'Granulated Grip Tape', '48 Round Extended Mag', 'No Stock']
    },
    'grau-mythic': {
      name: 'Grau - Phantom Core',
      role: 'MYTHIC LOW RECOIL',
      image: 'grau2.jpg',
      stats: { damage: 80, accuracy: 94, range: 78, mobility: 72 },
      attachments: ['Nexus Barrel', 'No Stock', '60 Round Mag', 'Tactical Laser', 'Cronen Sniper Grip']
    },
    'dlq-mythic': {
      name: 'DL Q33 - Lotus Flawless',
      role: 'ULTIMATE SNIPER BUILD',
      image: 'dlq12.jpg',
      stats: { damage: 98, accuracy: 96, range: 100, mobility: 62 },
      attachments: ['Maevwat Omega Mag', 'Free Floating Barrel', 'Fast ADS Laser', 'Stippled Grip Tape', 'FMJ']
    }
  };

  constructor(private route: ActivatedRoute) {
    this.weaponId = this.route.snapshot.paramMap.get('id') || '';
    this.currentWeapon = this.weapons[this.weaponId];
  }
  copyLoadout() {
  if (!this.currentWeapon) return;

  const loadout = this.currentWeapon.attachments.join(', ');
  navigator.clipboard.writeText(loadout);
  alert('Loadout copied successfully!');
}
}