import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.scss'],
})
export class BypassSecurityComponent implements OnInit {
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updateVideoUrl('01xRJV3Xzcc');
  }

  ngOnInit() {}
  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
}
