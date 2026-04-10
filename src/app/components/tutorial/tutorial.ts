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
    ak117: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    grau: 'https://www.youtube.com/embed/M7lc1UVf-VE',
    fennec: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    qq9: 'https://www.youtube.com/embed/oHg5SJYRHA0',
    hdr: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    'dl q33': 'https://www.youtube.com/embed/tgbNymZ7vqY',
    'krm-262': 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    by15: 'https://www.youtube.com/embed/ScMzIvxBSi4'
  };

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.weaponId = this.route.snapshot.params['id'];

    const url =
      this.videos[this.weaponId] ||
      'https://www.youtube.com/embed/jNQXAC9IVRw';

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}