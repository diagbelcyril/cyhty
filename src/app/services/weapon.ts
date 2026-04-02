import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  weapons = [
    { name: 'AK-47', category: 'Assault Rifle' },
    { name: 'QQ9', category: 'SMG' },
    { name: 'DL Q33', category: 'Sniper' }
  ];

  getWeapons() {
    return this.weapons;
  }
}