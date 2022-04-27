import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnInit {

  @Input() galleryData: Item[] = [];

  previewImage = false;
  showMask = false;
  currentLightBoxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onPreviewImage(index: number): void {
    // shows image 
  }
}
