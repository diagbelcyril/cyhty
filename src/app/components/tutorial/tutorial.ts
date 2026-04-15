import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tutorial.html',
  styleUrls: ['./tutorial.css']
})
export class TutorialComponent {
  weaponId = '';
  videoUrl!: SafeResourceUrl;
  menuOpen = false;

  videos: any = {
    'ak117': 'https://www.youtube.com/embed/_ItlkX4IsVE',
    'grau': 'https://www.youtube.com/embed/RG9FRBJfIQ8',
    'fennec': 'https://www.youtube.com/embed/elxXd_BawMU',
    'qq9': 'https://www.youtube.com/embed/q2XGcaK0M4Q',
    'hdr': 'https://www.youtube.com/embed/dj4GueCpsZ8',
    'dl-q33': 'https://www.youtube.com/embed/Kg9vm6pvu6Q',
    'krm-262': 'https://www.youtube.com/embed/fZkiyyM2xng',
    'by15': 'https://www.youtube.com/embed/2IVAAFSsK8k',

    // MYTHIC
    'ak117-mythic': 'https://www.youtube.com/embed/e2kK8nvV5kw',
    'grau-mythic': 'https://www.youtube.com/embed/TEC8MEcJ3Z4',
    'dlq-mythic': 'https://www.youtube.com/embed/hnDHMlBaf8Y'
  };

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.weaponId = this.route.snapshot.paramMap.get('id') || '';

    const url =
      this.videos[this.weaponId] ||
      'https://www.youtube.com/embed/jNQXAC9IVRw';

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}