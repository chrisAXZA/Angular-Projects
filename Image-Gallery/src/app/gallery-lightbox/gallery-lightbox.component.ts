import { animate, style, transition, trigger, AnimationEvent, animation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' }))
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' }))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('50ms', style({ opacity: 0.8 }))
      ])
    ]),
  ],
})
export class GalleryLightboxComponent implements OnInit {

  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightBoxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  public onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightBoxImage = this.galleryData[index];
  }

  public onAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  public onClosePreview(): void {
    this.previewImage = false;
  }

  public next(): void {
    this.currentIndex = this.currentIndex + 1;

    if (this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }

    this.currentLightBoxImage = this.galleryData[this.currentIndex];
  }

  public prev(): void {
    this.currentIndex = this.currentIndex - 1;

    if (this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }

    this.currentLightBoxImage = this.galleryData[this.currentIndex];
  }
}
